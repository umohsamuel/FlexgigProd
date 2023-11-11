import imgref from "../imgref";

const SavedCard = (props) => {
  function successful(event){
    event.preventDefault()
    props.setStatus(true)
  }
  return (
    <div>
      <div className="flex mb-5">
        <img src={imgref.wallet} alt="wallet" className="pr-1" />
        <p className="text-2xl font-normal text-[#292B30]">Payment Method</p>
      </div>
      <div className="flex flex-row justify-between w-full p-6 border-2 border-[#CACFDC] rounded-lg ">
        <div className="space-y-4">
          <div className="flex flex-row gap-1 items-center">
            <p className="">Bank: </p>
            <p className="text-[#12273D] text-lg font-semibold">GTBANK</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p>Account name:</p>
            <p className="text-[#12273D] text-lg font-semibold">Maleek Wasiu</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p>Account Number: </p>
            <p className="text-[#12273D] text-lg font-semibold">******6788</p>
          </div>
        </div>
        <div>
          <p className="inline-flex float-right">
            Edit <img src={imgref.edit} alt="" />
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={successful} className="text-center w-[262px] text-base font-medium p-4 border mt-8 border-[#05297D] text-[#05297D] rounded-lg hover:text-white hover:bg-[#05297D] ">Change payment details</button>
        <button onClick={successful} className="text-center w-[262px] text-base font-medium p-4 border mt-8 border-[#05297D] text-[#05297D] rounded-lg hover:text-white hover:bg-[#05297D] ">Pay NGN 1000.00</button>
      </div>
    </div>
  );
};

export default SavedCard;
