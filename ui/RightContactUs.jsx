import { useState } from "react";
import Question from "./Question";

const questions = [
  {
    que: "What types of water sports equipment do you rent?",
    ans: "We offer a wide range of water sports equipment for rent, including stand-up paddleboards (SUPs), kayaks, surfboards (depending on location), and wetsuits. Our equipment is suitable for all skill levels, from beginners to experienced enthusiasts.",
  },
  {
    que: "Do I need to make a reservation for rentals?",
    ans: "While walk-ins are welcome, we highly recommend making a reservation to ensure availability, especially during peak season. You can easily book online or call our office to secure your equipment in advance.",
  },
  {
    que: "What are your rental rates?",
    ans: "Our rental rates vary depending the duration of the rental. We offer competitive hourly, half-day, and full-day rates. Please see above for rates.",
  },
  {
    que: "Do you offer lessons or guided tours?",
    ans: "Yes, we offer both lessons and guided tours for paddleboarding, kayaking, and surfing. Our experienced instructors will help you get started and provide tips to improve your skills, ensuring a safe and enjoyable experience.",
  },
  {
    que: "What should I bring with me when renting equipment?",
    ans: "We recommend bringing a swimsuit, towel, sunscreen, water shoes, and a hat. We provide all necessary safety gear, including life jackets and leashes, with each rental. Don’t forget to bring a valid ID for the rental agreement.",
  },
  {
    que: "Are there age or weight restrictions for rentals?",
    ans: "For safety reasons, participants must be at least 8 years old and able to swim. We also have weight limits for certain equipment. Our staff will help you choose the right equipment for your needs.",
  },
  {
    que: "Can I rent equipment for multi-day use?",
    ans: "Absolutely! We offer flexible rental options, including multi-day and weekly rentals, so you can enjoy extended time on the water. Contact us to discuss your rental period and to get the best rates for longer durations.",
  },
  {
    que: "What is your cancellation policy?",
    ans: "We understand that plans can change. Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours may incur a fee.",
  },
  {
    que: "What safety measures do you have in place?",
    ans: "Your safety is our top priority. All rentals include safety gear, and our equipment is regularly inspected and maintained. We provide a safety briefing before you hit the water and our staff are always available to answer any questions you might have.",
  },
  {
    que: "What happens if the weather is bad on the day of my rental?",
    ans: "Your safety is our priority, and we closely monitor weather conditions. If the weather is unsafe for water activities, we offer rescheduling options or a full refund for the affected rental period. Please contact us on the day of your rental for the latest updates and to make any necessary arrangements.",
  },
];

function RightContactUs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleActiveQuestion = function (que) {
    setActiveQuestion((prev) => (prev === que ? null : que));
  };

  return (
    <div className="flex-1 p-[60px] flex flex-col gap-[40px]">
      {questions.map((q) => (
        <Question
          que={q.que}
          ans={q.ans}
          key={q.que}
          isActive={activeQuestion === q.que}
          onClick={() => handleActiveQuestion(q.que)}
        />
      ))}
    </div>
  );
}

export default RightContactUs;
