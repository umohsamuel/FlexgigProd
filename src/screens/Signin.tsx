import { useState } from "react";
import imgref from "../components/imgref";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import eyeReg from "../assets/eye-regular.svg";
import eyeSlash from "../assets/eye-slash-regular.svg";
import ProgressEmpty from "../components/shared/ProgressEmpty";
import ProgressFull from "../components/shared/ProgressFull";
import { useFirebase } from "../hooks/useFirebase";

type FormData = {
  email: string;
  password: string;
};
const Signin = () => {
  const { signIn, signInWithGoogle } = useFirebase();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // const onSubmit = (data: any, e: any) => {
  //   console.log(data);
  //   navigate("/dashboard");
  // };

  // const onError = (errors: any, e: any) => console.log(errors);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={imgref.returnIcon}
        alt="returnIcon"
        className="bg-[#042268] self-start mx-[20px] lg:mx-[80px] cursor-pointer rounded-full mt-5 "
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className="flex flex-row justify-center gap-4 mt-7">
        <ProgressFull />
        <ProgressFull />
        <ProgressEmpty />
      </div>
      <img
        src={imgref.flexgigcoloredlog}
        alt="flexgigcoloredlog"
        className="self-center mt-[36px] md:mt-[36px]  w-[100px] h-[26px] md:w-[275px] md:h-[72px]"
      />
      <p>Sign in to your account</p>
      <form className="space-y-[32px]" onSubmit={handleSubmit(signIn)}>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-[400] text-[#292B30] tracking-[-0.28px]">
            Email address<sup className="text-[#D95117]">*</sup>
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[90vw] lg:w-[520px] border-[#CACFDC] rounded-[8px] bg-[#FFF] placeholder:text-[#A6A6A8] placeholder:text-[12px] pl-5 py-1"
            type="text"
            placeholder="Enter work email"
            name="email"
            id="email"
          />
          {errors.email && (
            <span className="text-red-600 text-[12px] font-[500]">
              Enter a valid email
            </span>
          )}
        </div>
        <div className="flex relative flex-col gap-1">
          <label className="text-sm font-[400] text-[#292B30] tracking-[-0.28px]">
            Password<sup className="text-[#D95117]">*</sup>
          </label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type={showPassword ? "text" : "password"}
            className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[90vw] lg:w-[520px] border-[#CACFDC] rounded-[8px] bg-[#FFF] placeholder:text-[#A6A6A8] placeholder:text-[12px] pl-5 py-1"
            placeholder="******"
            name="password"
            id="password"
            autoComplete="new-password"
          />
          <span
            className="w-5 absolute right-3 cursor-pointer top-8"
            onClick={passwordVisibility}
          >
            {showPassword ? (
              <img src={eyeReg} alt="logo" />
            ) : (
              <img src={eyeSlash} alt="logo" />
            )}
          </span>
          {errors.password && (
            <span className="text-red-600 text-[12px] font-[500]">
              It must be more than 8 characters
            </span>
          )}
        </div>
        <div>
          <p
            className="float-right text-[#FF7A60] text-sm lg:text-lg cursor-pointer"
            onClick={() => {
              navigate("/forgetpassword");
            }}
          >
            Forgot password?
          </p>
        </div>
        <button
          className="p-3 w-[90vw] mt-28 md:w-full text-base text-white  rounded-lg bg-[#042268] lg:p-3  lg:w-[508px] lg:h-[50px]"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div onClick={signInWithGoogle} className="flex gap-4 mt-7 lg:text-base items-center text-sm font-medium text-[#292B30] cursor-pointer">
        <img src={imgref.google} alt="google" />
        <p>Sign in with google</p>
      </div>
      <p className=" text-sm my-4 lg:text-lg">
        Don’t have an account?{" "}
        <span
          onClick={() => {
            navigate("/signup");
          }}
          className="text-[#FF7A60] cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Signin;
