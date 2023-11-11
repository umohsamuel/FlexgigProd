import { useState } from "react";
import imgref from "../../components/imgref";
import OptionCard from "./OptionCard";
import Button from "../../components/shared/Button";

interface Country {
  name: string;
  bg: string;
  color: string;
}

const countries: Country[] = [
  { name: "Worldwide", bg: "#EDEFFF", color: "#03153F" },
  { name: "United States", bg: "#FBEDFF", color: "#4F0E62" },
  { name: "Japan", bg: "#EDFFEF", color: "#4F0E62" },
];

const visibilityOptions = [
  {
    id: "anyone",
    title: "Anyone",
    description:
      "FlexGig freelancers and public search engines can see this job post.",
  },
  {
    id: "freelancer",
    title: "Invited freelancer(s)",
    description:
      "Only FlexGig freelancer(s) you have invited can see this job post.",
  },
  {
    id: "user",
    title: "FlexGig users only",
    description: "Only FlexGig freelancers can find and see this job post.",
  },
];

const Visibility = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectionChange = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };
  return (
    <>
      <div className=" my-5 md:my-0 ms-2 md:ms-5 mx-2 md:mx-4">
        <h2 className="font-semibold text-[25px] text-[#292B30] pb-5">
          VISIBILITY
        </h2>
        <div className="flex gap-3  mb-4">
          <img className="w-3 " src={imgref.rounded} alt="rounded " />
          <span className="text-[#042268] font-medium text-[18px] w-full lg:max-w-[75%] leading-6 self-start ">
            Select the country from which freelancers will be able to submit
            proposals?
          </span>
        </div>
        <p className="text-sm pb-2 tracking-tighter">
          Select or type freelancer country
        </p>
        <div className=" max-w-[760px] w-full lg:w-[90%] min-h-[100px] border border-[#CACFDC] rounded-lg  shadow">
          <div className="flex gap-2 p-2">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className="text-[12px] flex gap-1 py-1 px-2 rounded"
                style={{ backgroundColor: country.bg, color: country.color }}
              >
                <span>{country.name}</span>
                <span>x</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3  items-center my-5">
          <img className="h-3" src={imgref.rounded} alt="rounded " />
          <p className="text-[#042268] font-medium text-[18px]   max-w-full md:max-w-[90%] ">
            Select who can see your job post
          </p>
        </div>
        <div className="flex-col md:flex-row flex  flex-wrap gap-4">
          {visibilityOptions.map((option) => (
            <OptionCard
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              selected={selectedOptions.includes(option.id)}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <div className="flex justify-between w-full mt-16 pb-10 max-w-[760px]">
          <Button
            text="Previous"
            backgroundColor="bg-transparent"
            textColor="#042268"
            to={-1}
          />
          <Button text="Continue" to="/dashboard/jobs/budget" />
        </div>
      </div>
    </>
  );
};

export default Visibility;
