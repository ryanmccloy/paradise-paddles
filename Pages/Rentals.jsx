import Button from "../ui/Button";
import RentalPanels from "../ui/RentalPanels";
import { RentalProvider } from "../contexts/RentalContext";

function Rentals() {
  return (
    <RentalProvider>
      <section
        id="rentals"
        className=" h-screen min-h-[700px] max-h-[990px] min-w-screen max-w-[1800px] mx-auto flex flex-col gap-[5vh] items-center  py-[10vh]"
      >
        <h2 className="">Rentals</h2>

        <RentalPanels />

        <Button type="full">Check Availability</Button>
      </section>
    </RentalProvider>
  );
}

export default Rentals;
