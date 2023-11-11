import Balance from "./Balance";
import Note from "./Note";
import imgref from "../imgref";

const PaymentBank = () => {
  return (
    <>
      <div className="m-8 w-[80%] max-w-[700px] border py-4 px-6 flex flex-col items-center">
        <div className=" w-full flex justify-between">
          <Balance />
          <Note />
        </div>
        <div className="w-full mt-6">
          <div className="flex gap-1 mb-2 items-center ">
            <img src={imgref.wallet} alt="" className="h-4" />
            <p className="font-medium text-[#292B30] text-lg">Payment method</p>
          </div>
          <div className="  p-4  w-[100%] flex justify-between border-2 border-[#CACFDC] rounded-lg  bg-[#FAFBFFB2]">
            <div className="flex flex-col justify-between gap-2">
              <p>
                <span>Bank: </span>{" "}
                <span className="font-semibold text-[#12273D] ms-2">
                  GTBANK
                </span>
              </p>
              <p>
                <span>Account name: </span>{" "}
                <span className="font-semibold text-[#12273D]  ms-2">
                  Maleek Wasiu
                </span>
              </p>
              <p>
                <span>Account number: </span>{" "}
                <span className="font-semibold text-[#12273D] ms-2">
                  ******8536
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <button className="flex justify-center items-center bg-white px-3 py-1 rounded border">
                <span className="text-[12px] bg-white text-[#05297D]">
                  {" "}
                  Edit
                </span>{" "}
                <img src={imgref.edit} alt="" />
              </button>
              <button className="text-[#FF7A60] font-medium text-[12px]">
                Remove
              </button>
            </div>
          </div>
          <div className=" mt-4 py-6  w-[100%] flex flex-col justify-center items-center border-2 border-[#CACFDC] rounded-lg  bg-[#FAFBFFB2]">
            <img src={imgref.add} alt="" className="    " />
            <p className="font-medium ">Add a payment method</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBank;
