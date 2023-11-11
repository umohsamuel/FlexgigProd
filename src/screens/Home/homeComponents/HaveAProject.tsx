import { HaveProjectArr } from './HomeArr';
import { WhatIsThisBlue } from '..';
import imgref from '../../../components/imgref';
import { useNavigate } from 'react-router-dom';

function HaveAProject() {
  const navigate = useNavigate();
  return (
    <section className=" my-[10vh] px-[5%] tablet:flex justify-between items-center">
      <div className=" tablet:w-[45%]">
        <h1 className=" font-medium text-xl tablet:text-[32px] text-black text-opacity-[0.67]">
          Have a Project?
        </h1>
        <p className=" mt-4 mb-8 font-medium text-sm tablet:text-xl text-black text-opacity-[0.67]">
          Our feature-rich platform boasts an extensive talent pool of
          highly-skilled freelancers from around the globe.
        </p>
        <div className=" flex flex-col gap-8 mb-12">
          {HaveProjectArr.map((thing, index) => (
            <div key={index} className=" flex gap-4 items-center">
              <img src={thing.logo} alt="" />
              <span className=" text-sm tablet:text-lg font-normal">
                {thing.info}
              </span>
            </div>
          ))}
        </div>
        <WhatIsThisBlue
          children="Get Started"
          HandleClick={() => navigate("/signin")}
        />
      </div>
      <div className=" mt-8 tablet:mt-0 tablet:w-1/2">
        <img src={imgref.haveaimg} alt="" />
      </div>
    </section>
  );
}

export default HaveAProject