function RentalPanelInfo({ info }) {
  return (
    <div>
      <h4 className="text-[16px] mb-[15px] text-center font-medium">
        Included
      </h4>
      <ul className="flex flex-col gap-[15px] text-center">
        {info.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default RentalPanelInfo;
