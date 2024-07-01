import { Link, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import AccountSettings from "../ui/AccountSettings";
import UpcomingBookings from "../ui/UpcomingBookings";
import { useAuth } from "../contexts/AuthContext";

function Account() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="px-[30px] pt-[20px] max-w-[1600px] min-w-screen mx-auto">
      <div className="flex gap-[30px] items-end">
        <Link to="/" className="inline-block">
          <Logo />
        </Link>

        <h2 className="">Hello NAME</h2>

        <button
          className="transition-all hover:font-semibold hover:text-off-white"
          onClick={() => {
            signOut();
            navigate("/");
          }}
        >
          Sign Out
        </button>
      </div>

      <div className="mt-[40px] flex flex-col gap-[40px]">
        <AccountSettings />
        <UpcomingBookings />
      </div>
    </section>
  );
}

export default Account;
