import Bookings from "./Bookings";

function UpcomingBookings() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h3 className="text-center">Upcoming Bookings</h3>
      <Bookings />
    </div>
  );
}
export default UpcomingBookings;
