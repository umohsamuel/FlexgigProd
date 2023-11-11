import Balance from "./Balance";
import Note from "./Note";
import imgref from "../imgref";

const PaymentCard = () => {
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
          <div className="py-6 bg-[#CACFDC] w-[100%] flex flex-col justify-center items-center border-2 border-[#CACFDC] rounded-lg  bg-[#FAFBFFB2]">
            <img src={imgref.add} alt="" className="    " />
            <p className="font-medium ">Add a payment method</p>
            <p className="text-[#9E9E9E] font-medium max-w-[50%] text-center">
              Set up you payment methods ahead to hire when you’re ready
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
