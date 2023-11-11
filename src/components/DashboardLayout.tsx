import Topnav from "./Topnav";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";


// Who cooked? very nice work !! 

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-[#f6f9ff] h-screen w-screen overflow-hidden flex flex-row max-w-[1440px]">
        <Sidenav />
        <div className="flex flex-col flex-1 gap-3">
          <Topnav />
          <div className="flex-1  min-h-0 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
