import Booking from "./Booking";

function UpcomingBookings() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h3 className="text-center">Upcoming Bookings</h3>
      <Booking />
    </div>
  );
}
export default UpcomingBookings;
