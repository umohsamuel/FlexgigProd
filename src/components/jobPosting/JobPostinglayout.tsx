import { ReactNode } from "react";
import chevron from "../../assets/Chevron.svg";
import defaultRadio from "../../assets/default-radio.svg";
import activeRadio from "../../assets/active-radio.svg";
// import visitedRadio from "../../assets/visited-radio.svg";
import { Link, useLocation } from "react-router-dom";

const Pages = [
  {
    path: "/dashboard/jobs/title",
    label: "Job title",
  },
  {
    path: "/dashboard/jobs/description",
    label: "Description",
  },
  {
    path: "/dashboard/jobs/details",
    label: "Details",
  },
  {
    path: "/dashboard/jobs/expertise",
    label: "Expertise",
  },
  {
    path: "/dashboard/jobs/visibility",
    label: "Visibility",
  },
  {
    path: "/dashboard/jobs/budget",
    label: "Budget",
  },
  {
    path: "/dashboard/jobs/review",
    label: "Review",
  },
];

const JobPostinglayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <>
      <main className="bg-[#EBF1FF] mt-5 flex flex-col pt-16 pb-5 md:py-20 gap-5">
        <header className="flex flex-col lg:flex-row gap-3 pl-2">
          <img className="w-5" src={chevron} alt="logo" />
          <p className="text-lg font-medium text-[#020E2A]">Post a job</p>
        </header>
        <div className="flex flex-col md:flex-row lg:flex-row bg-white shadow-sm rounded-2xl shadow-white mx-1 md:mx-10 py-5 pb-0 md:gap-10">
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:flex">
            <div className="flex flex-row flex-wrap gap-y-1 md:gap-y-10 md:flex-unwrap lg:flex-unwrap md:flex-col lg:flex-col gap-8 px-5 text-sm">
              {Pages.map((page, index) => (
                <Link
                  key={index}
                  className={`${
                    pathname === page.path
                      ? "bg-[#EBF1FF] text-[#05297D] py-2 px-4 rounded-lg"
                      : "text-[#9E9E9E] px-4"
                  }`}
                  to={`${page.path}`}
                >  
                  <div className="flex gap-3">
                    {page.label}
                    {pathname === page.path ? (
                      <img src={activeRadio} alt="radio" />
                    ) : (
                      <img src={defaultRadio} alt="radio" />
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <hr className="border border-[#CACFDC] h-full" />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </main>
    </>
  );
};
export default JobPostinglayout;
