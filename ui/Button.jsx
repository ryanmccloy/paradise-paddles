function Button({ children, type }) {
  return type === "full" ? (
    <button className="px-[12px]  bg-gray-700 text-off-white h-[40px] rounded">
      {children}
    </button>
  ) : (
    <button>{children}</button>
  );
}

export default Button;
