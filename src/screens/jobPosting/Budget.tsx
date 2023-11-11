import { useState } from "react";
import imgref from "../../components/imgref";
import OptionCard from "./OptionCard";
import Button from "../../components/shared/Button";

const paymentOptions = [
  {
    id: "hourly",
    title: "Hourly payment",
    description: "This can be used for engaging project",
  },
  {
    id: "fixed",
    title: "Fixed price",
    description:
      "This can be used for a one time project within a given period of time.",
  },
  {
    id: "weekly",
    title: "Weekly payment",
    description:
      "This can be used for a project with deliverables for a couple of weeks.",
  },
];
const experienceOptions = [
  {
    id: "entry",
    title: "Entry levle",
    description: "Price estimate:  less than $20/hr",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Price estimate:  $20-$40/hr",
  },
  {
    id: "expert",
    title: "Expert",
    description: "Price estimate:  more than $40/hr",
  },
];
const Budget = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectionChange = (id: string) => {
    setSelectedOption(id);
  };
  return (
    <>
      <div className="my-5 md:my-0 mx-2 md:mx-4 ">
        <h2 className="font-semibold text-[25px] text-[#292B30] pb-4 ">BUDGET</h2>

        <div className="flex gap-3  mb-4">
          <img className="w-3" src={imgref.rounded} alt="rounded " />
          <span className="text-[#042268] font-medium text-[18px]  leading-6  ">
            What is your preferred payment term?
          </span>
        </div>
        <div className="flex  flex-wrap gap-4">
          {paymentOptions.map((option) => (
            <OptionCard
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              selected={selectedOption === option.id}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <div className="flex gap-3  mb-4  mt-8">
          <img className="w-3" src={imgref.rounded} alt="rounded " />
          <span className="text-[#042268] font-medium text-[18px]  leading-6 ">
            What is your preferred experience level of the freelancer?
          </span>
        </div>
        <div className="flex  flex-wrap gap-4">
          {experienceOptions.map((option) => (
            <OptionCard
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              selected={selectedOption === option.id}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <div className="flex justify-between w-full mt-16 pb-10  max-w-[760px]">
          <Button
            text="Previous"
            backgroundColor="bg-transparent"
            textColor="#042268"
            to={-1}
          />
          <Button text="Continue" to="/dashboard/jobs/review" />
        </div>
      </div>
    </>
  );
};

export default Budget;
