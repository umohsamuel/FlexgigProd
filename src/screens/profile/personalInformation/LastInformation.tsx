const LastInformation = () => {
  const profiency = [
    "ui/ux",
    "Backend Development",
    "AI engineer",
    "ui/ux",
    "Web 3",
    "Mobile dev",
    "Q/A",
    "Building engineering",
    "Robotics",
  ];
  return (
    <div className="border-solid border-2 p-6 flex flex-col">
      <h2 className="text-[24px] text-[#292B30] font-[500] py-4">
        Proficiency
      </h2>
      <div className="flex flex-col gap-2 pb-4">
        <h4 className="text-[#292B30] font-[500]">Enter the skills you have</h4>
        <div className="border-2 w-full rounded-md h-1/3 min-h-[150px] flex gap-[0.5rem] flex-wrap p-4">
          {profiency.map((each) => (
            <p className="text-[14px] bg-[#042268] rounded-md h-fit w-fit text-[#fff] py-1 px-2">
              {each}
            </p>
          ))}
        </div>
        <div className="border-2 w-full rounded-md h-1/3 min-h-[150px] flex gap-[0.5rem] flex-col p-4">
          <h4 className="text-[#292B30] font-[500]">Employment Status</h4>
          <div className="flex gap-[0.25rem] flex-col">
            <p>Remote work</p>
            <p>Onsite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastInformation;
