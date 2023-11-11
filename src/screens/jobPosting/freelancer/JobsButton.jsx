import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const JobsButton = () => {
    const { pathname } = useLocation();
    const subMenu = [
      { title: "Best Matches", path: "/dashboard/freelancer/jobs/bestmatches" },
      { title: "Recent Jobs", path: "/dashboard/freelancer/jobs/recentjobs" },
      {
        title: "Saved Jobs",
        path: "/dashboard/freelancer/jobs/savedjobs",
      },
      
     ];
  
    return (
      // component for the sub-sidenav
      <div className='flex flex-col bg-white p-1 lg:p-8 mb-4'>
        <div className="flex flex-row justify-between items-start w-[90vw] md:w-[55vw] ">
          {subMenu.map((sub, index) => (
            <Link key={index} className={`${pathname === sub.path ? "  " : " "} text-[#9E9E9E]   hover:text-[#05297D] hover:border-b-2 hover:border-[#05297D] p-3`} to={sub.path}>{sub.title}</Link>
          ))
          }
          
        </div>
  
        <div><Outlet /></div>
        {/* <h1>PAYMENT/Funding</h1> */}
      </div>
  )
}

export default JobsButton
