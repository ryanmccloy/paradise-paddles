import dayjs from "dayjs";
import toast from "react-hot-toast";
import { Button, DatePicker, Form, Input, Select } from "antd";

import { useAuth } from "../contexts/AuthContext";

function SignUpForm({ handleSignUpClick }) {
  const [form] = Form.useForm();
  const { signUp } = useAuth();

  const { Option } = Select;

  const onFinish = async function (values) {
    try {
      const formattedDob = values.dob
        ? dayjs(values.dob).format("YYYY-MM-DD")
        : null;

      await signUp(
        values.email,
        values.password,
        values.nationality,
        formattedDob,
        values.phoneNumber,
        values.gender
      );

      handleSignUpClick();

      toast.success("Account has been successfully created", {
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
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error("Error signing up");
    }
  };

  const disabledDate = (current) => {
    // Can not select dob after today
    return current && current > dayjs().startOf("day");
  };

  return (
    <Form
      form={form}
      name="signup"
      onFinish={onFinish}
      scrollToFirstError
      layout="vertical"
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "The input is not a valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="confirmEmail"
        label="Confirm Email"
        dependencies={["email"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your E-mail!",
          },

          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("email") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("The two emails do not match!"));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please create a password!",
          },
          { min: 6, message: "Password must be minimum 6 characters." },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match!"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="dob"
        label="Date of Birth"
        layout="horizontal"
        rules={[
          {
            required: true,
            message: "Please select your date of birth!",
          },
        ]}
      >
        <DatePicker disabledDate={disabledDate} />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please enter your phone number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select your gender!",
          },
        ]}
      >
        <Select placeholder="Select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item name="nationality" label="Nationality">
        <Input />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-gray-700 hover:!bg-off-white hover:border-2 hover:border-gray-700 hover:!text-gray-700
          "
          >
            Sign Up
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default SignUpForm;
