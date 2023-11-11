import imgref from "../imgref";

const AddressForm = () => {
  return (
    <>
      <form>
        <div className="flex flex-col px-8 py-6 mt-6 border border-black rounded-lg font-Poppins">
          <div className="flex">
            <img src={imgref.globaledit} alt="address" width={24} />
            <h1 className="text-2xl font-medium leading-normal pl-2">
              Address
            </h1>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-2">
            <div className="py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Country</label>
              <input
                type="text"
                placeholder="Enter last name"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
            <div className="py-3 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Phone number</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
            <div className="py-2 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Postal code</label>
              <input
                type="text"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
            <div className="py-2 font-Poppins text-sm font-normal leading-4 tracking-[-0.28px]">
              <label className="py-1 pr-3">Home address</label>
              <input
                type="tel"
                className="border border-slate-400 rounded-lg py-2 px-4"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddressForm;
