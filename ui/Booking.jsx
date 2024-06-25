import BookingPanel from "./BookingPanel";

function Booking() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <BookingPanel />
      <BookingPanel />
      <BookingPanel />
      <BookingPanel />
    </div>
  );
}

export default Booking;
