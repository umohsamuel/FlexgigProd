import Categories from "./Categories";
import ProgressEmpty from "./shared/ProgressEmpty";
import ProgressFull from "./shared/ProgressFull";
import BackButton from "./backbutton";
import BlueButton from "./blueButton";
// import Welcome from "./Welcome";
import imgref from "./imgref";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  function HandleSubmit(): void {
    // e.preventDefault();
    //  api calls or whatever here
    navigate("/signup");
  }

  return (
    <div className="flex md:justify-between items-center py-[2.5%] max-h-screen">
      <div className="w-full md:w-full md:px-10 lg:px-20  max-w-[750px]  sm:pt-8 tablet:pt-0 lh-[95vh]">
        <div className="relative flex flex-col items-center ">
          <BackButton  HandleClick={()=>navigate(-1)}/>

          <img
            src={imgref.flexgiglogo2}
            className="md:hidden absolute pt-4  top-4 h-10"
          />
          <div className="flex gap-2 pt-12 ">
            <ProgressFull />
            <ProgressEmpty />
            <ProgressEmpty />
          </div>
          <div className="flex flex-col items-center py-4">
            <h2 className="font-[500] text-[#010819]  text-[24px] md:text-[30px] text-center">
              Create an account
            </h2>
            <p className="w-[80%] text-center  md:text-sm ">
              Choose an account to get started and explore the market place
            </p>
          </div>
          <div className="">
            <Categories />
          </div>
          <BlueButton HandleClick={HandleSubmit} children="Continue" />
          <div className="flex gap-2 pt-4">
            <p className="text-sm text-[#010819]">Already have an account? </p>
            <button type="submit" className="text-[#FF7A60] text-xs font-bold" onClick={()=>{navigate('/signin')}}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
