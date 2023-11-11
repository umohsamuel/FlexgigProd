import imgref from "../imgref";

const Balance = () => {
  return (
    <>
      <div className="w-screen max-w-[300px] border-2 border-[#CACFDC] rounded-lg p-4 flex flex-col bg-[#FAFBFFB2] h-[320px]">
        <div className="flex gap-1 mb-2 items-center">
          <img src={imgref.wallet} alt="" className="h-4" />
          <p className="font-medium text-[#292B30] text-lg">Account Balance</p>
        </div>
        <div
          className="w-full bg-[#05297d] h-[150px] rounded-lg p-6 flex flex-col justify-between my-4"
          style={{
            backgroundImage: `url(${imgref.balanceBg}) `,
          }}
        >
          <div className="flex gap-2 items-center">
            <img src={imgref.flag} alt="flag" className="h-[35px]" />
            <p className="text-[#D7E8FD]">Us Dollar</p>
          </div>
          <div className="">
            <p className="text-[#FF7A60] text-[12px]">Total balance</p>
            <div className="flex justify-between">
              <p className="text-[#D7E8FD]">$0.00</p>
              <img src={imgref.eye} alt="" />
            </div>
          </div>
        </div>
        <button className="text w-full  border rounded-lg py-2 bg-whiten my-4 text-[#05297D] text-sm">
          Fund Account
        </button>
      </div>
    </>
  );
};

export default Balance;
