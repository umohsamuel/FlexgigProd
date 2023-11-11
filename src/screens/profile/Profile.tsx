import { Link, useLocation } from "react-router-dom";
import UserPrimaryDetails from "./personalInformation/UserPrimaryDetails";
import EditUserPrimaryDetails from "./edit/EditUserPrimaryDetails";

const links = [
  {
    name: "Personal Information",
    link: ["/profile", "/profile/edit_profile"],
  },
  {
    name: "Work Experience",
    link: ["/profile/work_experience"],
  },
  {
    name: "Education History",
    link: ["/profile/education"],
  },
  {
    name: "Portfolio",
    link: ["/profile/portfolio"],
  },
];
const Profile = () => {
  const path = useLocation();
  const pathName = path.pathname;
  return (
    <div className="flex flex-col gap-[2rem]">
      {pathName === "/profile/edit_profile" ? (
        <EditUserPrimaryDetails />
      ) : (
        <UserPrimaryDetails />
      )}

      <div className="flex justify-evenly p-6 border-b-2 border-[#042268]">
        {links.map((each, index) => (
          <Link
            key={index}
            to={each.link[0]}
            className={`${
              each.link.includes(pathName) &&
              "border-solid border-b-2 border-[#042268]"
            }`}
          >
            {each.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profile;
