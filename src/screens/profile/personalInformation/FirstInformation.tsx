const FirstInformation = () => {
  const names = [
    {
      label: "First Name",
      text: "Ahmed",
    },
    {
      label: "Last Name",
      text: "Musa",
    },
  ];

  const emailPhone = [
    {
      label: "Email Address",
      text: "MusaAhmed@gmail.com",
    },
    {
      label: "Phone Number",
      text: "0802929292929",
    },
  ];
  const bio = {
    label: "Bio",
    text: "UI/UX Designer",
  };
  return (
    <div className="border-solid border-2 p-6">
      <h2 className="text-[24px] py-4 text-[#292B30] font-[500]">
        Personal Information
      </h2>
      <div className="flex flex-col w-full gap-[1.5rem]">
        <div className="flex items-center justify-between min-w-[60%]">
          {names.map((each, index) => (
            <div className="flex flex-col w-full gap-[0.5rem]" key={index}>
              <p className="text-left w-4/6 text-[14px] text-[#9E9E9E]">
                {each.label}
              </p>
              <p className="text-left text-[#12273D] font-[600] text-[16px]">
                {each.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between min-w-[60%]">
          {emailPhone.map((each, index) => (
            <div className="flex flex-col w-full gap-[0.5rem]" key={index}>
              <p className="text-left w-4/6 text-[14px] text-[#9E9E9E]">
                {each.label}
              </p>
              <p className="text-left text-[#12273D] font-[600] text-[16px]">
                {each.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between min-w-[60%]">
          <div className="flex flex-col w-full gap-[0.5rem]">
            <p className="text-left w-4/6 text-[14px] text-[#9E9E9E]">
              {bio.label}
            </p>
            <p className="text-left text-[#12273D] font-[600] text-[16px]">
              {bio.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstInformation;
