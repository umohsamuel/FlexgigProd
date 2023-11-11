import EditPersonalnfo from "./EditPersonalnfo";
import EditAddress from "./EditAddress";
import EditProficiency from "./EditProficiency";
// import EditEducation from "./EditEducation";
// import EditPortfolio from "./EditPortfolio";

const EditProfile = () => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <EditPersonalnfo />
      <EditAddress />
      <EditProficiency />
      
    </div>
  );
};

export default EditProfile;
