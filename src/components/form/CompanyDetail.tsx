import imgref from "../imgref";

const CompanyDetail = () => {
  return (
    <>
      <form>
        <div className="flex flex-col px-8 py-6 mt-6 border border-black rounded-lg font-Poppins w-full">
          <div className="flex">
            <img src={imgref.globaledit} alt="address" width={24} />
            <h1 className="text-2xl font-medium leading-normal pl-3">
              Company details
            </h1>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-2">
            <div className="py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Owner's name</label>
              <input
                type="text"
                placeholder="Enter last name"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
            <div className="py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Company's name</label>
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
              <label className="py-1 pr-3">Contact</label>
              <input
                type="tel"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
          </div>
          <div className="flex flex-col py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
            <label className="py-1 pr-3">Company's address</label>
            <input
              type="address"
              placeholder="Enter address"
              className="border border-slate-400 rounded-lg py-2 px-4"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CompanyDetail;
