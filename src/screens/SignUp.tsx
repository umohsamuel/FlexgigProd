import { Key, useEffect, useState } from "react";
// import { CountryDropdown } from "react-country-region-selector";
import chevron from "../assets/Chevron.svg";
import google from "../assets/google.svg";
import eyeReg from "../assets/eye-regular.svg";
import eyeSlash from "../assets/eye-slash-regular.svg";
// import nigeria from "../assets/nigeria logo.svg";
// import vector from "../assets/Vector.svg";
import { useForm } from "react-hook-form";
// import BlueButton from "../components/blueButton";
import { useNavigate } from "react-router-dom";

import { useFirebase } from "../hooks/useFirebase";

// import axios from "axios";

type FormData = {
  lastName: string;
  firstName: string;
  country: string;
  phone: string;
  email: string;
  password: string;
  agreement: boolean;
};

const SignUp = () => {
  const { signUp, signInWithGoogle } = useFirebase();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [countries, setCountries] = useState<
    {
      id: Key | null | undefined;
      country: string;
    }[]
  >([]);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const BASE_URL = "https://countriesnow.space/api/v0.1/countries";

    const getCountries = async () => {
      const response = await fetch(`${BASE_URL}`).then((response) =>
        response.json()
      );
      const { data } = response;
      setCountries(data);

      data.forEach((country: string) => {
        console.log(country);
      });
    };

    getCountries();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <section className="relative flex flex-col gap-5 lg:gap-3 pt-16 lg:pt-10 items-center pb-12 w-full bg-[#F6F9FF]">
      <div
        onClick={() => navigate("/createaccount")}
        className="absolute left-8 top-5"
      >
        <img className="w-7" src={chevron} alt="" />
      </div>
      <div className="flex gap-5">
        <hr className="py-[3px] px-10 rounded-[4px] bg-[#CACFDC]" />
        <hr className="py-[3px] px-10 rounded-[4px] bg-[#05297D]" />
        <hr className="py-[3px] px-10 rounded-[4px] bg-[#CACFDC]" />
      </div>
      <div>
        <p className="text-[#010819] text-[30px] lg:text-[35px] font-[500] text-center">
          Sign up as a client
        </p>
      </div>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit(signUp)}
      >
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-[400] text-[#292B30] tracking-[-0.28px]">
              Last name<sup className="text-[#D95117]">*</sup>
            </label>
            <input
              {...register("lastName", { required: true, minLength: 3 })}
              className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[300px] lg:w-[250px] border-[#CACFDC] rounded-[8px] bg-[#FFF] placeholder:text-[#A6A6A8] placeholder:text-[12px] pl-5 py-1"
              type="text"
              placeholder="Enter last name"
              name="lastName"
              id="lastName"
            />
            {errors.lastName && (
              <span className="text-red-600 text-[12px] font-[500]">
                Minimum character is 3
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-[400] text-[#292B30] tracking-[-0.28px]">
              First name<sup className="text-[#D95117]">*</sup>
            </label>
            <input
              {...register("firstName", { required: true, minLength: 3 })}
              className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[300px] lg:w-[250px] border-[#CACFDC] rounded-[8px] bg-[#FFF] placeholder:text-[#A6A6A8] placeholder:text-[12px] pl-5 py-1"
              type="text"
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
            />
            {errors.firstName && (
              <span className="text-red-600 text-[12px] font-[500]">
                Minimum character is 3
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="relative flex flex-col gap-1">
            <label className="text-[12px] font-[400] text-[#292B30] tracking-[-0.28px]">
              Country<sup className="text-[#D95117]">*</sup>
            </label>
            <select
              className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[300px] lg:w-[250px] pl-10 border-[#CACFDC] placeholder:text-[#A6A6A8] placeholder:text-[12px] rounded-[8px] bg-[#FFF] py-1"
              name="country"
              id="country"
            >
              <option value="">Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.country}>
                  {country.country}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="text-[12px] font-[400] text-[#292B30] tracking-[-0.28px]">
              Phone number<sup className="text-[#D95117]">*</sup>
            </label>
            <input
              {...register("phone", {
                required: true,
                pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
              })}
              className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[300px] lg:w-[250px] border-[#CACFDC] placeholder:text-[#A6A6A8] placeholder:text-[12px] rounded-[8px] bg-[#FFF] pl-10  py-1"
              placeholder="Enter phone number"
              name="phone"
              id="phone"
              type="text"
            />
            {/* <img
              className="absolute top-7 left-3 w-5"
              src={nigeria}
              alt="logo"
            />
            <img
              className="absolute top-9 left-[75px] w-3"
              src={vector}
              alt="logo"
            /> */}
            {/* <hr className="absolute top-6 left-[90px] border-2 border-[#c7c7c9] w-0 h-[31px]" /> */}
            {errors.phone && (
              <span className="text-red-600 text-[12px] font-[500]">
                Input a phone number
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[12px] font-[400] text-[#292B30] tracking-[-0.28px]">
            Work email address<sup className="text-[#D95117]">*</sup>
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[300px] lg:w-[520px] border-[#CACFDC] rounded-[8px] bg-[#FFF] placeholder:text-[#A6A6A8] placeholder:text-[12px] pl-5 py-1"
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
          <label className="text-[12px] font-[400] text-[#292B30] tracking-[-0.28px]">
            Password<sup className="text-[#D95117]">*</sup>
          </label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type={showPassword ? "text" : "password"}
            className="border shadow-[0px_0px_4px_0px_rgba(23,25,28,0.05)] w-[300px] lg:w-[520px] border-[#CACFDC] rounded-[8px] bg-[#FFF] placeholder:text-[#A6A6A8] placeholder:text-[12px] pl-5 py-1"
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
        <div className="flex gap-2 items-start">
          <input
            {...register("agreement", { required: true })}
            className="mt-1 lg:-ml-10"
            type="checkbox"
            name="agreement"
            id="agreement"
          />
          <div className="flex flex-col">
            <p className="font-[500] w-[280px] lg:w-[450px] leading-5 text-[14px]">
              By clicking sign up, you agree with our{" "}
              <span className="text-[#FF7A60]">Terms and Conditions</span> and
              our <span className="text-[#FF7A60]">Privacy Policy</span>
            </p>
            {errors.agreement && (
              <span className="text-red-600 text-[12px] font-[500]">
                Please accept terms and conditions
              </span>
            )}
          </div>
        </div>
        <div>
          <input
            className="border rounded-[8px] cursor-pointer text-gray-100 mt-1 py-2 w-[300px] lg:w-[500px] text-[14px] bg-[#042268]"
            type="submit"
            value="Sign up"
          />
        </div>
        {/* <BlueButton children="Sign up" /> */}
      </form>
      <section className="flex flex-col gap-5">
        <div className="relative">
          <img
            className="absolute left-12 top-1 lg:left-36 w-8 lg:top-1"
            src={google}
            alt="google"
          />
          <button
            onClick={signInWithGoogle}
            className="border rounded-[8px] font-[600] text-[14px] text-[#042268] py-2 w-[300px] lg:w-[500px] border-[#CACFDC]"
          >
            Sign up with google
          </button>
        </div>
        <div className="flex gap-1 justify-center">
          <p className="text-gray-900 font-[500]">Already have an account?</p>

          <button
            onClick={() => navigate("/signin")}
            className="text-[#FF7A60]"
          >
            Sign in
          </button>
        </div>
      </section>
    </section>
  );
};
export default SignUp;
