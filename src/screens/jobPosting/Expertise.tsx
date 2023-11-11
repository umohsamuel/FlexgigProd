import { useNavigate } from "react-router-dom";
import rounded from "../../assets/rounded.svg";
import search from "../../assets/search.svg";
import Buttons from "../../components/jobPosting/Buttons";
import { ExpertiseData, Category, Technology } from "./ExpertiseData";
import { FC, useState } from "react";

interface FormState {
  selectedSkill: { [key: string]: boolean };
  textInput: string;
  searchInput: string;
  filtered: Technology[];
}

const Expertise: FC = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    ExpertiseData[0]
  );

  const handleTabClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const [selectedSkill, setSelectedSkill] = useState<
    FormState["selectedSkill"]
  >({});

  const handleSkillChange = (tech: Technology) => {
    setSelectedSkill({
      ...selectedSkill,
      [tech.name]: !selectedSkill[tech.name],
    });
  };

  const [textInput, setTextInput] = useState<FormState["textInput"]>("");

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextInput(event.target.value);
  };

  const [searchInput, setSearchInput] = useState<FormState["searchInput"]>("");

  const [filtered, setFiltered] = useState<FormState["filtered"]>(
    selectedCategory.technologies
  );

  // Filter the technologies based on the search input
  const handleTextSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchText = event.target.value;
    setSearchInput(searchText);

    // Filter the technologies based on the search input
    const filteredTech = selectedCategory.technologies.filter((tech) =>
      tech.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltered(filteredTech);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const selectedSkillArray = Object.keys(selectedSkill).filter(
      (key) => selectedSkill[key]
    );
    console.log("Selected Skill:", selectedSkillArray);
    console.log("Textarea Input:", textInput);
    navigate("/dashboard/jobs/visibility");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-14 pl-5 pb-5 mr-4"
      >
        <main className="flex flex-col gap-5">
          <h1 className="font-[600] text-[#292B30] text-[25px]">EXPERTISE</h1>
          <div className="flex flex-col gap-7">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[18px]">
                Select skills you are look for in a prospective freelancer?
              </p>
            </div>
            <div className="relative">
              <input
                type="input"
                className="border border-[#E7E7E7] bg-[#F8FAFC] rounded-[48px] w-full py-1 pl-7 placeholder:text-[14px] placeholder:font-medium"
                name="search"
                placeholder="Search..."
                value={searchInput}
                onChange={handleTextSearchChange}
              />
              <img
                className="absolute right-5 bottom-1.5"
                src={search}
                alt="logo"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {ExpertiseData.map((category, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#042268] text-white rounded-[35px] py-1 px-2"
                      : "border border-[#CACFDC] rounded-[10px] text-black font-medium py-1 px-2"
                  }`}
                  onClick={() => handleTabClick(category)}
                >
                  {category.name}
                </div>
              ))}
            </div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-5">
                {filtered.map((tech, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center px-5 py-2 border border-[#CACFDC] rounded-[7px] text-[14px] font[500]"
                  >
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        name={`skill[${index}]`}
                        checked={selectedSkill[tech.name] || false}
                        onChange={() => handleSkillChange(tech)}
                      />
                      {tech.name}
                    </div>
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-6"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <img className="w-3" src={rounded} alt="rounded" />
              <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                Type below to add a skill or qualifications different from the
                above
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#292B30] text-[14px]">
                Skills or qualifications different from above
              </p>
              <textarea
                className="pl-5 pt-3 h-20 rounded-[8px] border-[#CACFDC] border shadow-sm bg-white placeholder:text-[14px] placeholder:font-medium"
                placeholder="Type here"
                value={textInput}
                onChange={handleTextInputChange}
              ></textarea>
            </div>
          </div>
        </main>
        <Buttons />
      </form>
    </>
  );
};
export default Expertise;
