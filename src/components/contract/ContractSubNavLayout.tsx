import { Link, Outlet, useLocation } from "react-router-dom";
import ContractorInfo from "./ContractorInfo";
import imgref from "../imgref";

const Pages = [
    {
      to: "/dashboard/contracts/info",
      label: "Contract Overview",
    },
    {
      to: "/dashboard/contracts/info/timesheet",
      label: "Timesheet",
    },
    {
      to: "/dashboard/contracts/info/messages",
      label: "Messages",
    },
    {
      to: "/dashboard/contracts/info/feedback",
      label: "Rate & Feedback",
    },
    {
      to: "/dashboard/contracts/info/details",
      label: "Contract Details",
    },
    
  ];
  

const ContractSubNavLayout = () => {
  const location = useLocation()
  return (
    <>
    <div className="mt-28">
    <header className="flex flex-col lg:flex-row gap-3 pl-2 mt-10 mb-4">
          <img className="w-5" src={imgref.chevron} alt="arrow" />
          <p className="text-lg font-medium text-[#020E2A]">Active Contracts</p>
        </header>
        <div className=" bg-white mx-0 md:mx-8 rounded-lg shadow">
          <ContractorInfo/>
        <div className="hidden md:flex w-full justify-between flex-wrap gap-y-1 md:gap-y-10 md:flex-unwrap   px-5 text-sm border-b border-t border-[#B2ADAD] py-4 ">
              {Pages.map((page, index) => (
                <Link to={`${page.to}`} key={index}  className={`${
                  location.pathname === page.to ? "bg-[#EBF1FF] text-[#05297D] font-semibold" : ""
                } px-4 py-2 rounded`}
              >{page.label}</Link>
              ))}
        </div>
        <div>
        <Outlet/>
        </div>
        </div>
        </div>
    </>
  )
}

export default ContractSubNavLayout