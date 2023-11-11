import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import imgref from "../../components/imgref";

// i helped with typing, you can see its not that difficult and it helps to prevent unneccessary runtime errors 
type topMenusProps = {
  title: string;
  src: string;
  path: string;
};

type bottomMenus = topMenusProps & {
  gap?: string
};

const SidenavFreeL = () => {
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  const topMenus: topMenusProps[] = [
    // { title: "Dashboard", src: `${imgref.dashboard}`, path: "/dashboard" },
    // { title: "Jobs", src: `${imgref.graph}`, path: "/dashboard/jobs" },
    // {
    //   title: "My contracts",
    //   src: `${imgref.graph}`,
    //   path: "/dashboard/contracts",
    // },
    // {
    //   title: "Messages",
    //   src: `${imgref.message}`,
    //   path: "/dashboard/messages",
    // },
    // {
    //   title: "Escrow transactions",
    //   src: `${imgref.wallet}`,
    //   path: "/dashboard/transactions",
    // },
    // {
    //   title: "Bill payment",
    //   src: `${imgref.wallet}`,
    //   path: "/dashboard/payment",
    // },

    // untill the other routes are ready lets redirect them to the dashboard everytime 
    { title: "Jobs", src: `${imgref.dashboard}`, path: "/dashboard/freelancer/jobs" },
    // @ts-ignore
    { title: "Proposals", src: `${imgref.graph}`, path: 0 },
    {
      title: "My contracts",
      src: `${imgref.graph}`,
      // @ts-ignore
      path: 0,
    },
    {
      title: "Messages",
      src: `${imgref.message}`,
      // @ts-ignore
      path: 0,
    },
    {
      title: "Escrow transactions",
      src: `${imgref.wallet}`,
      // @ts-ignore
      path: 0,
    },
    {
      title: "Community",
      src: `${imgref.wallet}`,
      // @ts-ignore
      path: 0,
    },
    {
      title: "Courses",
      src: `${imgref.wallet}`,
      // @ts-ignore
      path: 0,
    },
  ];

  const bottomMenus: bottomMenus[] = [
    // {
    //   title: "Setting",
    //   src: `${imgref.setting}`,
    //   gap: "true",
    //   path: "/Settings",
    // },
    // { title: "Logout", src: `${imgref.logout}`, path: "/logout" },
    {
      title: "Setting",
      src: `${imgref.setting}`,
      gap: "true",
      // @ts-ignore
      path: 0,
    },
    { title: "Logout", src: `${imgref.logout}`, path: "/" },
  ];

  return (
    <>
      <div
        className={`${
          open ? " w-[180px] xl:w-[220px]" : "w-20"
        } duration-300 h-screen border bg-no-repeat bg-white overflow-y-hidden hidden  lg:flex flex-col  z-[20]`}
        style={{
          backgroundImage: `url(${imgref.ellipse20}), url(${imgref.ellipse19}) `,
          backgroundPosition: `top, bottom`,
        }}
      >
        {/* <img
          src={imgref.chevron}
          alt="Arrow"
          className={`absolute cursor-pointer right-[] top-[100px] h-6 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        /> */}

        <div className="pt-[90px] w-full  flex-1">
          {topMenus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              className={`${
                pathname === menu.path
                  ? "bg-[#E7EEFF] border-e-4 border-[#042268]"
                  : ""
              } flex items-center cursor-pointer gap-x-4 p-2 my-2 hover:bg-[#E7EEFF] hover:border-e-4 hover:border-[#042268]`}
            >
              <img src={menu.src} alt="" className="h-[20px] ms-4" />
              <span
                className={`${
                  !open && "hidden"
                } duration-200 text-sm font-semibold text-[#000000AB]`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
        <ul className="pt-[120px] w-full  mb-4">
          {bottomMenus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              className={`${
                pathname === menu.path
                  ? "bg-[#E7EEFF] border-e-4 border-[#042268]"
                  : ""
              } flex items-center cursor-pointer gap-x-4 p-2 my-2 hover:bg-[#E7EEFF] hover:border-e-4 hover:border-[#042268]`}
            >
              <img src={menu.src} alt="" className="h-[20px] ms-4 " />
              <span
                className={`${
                  !open && "hidden"
                }  text-sm font-semibold text-[#000000AB]`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidenavFreeL;
