const EditProficiency = () => {
  return (
    <div className="border-solid border-2 p-6 flex flex-col">
      <h2 className="text-[24px] text-[#292B30] font-[500] py-4">
        Proficiency
      </h2>
      <div className="flex flex-col gap-2 pb-4">
        <h4 className="text-[#292B30] font-[500]">Enter the skills you have</h4>
        <div className="border-2 w-full rounded-md h-1/3 min-h-[150px]"></div>
      </div>
      <div className="flex flex-col gap-2 pb-4">
        <h4 className="text-[#292B30] font-[500]">Employment Options</h4>
        <div className="border-2 w-full rounded-md p-2">
          <label htmlFor="remotework" className="flex justify-between w-1/3">
            Remote Work <input type="radio" name="work" id="remotework" />
          </label>

          <label htmlFor="Part-Time" className="flex justify-between w-1/3">
            Part Time <input type="radio" name="work" id="Part-Time" />
          </label>

          <label htmlFor="Office" className="flex justify-between w-1/3">
            Office <input type="radio" name="work" id="Office" />
          </label>

          <label htmlFor="Freelance" className="flex justify-between w-1/3">
            Freelance <input type="radio" name="work" id="Freelance" />
          </label>
        </div>
      </div>

      <div className="flex gap-[0.5rem] self-end">
        <button className="rounded-md border-2 flex-col px-4 py-2 border-[#042268] hover:bg-[#042268] hover:text-[#fff] ">
          Cancel
        </button>
        <button className="rounded-md px-6 py-2 bg-[#042268] hover:bg-[#fff] hover:text-[#042268] hover:border-2 hover:border-[#042268] text-[#fff]">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProficiency;
