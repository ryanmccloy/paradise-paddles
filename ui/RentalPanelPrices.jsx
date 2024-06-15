function RentalPanelPrices({ prices }) {
  return (
    <div>
      <h4 className="text-[16px] mb-[15px] text-center font-medium">Rates</h4>
      <ul className="flex flex-col gap-[5px] text-center">
        {prices.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
    </div>
  );
}

export default RentalPanelPrices;
