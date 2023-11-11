import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  width?: string;
  textColor?: string;
  borderColor?: string;
  rounded?: string;
  font?:string;
  fontSize?:string;
  to?: string | number;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  
  text,
  backgroundColor = "bg-[#042268]",
  width = "w-[45%] md:w-[200px] lg:w-[250px] ",
  textColor = "text-white",
  borderColor = "border-[#042268]",
  rounded ="rounded-lg",
  to = "-1",
  font = "font-normal",
  fontSize = "text-base"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };
  return (
    <button
      onClick={handleClick}
      className={` border px-4 py-2  ${textColor} ${backgroundColor} ${borderColor} ${width} ${to} ${rounded} ${font} ${fontSize} focus:outline-none`}
    >
      {text}
    </button>
  );
};

export default Button;
