import React from 'react';
import Topnav from '../../components/Topnav.tsx';
import Sidenav from "./SidenavFreeL.tsx"
import { Outlet } from "react-router-dom";

const DashboardLayoutFreeL = () => {
    return (
        <div>
            <div className="bg-[#f6f9ff] h-screen w-screen overflow-hidden flex flex-row max-w-[1440px]">
                <Sidenav />
                <div className="flex flex-col flex-1 gap-3">
                    <Topnav />
                    <div className="flex-1  min-h-0 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayoutFreeL
