import imgref from "./imgref";

const Topnav = ({ text }: { text?: string }) => {
  return (
    <>
      <div className="fixed bg-white top-0 left-0 w-screen max-w-[1440px] shadow border h-[70px] xl:h-[80px] border-b-2 flex  sm:justify-between gap-20 px-8 items-center z-[9999999]">
        <img
          src={imgref.hamburgerMenu}
          alt="Mobile Menu"
          className="block lg:hidden"
        />
        <img
          src={imgref.flexgiglogo2}
          alt="Flexgig Logo"
          className=" h-6 xl:h-8"
        />
        <div className="flex-1 justify-between items-center hidden md:flex">
          <h2 className=" text-xl xl:text-2xl text-[] font-semibold hidden  lg:block ">
            {text}
          </h2>

          <div className="h-[34px] xl:h-[38px]   rounded-[48px]  w-[45%] max-w-[535px] border bg-[#f8fafc] hidden  md:flex justify-between items-center px-4">
            {/* Help me collect the data for this input and array.filter(item => item.title.toLowerCase().includes(WhateveryQueryorState.toLowerCase())); , you get?*/}
            {/* and work on the responsiveness please  */}
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-grey bg-transparent  outline-0 placeholder:text-sm placeholder:font-medium"
            />
            <div>
              <img src={imgref.search} alt="Search" />
            </div>
          </div>
          <div className=" hidden md:flex  items-center">
            <div className="w-[44px] h-[44px] rounded-full border me-6 hidden lg:flex justify-center items-center">
              <img src={imgref.notification} alt="Notification Icon" />
            </div>
            <img
              src={imgref.profile}
              alt="Profile"
              className=" h-[35px] lg:h-[44px]"
            />
            <p className="text-sm text-primary font-medium px-2 lg:px-4">
              Maleek wasiu
            </p>
            <img src={imgref.arrowDown} alt="" />
          </div>
        </div>
        <img src={imgref.search} alt="Search" className="block md:hidden" />
      </div>
    </>
  );
};

export default Topnav;
