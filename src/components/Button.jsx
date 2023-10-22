/* eslint-disable react/prop-types */
const Button = ({
  handler = () => {},
  disabled = false,
  children,
  type = "primary",
  title = "button",
}) => {
  const colorTypes = {
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    danger: "bg-red-500 hover:bg-red-600",
  };
  return (
    <button
      title={title}
      onClick={handler}
      disabled={disabled}
      className={`text-center disabled:bg-slate-500 disabled:cursor-not-allowed  rounded-full active:scale-95 p-2 text-base uppercase ${colorTypes[type]}`}
    >
      {children}
    </button>
  );
};

export default Button;
