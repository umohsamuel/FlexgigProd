import React from "react";

interface OptionCardProps {
  id: string;
  title: string;
  description: string;
  selected: boolean;
  onSelectionChange: (id: string) => void;
}
const OptionCard: React.FC<OptionCardProps> = ({
  id,
  title,
  description,
  selected,
  onSelectionChange,
}) => {
  return (
    <>
   
    <div
      className={`flex flex-col justify-center item-center border py-2 px-4 rounded-lg shadow-md mb-4 w-full md:w-[45%] md:max-w-[380px] min-h-[100px]  ${
        selected ? "bg-[#f6f9ff] border-2 border-[#042268]" : "" // Apply orange background when checked
      }`}
    >
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={selected}
            onChange={() => onSelectionChange(id)}
          />
          <span className=" font-medium">{title}</span>
        </label>
      </div>
      <p className="text-sm mt-1 ms-4">{description}</p>
    </div>
  
    </>
  );
};

export default OptionCard;
