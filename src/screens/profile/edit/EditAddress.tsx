const EditAddress = () => {
  return (
    <div className="border-solid border-2 p-6">
      <h2 className="text-[24px] text-[#292B30] font-[500] py-4">Address</h2>
      <form className="flex flex-col gap-[2rem]">
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col w-5/12 ">
            <label className="flex items-center gap-[0.5rem]" htmlFor="country">
              Country <p className="text-[grey] text-[12px]">required</p>
            </label>
            <input
              className="w-full py-2 px-4 border-solid border-2"
              type="text"
              name=""
              id="country"
              placeholder="Country..."
            />
          </div>
          <div className="flex flex-col w-5/12 ">
            <label className="flex items-center gap-[0.5rem]" htmlFor="phone">
              Phone Number <p className="text-[grey] text-[12px]">required</p>
            </label>
            <input
              className="w-full py-2 px-4 border-solid border-2"
              type="number"
              name=""
              id="phone"
              placeholder="Phone Number..."
            />
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col w-5/12 ">
            <label
              className="flex items-center gap-[0.5rem]"
              htmlFor="postalcode"
            >
              Postal Code <p className="text-[grey] text-[12px]">required</p>
            </label>
            <input
              className="w-full py-2 px-4 border-solid border-2"
              type="text"
              name=""
              id="postalcode"
              placeholder="Postal Code..."
            />
          </div>
          <div className="flex flex-col w-5/12 ">
            <label
              className="flex items-center gap-[0.5rem]"
              htmlFor="homeaddress"
            >
              Home Address <p className="text-[grey] text-[12px]">required</p>
            </label>
            <input
              className="w-full py-2 px-4 border-solid border-2"
              type="text"
              name=""
              id="homeaddress"
              placeholder="Home Address..."
            />
          </div>
        </div>
        <div className="flex gap-[0.5rem] self-end">
          <button className="rounded-md border-2 flex-col px-4 py-2 border-[#042268]">
            Cancel
          </button>
          <button className="rounded-md px-6 py-2 bg-[#042268] text-[#fff]">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAddress;
