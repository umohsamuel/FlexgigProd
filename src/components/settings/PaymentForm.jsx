import{ useState } from "react";
import CardPayment from "./CardPayment";
import BankPayment from "./BankPayment";
import imgref from "../imgref";
import CongratulationPage from "./CongratulationPage.jsx";

const Payment = () => {
  const [status, setStatus] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [countries, setCountries] = useState([
    { name: "United state", flag: "https://flagcdn.com/us.svg" },
    { name: "Nigeria", flag: "https://flagcdn.com/ng.svg" },
  ]);
  let options = countries.map((country, index) => (
    <option key={index} value={country.name}>
      {" "}
      {country.name}
    </option>
  ));

  function chooseMean(event) {
    let { checked, name, id } = event.target;
    setPaymentType(id);
  }
  // useEffect(() => {
  //   fetch(`https://restcountries.com/v3.1/all`)
  //     .then(res => res.json())
  //     .then(data => {
  //      let arrOfCountries= data
  //      console.log(data);
  //     let flag=  arrOfCountries.map(country=>({
  //       name: country.name.common,
  //       flag: country.flags.svg
  //     }
  //       // setCountries(country.flag)
  //      ))
  //      setCountries(flag)

  //     })

  //     .catch(err => console.log(err))

  // }, [])

  console.log(status);
  return (
    <div className="flex flex-col gap-8 border-l-[#9E9E9E] md:pl-[80px] lg:pl-[120px] border-s-2">
      {status ? (
        <CongratulationPage />
      ) : (
        <div>
          <h1 className="text-[2rem] font-semibold text-[#292B30]">
            PAYMENT/FUNDING
          </h1>
          <form>
            <label
              htmlFor="amount"
              className="text-[#262E36] text-sm font-normal"
            >
              Amount to fund <sup className="text-[#D95117]">*</sup>{" "}
            </label>
            <br />
            <div className="flex flex-row p-[9px] border-[#D8DDE3] border-2 lg:w-full">
              <select name="countries" id="countries">
                {options}
              </select>
              {/* <img src={country.flag} alt="" /> */}
              <input
                placeholder="Enter amount"
                className="focus:border-0"
                type="text"
                id="amount"
              />
              <br />
            </div>
            <p className="float-right italic text-sm font-normal text-[#8294BE]">
              Amount in Naira/Dollar shows up here
            </p>
            <div className="mt-11 flex flex-row justify-between ">
              <div
                className={`${
                  paymentType === "credit/debitcard"
                    ? "text-[#05297D] border-[#05297D]"
                    : "text-[#9E9E9E]"
                } rounded-lg p-6 border w-[308px] space-x-2 text-lg font-semibold`}
              >
                <input
                  value="credit/debitcard"
                  onChange={chooseMean}
                  type="radio"
                  name="payment"
                  id="credit/debitcard"
                />
                <label htmlFor="credit/debit card">Credit/debit Card</label>
              </div>
              <div
                className={`${
                  paymentType === "banktransfer"
                    ? "text-[#05297D] border-[#05297D]"
                    : "text-[#9E9E9E]"
                } rounded-lg p-6 border w-[308px] space-x-2 text-lg font-semibold`}
              >
                <input
                  value="banktransfer"
                  onChange={chooseMean}
                  type="radio"
                  name="payment"
                  id="banktransfer"
                />
                <label htmlFor="bank transfer">Bank transfer</label>
              </div>
            </div>
            {paymentType === "credit/debitcard" ? (
              <CardPayment timer={imgref.timer} setStatus={setStatus} />
            ) : (
              <BankPayment timer={imgref.timer} setStatus={setStatus} />
            )}
          </form>
        </div>
      )}

      {/* <BankPayment /> */}
    </div>
  );
};

export default Payment;
