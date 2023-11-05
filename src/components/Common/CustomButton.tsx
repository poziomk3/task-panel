interface ButtonProps {
  label: string;
  icon: JSX.Element;
  onClick(): void;
  type?: "button" | "submit" | "reset" | undefined;
  danger?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  type,
  danger,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex hover:scale-95 duration-300  justify-center items-center gap-[0.5rem] text-[1.5rem]   p-[0.5rem] rounded-l cursor-pointer ${
        danger ? "bg-red-700" : "bg-blue-600"
      }`}
    >
      <div>{label}</div>
      <div>{icon}</div>
    </button>
  );
};

export default CustomButton;
