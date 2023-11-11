import imgref from "../imgref";

const Verified = () => {
  return (
    <>
      <div className="h-screen w-80vw max-w-[650px] flex flex-col justify-center items-center text-[#292B30] ">
        <img
          src={imgref.success}
          alt="Success alert"
          className="max-h-[200px] "
        />
        <div className="max-w-[300px] text-center px-4 mt-8">
          <h3 className="font-medium">You are verified</h3>
          <p className="text-[#9E9E9E]">
            You identity has been verified and your information is safe with us
          </p>
        </div>
      </div>
    </>
  );
};

export default Verified;
