function Button({ children, type, handler }) {
  return type === "full" ? (
    <button
      className="px-[12px]  bg-gray-700 text-off-white h-[40px] rounded border-2 border-transparent transition-all hover:bg-off-white hover:border-gray-700 hover:text-gray-700"
      onClick={handler}
    >
      {children}
    </button>
  ) : (
    <button className="transition-all hover:font-semibold">{children}</button>
  );
}

export default Button;
