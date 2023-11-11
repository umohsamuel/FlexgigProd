import { useNavigate } from "react-router-dom";
import rounded from "../../assets/rounded.svg";
import { useState } from "react"


interface FormState {
  selectedJobTitles: {[key: string]: boolean}
  selectedHiring: {[key: string]: boolean}
}

const JobTitleArr = [
  "UI/UX Design",
  "Database Design",
  "Graphics Design",
  "Machine learning & AI",
  "Web 3.0",
  "Project Management",
  "Web Development",
  "Data Analysis",
  "Data Engineering",
  "Email Marketing",
  "Business Analysis",
  "Book Formatting",
];

const HiringArr = [
  "New idea or project",
  "Ongoing assistance or consultation",
  "Imporvement or existed project",
  "Other",
];

const Title = () => {
  const navigate = useNavigate()
  const [selectedJobTitles, setSelectedJobTitles] = useState<
    FormState["selectedJobTitles"]
  >({});
  const [selectedHiring, setSelectedHiring] = useState<
    FormState["selectedHiring"]
  >({});

  const handleJobTitleChange = (item: string) => {
    setSelectedJobTitles({
      ...selectedJobTitles,
      [item]: !selectedJobTitles[item],
    });
  };

  const handleHiringChange = (item: string) => {
    setSelectedHiring({
      ...selectedHiring,
      [item]: !selectedHiring[item],
    })
  }

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const selectedJobTitlesArray = Object.keys(selectedJobTitles).filter(
        (key) => selectedJobTitles[key]
      );
      const selectedHiringArray = Object.keys(selectedHiring).filter(
        (key) => selectedHiring[key]
      );
      console.log("Selected Job Titles:", selectedJobTitlesArray);
      console.log("Selected Hiring Categories:", selectedHiringArray);
      navigate("/dashboard/jobs/description");
    };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <main className="flex flex-col gap-5 pl-5 pb-5">
          <h1 className="lg:block font-[600] text-[#292B30] text-[25px]">JOB TITLE</h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                What do you want to hire freelancer for?
              </p>
            </div>

            <div className="flex gap-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-y-5 gap-x-20">
                {JobTitleArr.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 pl-5 w-80 md:w-52 py-1 border border-[#CACFDC] rounded-[7px] text-[14px] font[500]"
                  >
                    <input
                      type="checkbox"
                      name={`jobTitle[${index}]`}
                      checked={selectedJobTitles[item] || false}
                      onChange={() => handleJobTitleChange(item)}
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                What type of project are you hiring for?
              </p>
            </div>

            <div className="flex gap-20 ">
              <div className=" grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-x-60 gap-y-5 w-80">
                {HiringArr.map((items, index) => (
                  <div
                    key={index}
                    className="flex items-center md:w-52 flex-nowrap gap-3 pl-5 py-1 border border-[#CACFDC] rounded-[7px] text-[14px] font[500]"
                  >
                    <input
                      type="checkbox"
                      name={`hiring[${index}]`}
                      checked={selectedHiring[items] || false}
                      onChange={() => handleHiringChange(items)}
                    />
                    <p>{items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#042268] rounded-[8px] py-2 text-white font-[500] mr-5 w-40">
              Continue
            </button>
          </div>
        </main>
      </form>
    </>
  );
};
export default Title;
