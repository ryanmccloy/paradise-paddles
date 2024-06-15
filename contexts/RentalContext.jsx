import { createContext, useContext } from "react";

const RentalContext = createContext();

export function RentalProvider({ children }) {
  const rentalData = [
    {
      imageUrl: "../Img/SUP.jpg",
      title: "SUP",
      info: [
        `Stand-Up Paddleboard (SUP): High-quality, stable board suitable for various skill levels.`,
        `Paddle: Adjustable paddle for comfortable use by different heights.`,
        `Safety Gear: Life jacket and optional leash for safety.`,
      ],
      prices: [
        `1 Hour --- €12`,
        `2 Hours --- €20`,
        `Half Day (10am - 2pm) --- €35`,
        `Full Day (10am - 6pm) --- €60`,
      ],
    },
    {
      imageUrl: "../Img/kayak.jpg",
      title: "KAYAK",
      info: [
        `Kayak: Durable and versatile kayak suitable for both beginners and experienced paddlers.`,
        `Paddle: Lightweight and adjustable paddle for ease of use and optimal control.`,
        `Safety Gear: Life jacket and optional safety whistle for added security on the water.`,
      ],
      prices: [
        `1 Hour --- €12`,
        `2 Hours --- €20`,
        `Half Day (10am - 2pm) --- €35`,
        `Full Day (10am - 6pm) --- €60`,
      ],
    },
    {
      imageUrl: "../Img/surf.jpg",
      title: "SURF",
      info: [
        `Surfboard: High-performance surfboard designed for stability and agility on the waves.`,
        `Leash: Sturdy ankle leash to keep your surfboard close and ensure your safety.`,
        `Wetsuit: High-quality wetsuit available for rental to keep you warm in cooler waters.`,
      ],
      prices: [
        `1 Hour --- €12`,
        `2 Hours --- €20`,
        `Half Day (10am - 2pm) --- €35`,
        `Full Day (10am - 6pm) --- €60`,
      ],
    },
  ];

  return (
    <RentalContext.Provider value={rentalData}>
      {children}
    </RentalContext.Provider>
  );
}

export const useRental = () => useContext(RentalContext);
