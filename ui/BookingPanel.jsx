import { Button } from "antd";
import { useAuth } from "../contexts/AuthContext";

function BookingPanel({
  type,
  date,
  time,
  length,
  price,
  bookingId,
  removeBooking,
}) {
  const { deleteBooking } = useAuth();
  const lengthNum = Number(length);
  const timeNum = Number(time);

  const imageURL = function (type) {
    if (type === "sup") return "SUP";
    if (type === "kayak") return "kayak";
    if (type === "surf") return "surf";
  };

  // Calculating pick up time
  const formattedPickUpTimes = {
    10: "10AM",
    11: "11AM",
    12: "12PM",
    13: "1PM",
    14: "2PM",
    15: "3PM",
    16: "4pm",
    17: "5PM",
    "half-day-morning": "10AM",
    "half-day-afternoon": "2PM",
    "full-day": "10AM",
  };

  const pickUpTime = function (time) {
    return formattedPickUpTimes[time];
  };

  // Calculating return time
  const formattedReturnTimes = {
    11: "11AM",
    12: "12PM",
    13: "1PM",
    14: "2PM",
    15: "3PM",
    16: "4pm",
    17: "5PM",
    18: "6PM",
    "half-day-morning": "2PM",
    "half-day-afternoon": "6PM",
    "full-day": "6PM",
  };

  const returnTime = function (time, lengthNum) {
    const numReturnTime = lengthNum === 1 ? timeNum + 1 : timeNum + 2;
    if (
      time === "half-day-morning" ||
      time === "half-day-afternoon" ||
      time === "full-day"
    ) {
      return formattedReturnTimes[time];
    } else {
      return formattedReturnTimes[numReturnTime];
    }
  };

  const handleDelete = async function (bookingId) {
    await deleteBooking(bookingId);
    removeBooking(bookingId);
  };

  return (
    <div
      className="booking-panel border-2 border-gray-700 rounded-md  h-[400px] text-off-white flex flex-col gap-[10%]"
      style={{ "--image-url": `url("../Img/${imageURL(type)}.jpg")` }}
    >
      <h2 className="mt-[30px] text-center z-20 relative">
        {type.toUpperCase()}
      </h2>

      <div className="flex gap-[20%] justify-center relative z-20  text-center ">
        <div>
          <h3>Pick Up</h3>
          <span>Date: </span>
          <p className="inline font-semibold">{date}</p>
          <br />
          <span>Time: </span>
          <p className="inline font-semibold">{pickUpTime(time)}</p>
        </div>
        <div>
          <h3>Return</h3>
          <span>Date: </span>
          <p className="inline font-semibold">{date}</p>
          <br />
          <span>Time: </span>
          <p className="inline font-semibold">{returnTime(time, lengthNum)}</p>
        </div>
      </div>

      <div className="relative z-20 text-center">
        <h3 className="font-semibold">€{price}</h3>
        <p>Pay on pick up</p>
      </div>

      <Button
        type="primary"
        className="bg-gray-700 w-fit relative mx-auto border-off-white z-20 hover:!bg-off-white hover:border-2 hover:border-gray-700 hover:!text-gray-700"
        onClick={() => handleDelete(bookingId)}
      >
        Cancel Booking
      </Button>
    </div>
  );
}

export default BookingPanel;
