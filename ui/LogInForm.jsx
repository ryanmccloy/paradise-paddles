import toast from "react-hot-toast";
import { Button, Form, Input } from "antd";

import { useAuth } from "../contexts/AuthContext";

function LogInForm({ handleLogInClick }) {
  const [form] = Form.useForm();
  const { signIn } = useAuth();

  const onFinish = async function (values) {
    try {
      await signIn(values.email, values.password);

      handleLogInClick();

      toast.success("Successfully logged in", {
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
      toast.error("Error logging in. Please check credentials");
      console.error("Error during log in:", error);
    }
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
        name="password"
        label="Password"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
          { min: 6, message: "Password must be minimum 6 characters." },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-gray-700 hover:!bg-off-white hover:border-2 hover:border-gray-700 hover:!text-gray-700
          "
          >
            Log In
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default LogInForm;
