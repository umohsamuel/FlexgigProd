import React, { useState } from "react";
import imgref from "../components/imgref";
import { useNavigate } from "react-router-dom";

const ChooseAccount = () => {
    let navigate = useNavigate();
    const [option, setoption] = useState({
        id: "",
        checked: false,
    })
    function select(event) {
        // event.preventDefault();
        const { id, checked, type, value } = event.target
        setoption(prev => {
            return ({
                ...prev,
                id: id,
                checked: checked,
            })
        })

    }
    console.log(option);
    return (
        <div className="flex flex-col  items-center bg-[#F6F9FF] ">
            <div className="self-start px-[20px] lg:px-[80px]">
                <img
                    src={imgref.returnIcon}
                    alt="returnIcon"
                    className="bg-[#042268] cursor-pointer rounded-full mt-5 "
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </div>
            <div className="flex flex-row justify-center gap-4 mt-5">
                <div className="w-[120px] h-[8px] bg-[#05297D] rounded"></div>
                <div className="w-[120px] h-[8px] bg-[#CACFDC] rounded"></div>
            </div>
            <p className="text-[#010819] font-medium text-[2.5rem] mt-7">Sign In</p>
            <p className="text-[#010819] text-lg font-normal">
                Choose an account to get started and explore the market place
            </p>
            <div className="space-y-7 w-[508px]">
                <div className="flex flex-row justify-between space-x-10 rounded-xl  border-[3px] py-3 px-6 border-[#CACFDC]">
                    <img src={imgref.ellipse5} alt="ellipse5" className="w-[64px]" />
                    <div className="flex flex-col text-[#010819]  ">
                        <label htmlFor="freelancer" className=" font-medium text-2xl">
                            Sign In as a freelancer
                        </label>
                        <p className="font-normal text-lg">
                            I’m looking for work as a freelancer
                        </p>
                    </div>
                    <input onChange={select}
                        value="freelancer"
                        className="self-baseline "
                        type="radio"
                        name="choose"
                        id="freelancer"
                    />
                </div>
                <div className="flex flex-row justify-between space-x-10 rounded-xl  border-[3px] py-3 px-6 border-[#CACFDC]">
                    <img src={imgref.ellipse6} alt="ellipse5" className="w-[64px]" />
                    <div className="flex flex-col text-[#010819] border-3 rounded-xl border-[]">
                        <label htmlFor="client" className=" font-medium text-2xl">
                            Sign In as a Client
                        </label>
                        <p className="font-normal text-lg">
                            I’m looking for talents to hire
                        </p>
                    </div>
                    <input onChange={select}
                        value="client"
                        className="self-baseline "
                        type="radio"
                        name="choose"
                        id="client"
                    />
                </div>
                <div className="flex flex-row opacity-30 justify-between space-x-10 rounded-xl  border-[3px] py-3 px-6 border-[#CACFDC]">
                    {/* <img src={imgref.ellipse5} alt="ellipse5" /> */}
                    <div className="w-[64px] h-[64px] bg-[#D9D9D9] rounded-full"></div>
                    <div className="flex flex-col text-[#010819] border-3 rounded-xl border-[]">
                        <label htmlFor="agency" className=" font-medium text-2xl">
                            Sign In as an agency
                        </label>
                        <p className="font-normal text-lg">
                            I’m looking for work as a freelancer
                        </p>
                    </div>
                    <input onChange={select}
                        value="agency"
                        className="self-baseline "
                        type="radio"
                        name="choose"
                        id="agency"
                        disabled
                    />
                </div>
            </div>
            <button
                onClick={() => {
                    option.checked ? navigate("/signin") : ''
                        ;
                }}
                className=" p-3 w-[90vw] mt-14 md:w-full text-base text-white  rounded-lg bg-[#042268] lg:p-3  lg:w-[508px] lg:h-[50px]"
            >
                Continue
            </button>
            <div className="flex mt-5">
                <p className="text-[#010819] text-lg">
                    Already have an account?{" "}
                    <span
                        onClick={() => {
                            navigate("/signin");
                        }}
                        className="text-[#FF7A60] cursor-pointer"
                    >
                        Sign In
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ChooseAccount;
