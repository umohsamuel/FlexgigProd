const EditUserPrimaryDetails = () => {
  return (
    <div className="flex items-center w-full border-solid border-2 flex-col gap-[1rem] p-6">
      <div className="w-[4rem] h-[4rem] rounded-full bg-[#111] " />
      <div className="w-full flex flex-col gap-[0.5rem]">
        <h5>Position</h5>
        <input
          type="text"
          name=""
          id=""
          className="w-full border-2 px-4 py-2"
          placeholder="Enter your name..."
        />
      </div>
      <div className="flex gap-[0.5rem] self-end">
        <button className="rounded-md border-2 flex-col px-4 py-2 border-[#042268]">
          Cancel
        </button>
        <button className="rounded-md px-6 py-2 bg-[#042268] text-[#fff]">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditUserPrimaryDetails;
