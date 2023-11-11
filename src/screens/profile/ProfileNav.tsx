import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "My Profile",
    link: [
      "/profile",
      "/profile/work_experience",
      "/profile/education",
      "/profile/portfolio",
    ],
  },
  {
    name: "Edit",
    link: ["/profile/edit_profile"],
  },
  {
    name: "Verification",
    link: ["/profile/verification"],
  },
  {
    name: "Payments",
    link: ["profile/payments"],
  },
  {
    name: "Security",
    link: ["profile/security"],
  },
  {
    name: "Notification",
    link: ["profile/notifications"],
  },
];
const ProfileNav = () => {
  const path = useLocation();
  const pathName = path.pathname;
  return (
    <div className="p-6 border-r-2 h-full flex flex-col gap-[1rem] w-full text-[14px] text-[#05297D]">
      {links.map((each, index) => (
        <Link
          to={each.link[0]}
          key={index}
          className={`${
            each.link.includes(pathName) &&
            "bg-gradient-to-r from-sky-600 text-[#fff] rounded-md"
          }  p-2 `}
        >
          {each.name}
        </Link>
      ))}
    </div>
  );
};

export default ProfileNav;
