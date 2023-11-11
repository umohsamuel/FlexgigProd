import timer from "../../assets/timer.svg";
import Buttons from "../../components/jobPosting/Buttons";
import upload from "../../assets/upload.svg";
import document from "../../assets/document.svg";
import close from "../../assets/close.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate()
  const [textInput, setTextInput] = useState<string>("");
  const [projectFile, setProjectFile] = useState<FileList | null>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value);
  };

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setProjectFile(files);

    // Extract file names and store them in an array
    if (files) {
      // Extract file names and store them in an array
      const names = Array.from(files).map((file) => file.name);
      setFileNames(names);
    } else {
      // Reset file names if no files are selected
      setFileNames([]);
    }
  };

  const handleDeleteFiles = () => {
    setProjectFile(null);
    setFileNames([]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (projectFile) {
      const filesArray = Array.from(projectFile);
      console.log("Selected Files:", filesArray);
    }
    console.log(textInput);
    console.log(projectFile);
    navigate("/dashboard/jobs/details");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 pl-5 pb-5 w-80 md:w-4/5 lg:mr-40"
      >
        <h1 className="font-[600] text-[#292B30] text-[25px]">
          Job Description
        </h1>
        <div className="flex flex-col gap-10 bg-[#ff7a600f] border-[#ff7a604d] border-2 rounded-[8px] py-5 px-10">
          <div className="flex gap-1">
            <img src={timer} alt="logo" />
            <p className="text-[#FF8770] text-md">Description guide</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#292B30] font-medium text-[18px]">
              Sample of what to include
            </p>
            <ul className="flex flex-col gap-1 text-[#9E9E9E] text-[16px] font-medium">
              <li className="">Type of freelancer you are looking for</li>
              <li className="">What the job is all about and it's uniqueness.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#292B30] font-medium text-[18px]">Template</p>
            <p className="text-[#9E9E9E] text-[16px] font-medium">
              Need a skilled UI/UX designer with expertise in Figma, prototyping
              and user research for the revamp of a mobile app. The ideal
              candidate will have experience working with clients to understand
              their needs and translate those needs into effective polish
              designs. He will also be able to work with developers to ensure
              that their designs are implemented correctly. If you have a
              passion for creating beautiful and user-friendly designs, I would
              like to hear from you!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#292B30] text-[14px]">
            Job description <sup className="text-[#D95117]">*</sup>
          </p>
          <textarea
            className="pl-5 pt-3 h-20 lg:w-full rounded-[8px] border-[#CACFDC] border shadow-sm bg-white placeholder:text-[14px] placeholder:font-medium"
            placeholder="Enter the title of your job post"
            value={textInput}
            onChange={handleTextInput}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#292B30] text-[14px]">
            Additional project file <sup className="text-[#D95117]">*</sup>
          </p>
          {projectFile ? (
            <div className="flex lg:gap-20 border-2 border-[#8294BE] rounded-[8px] bg-[#FAFBFF] py-4 px-5">
              <div>
                {fileNames.map((fileName, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img className="w-10" src={document} alt="document" />
                    <p className="text-[#000000ab] text-[20px] font-medium">
                      {fileName}
                    </p>
                  </div>
                ))}
              </div>
              <img onClick={handleDeleteFiles} className="cursor-pointer" src={close} alt="logo" />
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-center gap-3 border border-[#8294BE] rounded-[8px] bg-[#FAFBFF] py-14">
              <div className="flex flex-col items-center">
                <img className="w-10" src={upload} alt="uploadlogo" />
                <p className="text-[#B2B4B4] text-[18px]">
                  Select a file or Drag and Drop
                </p>
              </div>
              <input
                type="file"
                name="projectFile"
                id="projectFile"
                onChange={handleFile}
                multiple
                className=""
              />
            </div>
          )}
        </div>
        <Buttons />
      </form>
    </>
  );
};
export default Description;
