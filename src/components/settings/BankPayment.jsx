import imgref from "../imgref";

const BankPayment = (props) => {

  function successful(event){
    event.preventDefault()
    props.setStatus(true)
  }
  
  return (
    <div className="flex flex-col gap-[47px] mt-[47px] ">
      <div className="flex flex-row gap-[14px] bg-[#60a0ff0f] p-[14px]">
        <img
          src={props.timer}
          alt=""
          className="p-2 rounded-full bg-[#63C6FE] "
        />
        <p className="text-[#141842] font-normal text-xl">
          Bank transfer can take up to 15minutes to be confirmed
        </p>
      </div>
      <h1>Make a transfer to the account details below</h1>
      <div className="flex flex-col border-2 gap-6 text-[#A6A6A8] bg-[#fafbffb3] border-[#CACFDC] px-[52px] py-[23px]">
        <img src={imgref.flexgiglogo2} alt="logo" className="w-[130px]" />
        <div className="grid grid-cols-2 gap-5">
          <p className="border-r-2 border-[#A6A6A8]">Account Name</p>
          <p>FlexGig</p>
          <p className="border-r-2 border-[#A6A6A8]">Account Number</p>
          <p>0000000000</p>
          <p className="border-r-2 border-[#A6A6A8]">Bank Name</p>
          <p>GTBank</p>
          <p className="border-r-2 border-[#A6A6A8]">Account Type</p>
          <p>Saving</p>
        </div>
      </div>
      <p>Upload Receipt</p>
      <div className="  border-2 gap-6 text-[#A6A6A8] bg-[#fafbffb3] border-[#CACFDC] px-[52px] py-[23px]">
        <label className="flex flex-col items-center" htmlFor="file">
          <img src={imgref.cloud} className="w-8 " alt="cloud" />
          <p className="text-center">
            <span className="underline text-[#FF7A60]">Select a file</span> or
            Drag and Drop
          </p>
        </label>
        <input
          className="invisible"
          type="file"
          name="file"
          id="file"
          accept="image/png,image/jpeg,image/jpg"
        />
      </div>
      <div>
        <button onClick={successful} className="float-right text-center w-[262px] text-base font-medium p-4 border mt-8 border-[#05297D] text-[#05297D] rounded-lg hover:text-white hover:bg-[#05297D] ">
          Payment mode
        </button>
      </div>
    </div>
  );
};

export default BankPayment;
