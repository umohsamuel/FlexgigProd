import imgref from "../imgref";

const NewCard = (props) => {
    function successful(event){
        event.preventDefault()
        props.setStatus(true)
      }
    return (
        <div className="">
            <div className="flex mb-5">
                <img src={imgref.wallet} alt="wallet" className="pr-1" />
                <p>Card details</p>
            </div>
            <div>
                <form className="flex flex-col p-6 border-2 border-[#CACFDC] rounded-lg ">
                    <label htmlFor="cardName">
                        Card Name <sup className="text-[#D95117]">*</sup>
                    </label>
                    <input
                        type="text"
                        name="cardName"
                        className="px-3 py-[10px] mb-5"
                        placeholder="Enter your Card name"
                    />
                    <label htmlFor="cardNumber">
                        Card Number <sup className="text-[#D95117]">*</sup>
                    </label>
                    <input
                        type="text"
                        name="cardNumber"
                        className="px-3 py-[10px] mb-5"
                        placeholder="00000000000000000"
                    />
                    <div className="flex flex-row space-x-[42px]">
                        <div className="flex flex-col">
                            <label htmlFor="date">
                                Expiry Date <sup className="text-[#D95117]">*</sup>
                            </label>
                            <div className="space-x-4">
                                <input
                                    className="p-3"
                                    type="text"
                                    name="date"
                                    id="month"
                                    placeholder="month"
                                />
                                <input
                                    className="p-3"
                                    type="text"
                                    name="date"
                                    id="year"
                                    placeholder="year"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="cvv">
                                CVV <sup className="text-[#D95117]">*</sup>
                            </label>
                            <input className="p-3" type="text" name="cvv" placeholder="123" />
                        </div>
                    </div>
                </form>
                <button onClick={successful}  className="float-right lg:w-[286px] text-base font-medium rounded-lg text-white bg-[#042268] p-3 mt-10 text-center">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default NewCard;
