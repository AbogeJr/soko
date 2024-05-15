function Button({
  children,
  bg,
  text,
}: {
  children: React.ReactNode;
  bg: string;
  text: string;
}) {
  return (
    <button
      className={`px-20 my-4 w-full md:w-auto border border-gray-500  py-3 ${bg} ${text} hover:opacity-80 rounded-3xl`}
    >
      {children}
    </button>
  );
}

export default Button;
