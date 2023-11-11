import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import imgref from '../imgref';

function PaymentForm() {
  const [openSub, setOpenSub] = useState(true);
  const { pathname } = useLocation();
  const subMenu = [
    { title: "My profile", path: "/settings/profile" },
    { title: "Jobs", path: "/settings/jobs" },
    {
      title: "Verification",
      path: "/settings/verification",
    },
    {
      title: "Payment",
      path: "/settings/payment",
    },
    {
      title: "Security",
      path: "/settings/security",
    },
    {
      title: "Notification",
      path: "/settings/notification",
    },
   ];

  return (
    // component for the sub-sidenav
    <div className='flex flex-row bg-white p-8'>
      <div className="hidden md:gap-3 md:flex md:flex-col md:w-[129px]">
        {subMenu.map((sub, index) => (
          <Link key={index} className={`${pathname === sub.path ? "  " : " "} text-[#9E9E9E]  rounded hover:text-[#05297D] hover:bg-[#a9c3ff] pl-1`} to={sub.path}>{sub.title}</Link>
        ))
        }
        <h1 className='text-[#FF7A60] mt-5'>Delete account</h1>
      </div>

      <div><Outlet /></div>
      {/* <h1>PAYMENT/Funding</h1> */}
    </div>
  )
}

export default PaymentForm
