import { useState } from "react";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import { Button, DatePicker, Form, Select } from "antd";
import { useNavigate } from "react-router-dom";

import { supabase } from "../utilities/supabase";
import { useRental } from "../contexts/RentalContext";
import { useAuth } from "../contexts/AuthContext";

function RentalForm({ handleRentalClick }) {
  const [selectedPickUpTime, setSelectedPickUpTime] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedRentalType, setSelectedRentalType] = useState(null);
  const { user } = useAuth();
  const rentalData = useRental();

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { Option } = Select;

  // Getting prices from the rental data in context
  function extractPrices(rentalData) {
    return rentalData.reduce((acc, item) => {
      const prices = item.prices.map((price) => {
        const [, value] = price.split(" --- €");
        return parseInt(value);
      });

      acc[item.title.toLowerCase()] = {
        1: prices[0],
        2: prices[1],
        "half-day": prices[2],
        "full-day": prices[3],
      };

      return acc;
    }, {});
  }

  const rentalPrices = extractPrices(rentalData);

  // Parsing the pick-up time to get the prices from the rentalPrices object above
  const parsePickUpTime = (time) => {
    if (time === "half-day-morning" || time === "half-day-afternoon") {
      return "half-day";
    }
    return time;
  };

  // Check if rental is for a full day or half day
  const isFullDayOrHalfDay = (time) => {
    return (
      time === "half-day-morning" ||
      time === "half-day-afternoon" ||
      time === "full-day"
    );
  };

  const price = isFullDayOrHalfDay(selectedPickUpTime)
    ? rentalPrices[selectedRentalType]?.[parsePickUpTime(selectedPickUpTime)]
    : rentalPrices[selectedRentalType]?.[selectedLength];

  // Submitting form function
  const onFinish = async function (values) {
    try {
      const formattedRentalDate = values.rentalDate
        ? dayjs(values.rentalDate).format("YYYY-MM-DD")
        : null;

      // Booking Object
      const booking = {
        user_id: user.id,
        type: selectedRentalType,
        date: formattedRentalDate,
        time: selectedPickUpTime,
        length: selectedLength,
        price: price,
      };

      const { error } = await supabase.from("bookings").insert([booking]);
      if (error) throw new Error(error);

      handleRentalClick();

      toast.success("Rental has successfully been reserved", {
        duration: 4000,
        position: "top-center",
        icon: "👏",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });

      navigate("/account");
    } catch (error) {
      console.error("Error booking rental:", error);
      toast.error("Error making reservation");
    }
  };

  // Disabling dates in the DatePicker before the current date
  const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
  };

  return (
    <Form
      form={form}
      name="rental"
      onFinish={onFinish}
      scrollToFirstError
      layout="vertical"
    >
      <Form.Item
        name="rentalType"
        label="Rental Type"
        rules={[
          {
            required: true,
            message: "Please select your equipment!",
          },
        ]}
      >
        <Select
          placeholder="Select your rental equipment"
          onChange={(value) => setSelectedRentalType(value)}
        >
          <Option value="sup">SUP</Option>
          <Option value="kayak">Kayak</Option>
          <Option value="surf">Surfboard</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="rentalDate"
        label="Date of rental"
        layout="horizontal"
        rules={[
          {
            required: true,
            message: "Please select your rental date!",
          },
        ]}
      >
        <DatePicker disabledDate={disabledDate} />
      </Form.Item>

      <Form.Item
        name="rentalPickup"
        label="Rental pick-up time"
        rules={[
          {
            required: true,
            message: "Please select your pick up time!",
          },
        ]}
      >
        <Select
          placeholder="Select your pick up time"
          onChange={(value) => setSelectedPickUpTime(value)}
        >
          <Option value="10">10:00</Option>
          <Option value="11">11:00</Option>
          <Option value="12">12:00</Option>
          <Option value="13">13:00</Option>
          <Option value="14">14:00</Option>
          <Option value="15">15:00</Option>
          <Option value="16">16:00</Option>
          <Option value="17">17:00</Option>
          <Option value="half-day-morning">Half Day (10:00 - 14:00)</Option>
          <Option value="half-day-afternoon">Half Day (14:00 - 18:00)</Option>
          <Option value="full-day">Full Day (10:00 - 18:00)</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="rentalLength"
        label="Rental Length"
        hasFeedback
        rules={[
          {
            required:
              selectedPickUpTime !== "half-day-morning" &&
              selectedPickUpTime !== "half-day-afternoon" &&
              selectedPickUpTime !== "full-day",
            message: "Please select your rental duration!",
          },
        ]}
      >
        <Select
          placeholder="Select your rental duration"
          disabled={
            selectedPickUpTime === "half-day-morning" ||
            selectedPickUpTime === "half-day-afternoon" ||
            selectedPickUpTime === "full-day"
          }
          onChange={(value) => setSelectedLength(value)}
        >
          <Option value="1">1 hour</Option>
          <Option value="2" disabled={selectedPickUpTime === "17"}>
            2 hours
          </Option>
        </Select>
      </Form.Item>

      {selectedLength &&
        selectedPickUpTime !== "half-day-morning" &&
        selectedPickUpTime !== "half-day-afternoon" &&
        selectedPickUpTime !== "full-day" &&
        selectedRentalType && (
          <p className=" flex justify-center my-5">
            Price: €{price} (Pay on pickup)
          </p>
        )}

      {selectedRentalType &&
        (selectedPickUpTime === "half-day-morning" ||
          selectedPickUpTime === "half-day-afternoon" ||
          selectedPickUpTime === "full-day") && (
          <p className="flex justify-center my-5">
            Price: €{price} (Pay on pickup)
          </p>
        )}

      <Form.Item>
        <div className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-gray-700 hover:!bg-off-white hover:border-2 hover:border-gray-700 hover:!text-gray-700
          "
          >
            Confirm Rental
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default RentalForm;
