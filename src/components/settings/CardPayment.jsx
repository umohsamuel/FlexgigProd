import NewCard from "./NewCard";

const CardPayment = (props) => {
  return (
    <div className="flex flex-col gap-[47px] mt-[47px]">
      <div className="flex flex-row gap-[14px] bg-[#60a0ff0f] p-[14px]">
        <img src={props.timer} alt="" className="p-2 rounded-full bg-[#63C6FE] " />
        <p className="text-[#141842] font-normal text-xl">Credit card payments might take up to 24hrs to be processed</p>
      </div>
      <NewCard setStatus={props.setStatus} timer ={props.timer}/>
      {/* <SavedCard setStatus={props.setStatus} timer ={props.timer}/> */}
    </div>
  );
};

export default CardPayment;
