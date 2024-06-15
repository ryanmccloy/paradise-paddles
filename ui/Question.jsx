function Question({ que, ans, isActive, onClick }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <h3 className="font-semibold">{que}</h3>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isActive ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="mt-[15px]">{ans}</p>
      </div>
    </div>
  );
}

export default Question;
