import HomeLayout from "./homeComponents/HomeLayout";
import React from "react";
import HeroLanding from "./homeComponents/HeroLanding";
import GreatOppourtinity from "./homeComponents/GreatOppourtinity";
import TrendingCourses from "./homeComponents/TrendingCourses";
import WhereToStart from "./homeComponents/WhereToStart";
import HaveAProject from "./homeComponents/HaveAProject";
import TalentPool from "./homeComponents/TalentPool";

type WhatIsThisBlueProps = {
  children: React.ReactNode;
  HandleClick?: () => void;
};

export function WhatIsThisBlue({ children, HandleClick }: WhatIsThisBlueProps) {
  return (
    <button
      onClick={HandleClick}
      className=" tablet:max-w-[236px] w-full py-[6px] tablet:py-[13px] rounded-lg bg-[#042268] text-white hover:text-[#042268] hover:bg-white hover:border hover:border-[#042268] transition-all duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}

function Home() {
  return (
    <HomeLayout>
      <HeroLanding />
      <TalentPool />
      <GreatOppourtinity />
      <TrendingCourses />
      <HaveAProject />
      <WhereToStart />
    </HomeLayout>
  );
}

export default Home;
