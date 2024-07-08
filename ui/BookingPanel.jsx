import { Button } from "antd";

function BookingPanel() {
  return (
    <div
      className="booking-panel border-2 border-gray-700 rounded-md  h-[400px] text-off-white flex flex-col gap-[10%]"
      style={{ "--image-url": `url("../Img/SUP.jpg")` }}
    >
      <h2 className="mt-[30px] text-center z-20 relative">SUP</h2>

      <div className="flex gap-[20%] justify-center relative z-20  text-center ">
        <div>
          <h3>Pick Up</h3>
          <span>Date: </span>
          <p className="inline font-semibold">07/07/24</p>
          <br />
          <span>Time: </span>
          <p className="inline font-semibold">11AM</p>
        </div>
        <div>
          <h3>Return</h3>
          <span>Date: </span>
          <p className="inline font-semibold">07/07/24</p>
          <br />
          <span>Time: </span>
          <p className="inline font-semibold">1PM</p>
        </div>
      </div>

      <div className="relative z-20 text-center">
        <h3 className="font-semibold">€30</h3>
        <p>Pay on pick up</p>
      </div>

      <Button
        type="primary"
        className="bg-gray-700 w-fit relative mx-auto border-off-white z-20 hover:!bg-off-white hover:border-2 hover:border-gray-700 hover:!text-gray-700"
      >
        Cancel Booking
      </Button>
    </div>
  );
}

export default BookingPanel;
