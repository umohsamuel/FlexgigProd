import imgref from "../imgref";

const Identity = () => {
  const info = [
    {
      id: 1,
      title: "Recent passport photograph",
      desc1: "Select a file",
      desc2: "or Drag and Drop",
      cloud: `${imgref.cloud}}`,
    },
    {
      id: 2,
      title: "Recent passport photograph",
      desc1: "Select a file",
      desc2: "or Drag and Drop",
      cloud: `${imgref.cloud}}`,
      Id1: "National Identification",
      Id2: "Voters Card",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center   w-[80%] max-w-[7000px] text-[#292B30] my-2 border ps-6 mt-[100px]">
        <h2 className=" font-semibold text-xl">IDENTITY VERIFICATION</h2>

        <div className="pe-8  max-w-[600px] w-[100%] ">
          <p className="text-sm font-medium py-4">
            Kindly choose and attach these documents . We will use them to
            verify your identity. Your information is safe with us and is not
            meant to be shared with others.
          </p>
          <div className="text-[#2F4D93] text-[12px] font-normal">
            <p>Supported Formats: PNG,DOC,PDF.</p>
            <p>Maximum Size; 5MB</p>
          </div>
          <div>
            {info.map((info) => (
              <div key={info.id}>
                <h3 className="p-4 pb-3 font-medium text-lg">
                  <span>{info.id}. </span> {info.title}
                </h3>
                {info.Id1 && info.Id2 && (
                  <div className="flex gap-8  pb-4">
                    <label>
                      <input
                        type="radio"
                        name={`radio-${info.id}`}
                        value={info.Id1}
                      />
                      {info.Id1}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`radio-${info.id}`}
                        value={info.Id2}
                      />
                      {info.Id2}
                    </label>
                  </div>
                )}
                <div className="bg-[#FAFBFF] h-[150px] flex flex-col justify-center items-center border rounded-lg mb-4">
                  <div className="flex flex-col justify-center items-center ">
                    <img src={imgref.cloud} alt="" />
                    <div className="flex  gap-2">
                      <label className="profile-pic-change">
                        <input
                          type="file"
                          style={{ display: "none" }}
                          // ref={inputRef}
                          // onChange={handleFileUploads}
                        />

                        <p className="text-[#FF7A60]">{info.desc1}</p>
                      </label>
                      <p className="">{info.desc2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-medium pt-4">
            <span>By clicking verify, you agree with our</span>
            <span className="text-[#FF7A60]">
              terms and condition and Privacy policy.
            </span>
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <button className="bg-[#042268] text-white    lg:mt-6 py-2 px-8 rounded-lg font-medium text-sm  w-[60%]">
              Verify my identity
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Identity;
