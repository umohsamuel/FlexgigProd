import FirstInformation from "./personalInformation/FirstInformation";
import SecondInformation from "./personalInformation/SecondInformation";
import LastInformation from "./personalInformation/LastInformation";

const ProfileInformation = () => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <FirstInformation />
      <SecondInformation />
      <LastInformation />
    </div>
  );
};

export default ProfileInformation;
