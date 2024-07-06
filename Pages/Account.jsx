import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import Logo from "../ui/Logo";
import AccountSettings from "../ui/AccountSettings";
import UpcomingBookings from "../ui/UpcomingBookings";
import Button from "../ui/Button";

function Account() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="px-[30px] pt-[20px] max-w-[1600px] min-w-screen mx-auto">
      <div className="flex items-end justify-between">
        <div className="flex items-end gap-[30px]">
          <Link to="/" className="inline-block">
            <Logo />
          </Link>

          {user ? (
            <h2 className="">Hello, {user.email}</h2>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>

        <div>
          <Button
            type="full"
            handler={() => {
              signOut();
              navigate("/");
            }}
          >
            Sign out
          </Button>
        </div>
      </div>

      <div className="mt-[40px] flex flex-col gap-[40px]">
        <AccountSettings />
        <UpcomingBookings />
      </div>
    </section>
  );
}

export default Account;
