import ImgUpload from "./form/ImgUpload";

const Verification = () => {
  return (
    <div className="flex flex-col font-Poppins">
      <div className="pt-4">
              <h1 className="text-2xl font-semibold py-3">IDENTITY VERIFICATION</h1>
              <ImgUpload />
              </div>
      <div className="py-3">
        <h1 className="text-xl font-medium leading-normal py-2 px-2">
          1. Recent passport photograph
        </h1>
       <ImgUpload />
      </div>
      <div className="py-6">
        <h1 className="text-xl font-medium px-3">
          2. Government issued identification
        </h1>

        <div className="py-2">
          <input type="radio" name="National Identity" id="" className="" />
          <label className="px-2 text-sm font-normal leading- text-blue-500">
            National Identity
          </label>

          <input type="radio" name="Voter's Card" id="" />
          <label className="px-2 text-sm font-normal leading-6 text-blue-500">
            Voter's Card
          </label>
        </div>
       <ImgUpload />
      </div>
      <p className="text-xs font-normal">
        By clicking verify, you agree with our{" "}
        <span className="text-xs font-normal leading-6 underline text-SecondaryBase">
          terms and condition and Privacy policy.
        </span>
      </p>
    </div>
  );
};

export default Verification;
