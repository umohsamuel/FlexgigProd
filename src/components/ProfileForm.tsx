// import Payment from "./Payment";
import ProfileMenu from "./ProfileMenu";
import { Outlet } from "react-router-dom";
// import Verification from "./Verification";


const ProfileForm = () => {
  const menuItems = [
    {
      title: "My Profile",
      url: "/profileform/personalinfo",
    },
    {
      title: "Verification",
      url: "/profileform/verification",
    },
    {
      title: "Payments",
      url: "/profileform/payment",
    },
    {
      title: "Security",
      url: "/security",
    },
    {
      title: "Notification",
      url: "/notification",
    },
  ];
  return (
    <div className="border-2 border-gray-400 rounded-lg bg-white flex mx-3 px-2 py-3 font-Poppins">
      <div className="hidden md:block w-1/5 border-r-2 border-r-gray-200 gap-8 h-[761px] py-3">
        <ProfileMenu items={menuItems} />
      </div>
      <div className="w-full px-12">
      <Outlet />
      </div>
    </div>
  );
};

export default ProfileForm;
