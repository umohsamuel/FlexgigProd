import imgref from "./imgref";

const ProfileFrame = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row gap-5 w-full">
      <div className="font-Poppins basis-1/2 rounded-lg border-2 border-[#cacfdc] bg-[#fafbff]/[.70]">
        <div className="flex flex-col justify-center items-start px-4">
          <div className="flex items-center gap-2 justify-center pt-5">
            <img src={imgref.walletMinus} alt="ellipse" />
            <h1 className="text-[#292b30] font-['Poppins'] text-2xl font-medium leading-[normal]">
              Account Balance
            </h1>
          </div>
          <div className="flex items-start py-5 w-full">
            <div className="rounded-lg bg-[#05297d] w-full sm:pb-8">
              <div className="flex flex-col items-start">
                <div className="flex justify-center items-center gap-2 px-5 py-5">
                  <div className="bg-white p-2 rounded-full">
                    <img src={imgref.flagRound} alt="flag" />
                  </div>
                  <div className="text-[#d7e8fd] font-['Nunito'] text-xl font-medium leading-[normal]">
                    US Dollar
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="text-[#ff7a60] font-['Nunito'] text-sm leading-[normal] pl-5 w-full">
                    Total balance
                  </div>
                  <div className="flex justify-between py-2 px-5 w-full">
                    <div className="">$0.00</div>
                    
                      <img
                        src={imgref.eye}
                        alt="eye"
                        className="cursor-pointer"
                      />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-2 sm:px-11 rounded-lg border border-[#05297d] bg-white text-[#05297d] text-sm font-['Poppins'] sm:leading-4 cursor-pointer mb-5 sm:mb-0">
            Fund account
          </button>
        </div>
      </div>
      <div className="border-2 border-[#cacfdc] basis-1/2 rounded-lg font-Poppins px-4 py-6 bg-[#fafbff]/[.70]">
        <h1 className="text-xl font-medium text-[#05297d]">Note</h1>
        <p className="font-normal text-base leading-4 pt-3 pb-5">
          This will be used to make payment for your work.
        </p>
        <p className="font-normal text-base leading-5 text-justify py-4">
          You'll make payment while posting your job. This is reversible if you
          are not satisfied with the freelancers's work.
        </p>
        <p className="font-normal text-base text-justify leading-5 py-6">
          Check out our{" "}
          <span className="text-SecondaryBase underline cursor-pointer hover:text-red-300">
            payment terms and conditions
          </span>{" "}
          to know better.
        </p>
        </div>
        </div>
      <div className="">
        <div className="flex py-3 ">
          <img src={imgref.walletMinus} alt="secure" />
          <h1 className="pl-2">Payment method</h1>
        </div>
        <div className="flex flex-col items-center justify-center py-3 px-5 border-2 border-[#cacfdc] rounded-lg bg-[#fafbff]/[.70]">
          <img src={imgref.addcircle} alt="add-circle" />
          <h3 className="text-base font-medium font-Poppins pt-2">Add a payment method</h3>
          <p className="text-base font-medium font-Poppins text-[#9e9e9e] text-center py-2">Set up your payment methods ahead to hire when you're ready.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileFrame;
