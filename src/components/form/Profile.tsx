const Profile = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold pt-7">MY PROFILE</h1>
      <form className="">
        <div className="flex flex-col px-8 py-6 mt-6 border border-black rounded-lg w-full">
          <input type="file" accept="image/*" className="py-5 max-w-xs" />

          <label className="py-1">Your role in the company </label>
          <input
            type="text"
            placeholder="Enter your role"
            required
            className="border border-slate-400 rounded-lg py-2 px-4"
          />
          <div className="pt-8 flex justify-end">
            <button className="bg-blue-400 w-1/4 py-2 px-10 rounded-lg">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
