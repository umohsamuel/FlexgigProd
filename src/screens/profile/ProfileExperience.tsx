import Experience from "./work_experience/Experience";
import EmptyCredentials from "../../components/emptyCredentials/EmptyCredentials";

const exp = false;
const ProfileExperience = () => {
  return (
    <div className="border-2 border-solid ">
      {exp ? (
        <Experience />
      ) : (
        <EmptyCredentials text={"No experiences found"} />
      )}
    </div>
  );
};

export default ProfileExperience;
