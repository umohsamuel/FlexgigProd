import { useNavigate } from 'react-router-dom';
import { WhatIsThisBlue } from '..';
import imgref from '../../../components/imgref';

function HeroLanding() {
  const navigate = useNavigate()
  return (
    <section className=" tablet:flex px-[5%] items-center justify-between my-[10vh]">
      <div className=" tablet:w-1/2 flex flex-col gap-6 font-bold">
        <h1 className=" text-2xl text-center tablet:text-start tablet:text-6xl">
          Hire the Best <span className="">Talent</span> <br /> Online for your
          Job
        </h1>
        <p className=" font-normal text-sm tablet:text-xl text-center tablet:text-start text-black text-opacity-[0.67]">
          Your all-in-one platform for seamless talent acquisition,
          collaboration and freelance jobs
        </p>
        <div className="flex text-xs tablet:text-base font-medium tablet:max-w-[496px] gap-4 justify-between">
          <WhatIsThisBlue
            children="Hire Top Talent"
            HandleClick={() => navigate("/signin")}
          />
          <button
            onClick={() => navigate("/signin")}
            className=" max-w-[236px] w-full border border-[#05297D] py-[6px] tablet:py-[13px] text-[#05297D] hover:bg-[#05297D] hover:border-white hover:text-white transition-all duration-300 ease-in-out"
          >
            Apply as a Freelancer
          </button>
        </div>
      </div>
      <div className=" mt-6 tablet:mt-0 tablet:w-[45%] flex justify-end">
        <img src={imgref.herorhslanding} alt="" />
      </div>
    </section>
  );
}

export default HeroLanding