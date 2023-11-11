import { FC, useState } from "react";
import rounded from "../../assets/rounded.svg";
import Buttons from "../../components/jobPosting/Buttons";
import { useNavigate } from "react-router-dom";

interface FormState {
  selectedFreelancer: { [key: string]: boolean };
  selectedTimeline: { [key: string]: boolean };
  selectedTiming: { [key: string]: boolean };
  selectedDuration: { [key: string]: boolean };
}

const Freelancer = [
  "One freelancer",
  "Two freelancers",
  "Three freelancers",
  "More than three freelancers",
];

const Timeline = [
  "Short term (Less than a month)",
  "Short term (Up to 2 months)",
  "Short term (Up to 3 months)",
  "Medium Term (3 to 6 months)",
  "Long Term (More than 6 months)",
  "Other",
];

const Timing = [
  "Immediately",
  "Within 2 weeks",
  "Within a month",
  "I have not decided",
];

const Duration = [
  "Less than 20hrs/week",
  "20hrs per week",
  "More than 20hrs",
  "I have not decided",
];

const Details: FC = () => {
  const navigate = useNavigate()
  const [selectedFreelancer, setSelectedFreelancer] = useState<
    FormState["selectedFreelancer"]
  >({});
  const [selectedTimeline, setSelectedTimeline] = useState<
    FormState["selectedTimeline"]
  >({});
  const [selectedTiming, setSelectedTiming] = useState<
    FormState["selectedTiming"]
  >({});
  const [selectedDuration, setSelecteDuration] = useState<
    FormState["selectedDuration"]
  >({});

  const handleFreelancerChange = (item: string) => {
    setSelectedFreelancer({
      ...selectedFreelancer,
      [item]: !selectedFreelancer[item],
    });
  };

  const handleTimelineChange = (item: string) => {
    setSelectedTimeline({
      ...selectedTimeline,
      [item]: !selectedTimeline[item],
    });
  };

  const handleTimingChange = (item: string) => {
    setSelectedTiming({
      ...selectedTiming,
      [item]: !selectedTiming[item],
    });
  };

  const handleDurationChange = (item: string) => {
    setSelecteDuration({
      ...selectedDuration,
      [item]: !selectedDuration[item],
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const selectedFreelancerArray = Object.keys(selectedFreelancer).filter(
      (key) => selectedFreelancer[key]
    );
    const selectedTimelineArray = Object.keys(selectedTimeline).filter(
      (key) => selectedTimeline[key]
    );
    const selectedTimingArray = Object.keys(selectedTiming).filter(
      (key) => selectedTiming[key]
    );
    const selectedDurationArray = Object.keys(selectedDuration).filter(
      (key) => selectedDuration[key]
    );
    console.log("Selected Freelancer:", selectedFreelancerArray);
    console.log("Selected Timeline:", selectedTimelineArray);
    console.log("Selected Timing:", selectedTimingArray);
    console.log("Selected Duration:", selectedDurationArray);
    navigate("/dashboard/jobs/expertise");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-14  pl-5 pb-5">
        <main className="flex flex-col gap-5">
          <h1 className="font-[600] text-[#292B30] text-[25px]">DETAILS</h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                How many freelancers do you need for the job?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-y-5 md:gap-x-5 gap-x-20">
              {Freelancer.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 pl-5 w-80 md:w-56 py-1 border border-[#CACFDC] rounded-[7px] text-[14px] font[500]"
                >
                  <input
                    type="checkbox"
                    name={`freelancer[${index}]`}
                    checked={selectedFreelancer[item] || false}
                    onChange={() => handleFreelancerChange(item)}
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                Which best describes your requirement/engagement timeline?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-y-5 md:gap-x-1 gap-x-20">
              {Timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 pl-5 w-80 md:w-60 py-1 border border-[#CACFDC] rounded-[7px] text-[14px] font[500]"
                >
                  <input
                    type="checkbox"
                    name={`Timeline[${index}]`}
                    checked={selectedTimeline[item] || false}
                    onChange={() => handleTimelineChange(item)}
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                When are you likely to start this project ?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-y-5 md:gap-x-5 gap-x-20">
              {Timing.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 pl-5 w-80 md:w-52 py-1 border border-[#CACFDC] rounded-[7px] text-[14px] font[500]"
                >
                  <input
                    type="checkbox"
                    name={`timing[${index}]`}
                    checked={selectedTiming[item] || false}
                    onChange={() => handleTimingChange(item)}
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                Which best describes the time requirement for this project?
              </p>
            </div>
            <div className="grid grid-cos-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-y-5 md:gap-x-5 gap-x-20">
              {Duration.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 pl-5 w-80 md:w-56 py-1 border border-[#CACFDC] rounded-[7px] text-[14px] font[500]"
                >
                  <input
                    type="checkbox"
                    name={`duration[${index}]`}
                    checked={selectedDuration[item] || false}
                    onChange={() => handleDurationChange(item)}
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Buttons />
      </form>
    </>
  );
};
export default Details;
