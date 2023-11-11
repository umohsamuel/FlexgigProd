import React, { useState } from "react";
import imgref from "../components/imgref";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../hooks/useFirebase";
// // @ts-ignore
// import EmailSentPage from "../screens/EmailSentPage.jsx";
// // @ts-ignore
// import validator from "validator";
// @ts-ignore
import EmailSentPage from "../screens/EmailSentPage.jsx";
// @ts-ignore
import validator from "validator";

// function Forgetpassword() {
//   const [userEmail, setUserEmail] = useState("");
//   const [emailError, setEmailError] = useState(false);
//   const [mailStatus, setMailStatus] = useState(false);
//   let navigate = useNavigate();


//   function emailcheck(event: React.ChangeEvent<HTMLInputElement>) {
//     var email = event.target.value;
//     setUserEmail(email);
//   }
//   function sendMail(e: React.FormEvent) {
//     e.preventDefault();
//     if (validator.isEmail(userEmail)) {
//       setEmailError(false);
//       setMailStatus(true);
//     } else {
//       setEmailError(true);
//     }
//   }
//   console.log(userEmail);
//   return (
//     <div className="flex">
//       <div className=" px-[20px] lg:px-[80px]">
//         <img
//           src={imgref.returnIcon}
//           alt="returnIcon"
//           className="bg-[#042268] cursor-pointer rounded-full mt-5 "
//           onClick={() => {
//             navigate(-1);
//           }}
//         />
//         {mailStatus ? (
//           <EmailSentPage userEmail={userEmail} />
//         ) : (
//           <div className=" flex flex-col justify-center ">
//             <img
//               src={imgref.flexgigcoloredlog}
//               alt="flexgigcoloredlog"
//               className="self-center mt-[46px] md:mt-[100px]  w-[100px] h-[26px] md:w-[275px] md:h-[72px]"
//             />
//             <div className="flex flex-col gap-[2.1rem]">
//               <h3 className=" font-medium  text-center text-xl lg:text-[2.5rem]  text-[#292B30]">
//                 Forgot Password
//               </h3>
//               <p className="text-center font-normal text-base md:text-[#010819] text-[#646566] lg:text-2xl">
//                 Enter your email below to receive reset password link
//               </p>
//               <form>
//                 <label
//                   className={`${
//                     emailError ? "text-red-800" : "text-[#292B30]"
//                   } font-normal text-sm  text-[#292B30]`}
//                   htmlFor="email"
//                 >
//                   Email address <sup className="text-[#D95117]">*</sup>
//                 </label>
//                 <br />
//                 <input
//                   onChange={emailcheck}
//                   value={userEmail}
//                   className={` "border p-5  shadow shadow-[rgba(23, 25, 28, 0.05)] placeholder:text-[#A6A6A8] rounded-lg w-full px-3 py-[10px] mb-[72px] mb:mb-[100px] lg:w-[508px] md:w-full"`}
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Enter email address"
//                 />
//                 <br />
//                 <button
//                   className=" p-3 w-full md:w-full text-base text-white  rounded-lg bg-[#042268] lg:p-3  lg:w-[508px] lg:h-[50px]"
//                   onClick={sendMail}
//                 >
//                   Send email
//                 </button>
//               </form>
//               <div className="flex mt-4 md:mt-4 flex-row justify-center gap-2 font-normal text-sm lg:text-lg">
//                 <p className="text-[#010819]">remember your email? </p>
//                 <p
//                   className="text-[#FF7A60] cursor-pointer"
//                   id="signInBtn"
//                   onClick={() => {
//                     navigate("/Signin");
//                   }}
//                 >
//                   Sign in
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* <Welcome /> */}
//     </div>
//   );
// }

// export default Forgetpassword;

// you can delete later and use your own component after fixing the input.
interface Input {
  email: string;
}
const Forgetpassword = () => {
  const {handleForgotPassword} = useFirebase();
  const navigate = useNavigate()
  const [textInput, setTextInput] = useState<Input>({
    email: ""
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTextInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  
  return (
    <>
      <div className="flex">
        <div className=" px-[20px] lg:px-[80px]">
          <img
            src={imgref.returnIcon}
            alt="returnIcon"
            className="bg-[#042268] cursor-pointer rounded-full mt-5 "
            onClick={() => {
              navigate(-1);
            }}
          />

          <div className=" flex flex-col justify-center ">
            <img
              src={imgref.flexgigcoloredlog}
              alt="flexgigcoloredlog"
              className="self-center mt-[46px] md:mt-[100px]  w-[100px] h-[26px] md:w-[275px] md:h-[72px]"
            />
            <div className="flex flex-col gap-[2.1rem]">
              <h3 className=" font-medium  text-center text-xl lg:text-[2.5rem]  text-[#292B30]">
                Forgot Password
              </h3>
              <p className="text-center font-normal text-base md:text-[#010819] text-[#646566] lg:text-2xl">
                Enter your email below to receive reset password link
              </p>
              <form>
                <label
                  className="font-normal text-sm  text-[#292B30]"
                  htmlFor="email"
                >
                  Email address <sup className="text-[#D95117]">*</sup>
                </label>
                <br />
                <div className="flex flex-col mb-[40px] ">
                  <input
                    onChange={emailcheck}
                    value={userEmail}
                    className={` "border p-5  shadow shadow-[rgba(23, 25, 28, 0.05)] placeholder:text-[#A6A6A8] rounded-lg w-full px-3 py-[10px] lg:w-[508px] md:w-full"`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                  />{" "}
                  {emailError && (
                    <span className="text-red-800 font-normal text-sm">
                      Invalid Email
                    </span>
                  )}
                </div>


                <br />

                <button
                  className=" p-3 w-full md:w-full text-base text-white  rounded-lg bg-[#042268] lg:p-3  lg:w-[508px] lg:h-[50px]"
                  onClick={() => handleForgotPassword(textInput.email)}
                >
                  Send email
                </button>
              </form>
              <div className="flex mt-4 md:mt-4 flex-row justify-center gap-2 font-normal text-sm lg:text-lg">
                <p className="text-[#010819]">remember your email? </p>
                <p
                  className="text-[#FF7A60] cursor-pointer"
                  id="signInBtn"
                  onClick={() => {
                    navigate("/Signin");
                  }}
                >
                  Sign in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forgetpassword;
