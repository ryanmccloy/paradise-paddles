import NavBar from "./NavBar";

function LeftLanding() {
  return (
    <div className=" flex flex-col justify-between pt-[20px] pb-[15px] left-landing-bg">
      <NavBar />

      <h1 className="text-[50px] md:text-[80px] xl:text-[120px] leading-none">
        Paradise <br></br>Paddles
      </h1>
    </div>
  );
}

export default LeftLanding;
