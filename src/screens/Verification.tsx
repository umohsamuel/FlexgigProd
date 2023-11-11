import chevron from "../assets/Chevron.svg";
import verification from "../assets/verification.svg";

const Verification = () => {
  return (
    <section className="relative flex flex-col py-16 lg:pt-12 gap-20 items-center w-full">
      <div className="absolute left-8 top-5">
        <img className="w-7" src={chevron} alt="" />
      </div>
      <div className="flex gap-5">
        <hr className="py-[3px] px-10 rounded-[4px] bg-[#CACFDC]" />
        <hr className="py-[3px] px-10 rounded-[4px] bg-[#05297D]" />
        <hr className="py-[3px] px-10 rounded-[4px] bg-[#CACFDC]" />
      </div>
      <div className="flex flex-col justify-center gap-10 items-center">
        <img className="w-40" src={verification} alt="verified-logo" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#010819] text-[30px] font-medium">Get Verified</p>
          <p className="text-[#131313CC] w-72 text-center">
            Click on the link that is sent to ********@gmail.com to get verified
          </p>
        </div>
      </div>
    </section>
  );
};
export default Verification;
