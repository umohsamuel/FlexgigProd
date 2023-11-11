const Buttons = () => {
  return (
    <>
      <section className="flex justify-evenly md:justify-between lg:justify-between">
        <button className="rounded-[8px] border-[#042268] border-2 py-3 px-10 lg:px-20 font-medium text-[#042268]">
          Previous
        </button>
        <button className="rounded-[8px] bg-[#042268] py-3 px-10 lg:px-20 font-medium text-white">
          Continue
        </button>
      </section>
    </>
  );
};
export default Buttons;
