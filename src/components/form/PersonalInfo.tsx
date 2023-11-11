import imgref from "../imgref";
import AddressForm from "./AddressForm";
import CompanyDetail from "./CompanyDetail";

const PersonalInfo = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col px-8 py-6 mt-6 border border-black rounded-lg font-Poppins w-full">
          <div className="flex">
            <img src={imgref.profile} alt="profile" width={24} />
            <h1 className="text-2xl font-medium leading-normal pl-2">
              Personal Information
            </h1>
          </div>
          <div className="flex flex-col w-full sm:grid sm:grid-cols-2 sm:gap-2">
            <div className="py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Last name</label>
              <input
                type="text"
                placeholder="Enter last name"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
            <div className="py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">First name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
            <div className="py-2 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Country</label>
              <input
                type="text"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
            <div className="py-2 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Phone number</label>
              <input
                type="tel"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
          </div>
          <div className="flex flex-col py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
            <label className="py-1">Work email address</label>
            <input
              type="text"
              placeholder="Enter work email"
              className="border border-slate-400 py-2 px-4 rounded-lg"
            />
            <label className="py-1 mt-3">Bio</label>
            <textarea
              rows={3}
              placeholder="Tell us a bit about you.."
              className="border border-slate-400 py-2 px-4 rounded-lg"
            />
          </div>
        </div>
      </form>
      <AddressForm />
      <CompanyDetail />
    </div>
  );
};

export default PersonalInfo;
