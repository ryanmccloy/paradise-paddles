import { useEffect, useState } from "react";

import { useAuth } from "../contexts/AuthContext";
import BookingPanel from "./BookingPanel";

function Bookings() {
  const { user, getBookings } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getUserBookings = async () => {
      if (user) {
        try {
          const userBookings = await getBookings(user.id);
          setBookings(userBookings);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
    };

    getUserBookings();
  }, [user, getBookings]);

  const removeBooking = (bookingId) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId)
    );
  };

  return (
    <>
      {bookings.length !== 0 ? (
        <div className="grid grid-cols-3 gap-10">
          {bookings.map((booking) => (
            <BookingPanel
              date={booking.date}
              length={booking.length}
              price={booking.price}
              time={booking.time}
              type={booking.type}
              key={booking.id}
              bookingId={booking.id}
              removeBooking={removeBooking}
            />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-gray-500 text-sm">
          No Bookings 😢
        </p>
      )}
    </>
  );
}

export default Bookings;
