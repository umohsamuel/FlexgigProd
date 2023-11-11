import { useState } from "react";
import imgref from "../components/imgref";
import { useNavigate } from "react-router-dom";
import Passwordresetpage from "../screens/Passwordresetpage.jsx";
// @ts-ignore
import validator from "validator";
import Welcome from "../components/Welcome";

function CreatePassword() {
    const [password, setPassword] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const [error, setError] = useState('')
    let navigate = useNavigate();
    const [passwordStatus, setpasswordStatus] = useState(false);


    function inputpassword(event) {
        const { name, value } = event.target;
        setPassword(prev => {
            return { ...prev, [name]: value }
        })

    }
    function savepassword(event) {
        event.preventDefault();
        if (password.newPassword && password.confirmPassword) {
            if (password.newPassword === password.confirmPassword) {
                setpasswordStatus(true);
            }else{
                setError('Passwords do not match')
            }

        } else {
            setError("Please fill all fields")
        }

    }

    console.log(password);
    return (
        <div className="flex ">
            <div className=" px-[20px] lg:px-[80px]">
                <img
                    src={imgref.returnIcon}
                    alt="returnIcon"
                    className="bg-[#042268] cursor-pointer rounded-full mt-5 "
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                {passwordStatus ? (
                    <Passwordresetpage />
                ) : (
                    <div className=" flex flex-col justify-center  ">
                        <img
                            src={imgref.flexgigcoloredlog}
                            alt="flexgigcoloredlog"
                            className="self-center mt-[46px] md:mt-[100px]  w-[100px] h-[26px] md:w-[275px] md:h-[72px]"
                        />
                        <div className="flex flex-col gap-[2rem]">
                            <h3 className=" font-medium  text-center text-xl lg:text-[2.5rem]  text-[#292B30]">
                                Create new password
                            </h3>
                            <p className="text-center font-normal text-base md:text-[#010819] text-[#646566] lg:text-2xl">
                                Enter your new password below
                            </p>
                            <form>
                                <label
                                    className="text-[#292B30] font-normal text-sm  "
                                    htmlFor="newPassword"
                                >
                                    New password <sup className="text-[#D95117]">*</sup>
                                </label>
                                <br />
                                <input
                                    onChange={inputpassword}
                                    value={password.newPassword}
                                    className={` "border p-5  shadow shadow-[rgba(23, 25, 28, 0.05)] placeholder:text-[#A6A6A8] rounded-lg w-full px-3 py-[10px] mb-[24px] mb:mb-[32px] lg:w-[508px] md:w-full"`}
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    placeholder="Enter new password"
                                />
                                <br />
                                <label
                                    className="text-[#292B30] font-normal text-sm  "
                                    htmlFor="confirmPassword"
                                >
                                    Confirm password <sup className="text-[#D95117]">*</sup>
                                </label>
                                <br />
                                <input
                                    onChange={inputpassword}
                                    value={password.confirmPassword}
                                    className={` "border p-5  shadow shadow-[rgba(23, 25, 28, 0.05)] placeholder:text-[#A6A6A8] rounded-lg w-[90vw] px-3 py-[10px]  mb:mb-[100px] lg:w-[508px] md:w-full"`}
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Enter new password"
                                />
                                <br />
                                <p className="text-[#646566] font-normal text-[10px] mb-[56px] ">{error}</p>

                                <button onClick={savepassword} className=" p-3 w-full md:w-full text-base text-white  rounded-lg bg-[#042268] lg:p-3  lg:w-[508px] lg:h-[50px]">
                                    Send email
                                </button>

                            </form>
                        </div>
                    </div>
                )}
            </div>
            {/* <Welcome /> */}
        </div>
    );
}

export default CreatePassword;
