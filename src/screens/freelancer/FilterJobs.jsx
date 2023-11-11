import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FilterJobs = () => {
  const [maxVal, setMaxVal] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onError = (errors, e) => console.log(errors);
  const onSubmit = (data, e) => {
    const values = getValues();
    console.log(values);
  };
  return (
    <div className="hidden lg:flex ml-2 p-5 font-normal text-[#646566] bg-white lg:flex-col w-[20vw]">
      <h1>Filter</h1>
      <form
        className="flex flex-col items-start gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-[#454545] font-medium text-base ">Job type</h1>
        <div className="flex-row space-x-2">
          <input
            type="checkbox"
            name="selectCheckbox"
            id="selectCheckbox"
            {...register("hourlyRate")}
            className=""
          />
          <label htmlFor="hourlyRate" className="form-check-label">
            Hourly Rate
          </label>
          {/* <input
            type="range"
            {...register("rangeslider", {
              required: {
                value: true,
                message: `rangeslider is required`,
              },
            })}
            min={1}
            max={100}
            value={maxVal}
            onChange={(event) => {
              const value = Math.max(+event.target.value, minVal + 1);
              setMaxVal(value);
              event.target.value = value.toString();
            }}
            className=""
          /> */}
        </div>
        <div className="flex-row space-x-2">
          <input
            type="checkbox"
            name="selectCheckbox"
            id="selectCheckbox"
            {...register("fixedRate")}
            className=""
          />
          <label htmlFor="fixedRate" className="form-check-label">
            Fixed Rate
          </label>
          <br />
          <div className="flex-col ">
            <div className="flex-row space-x-2">
              <input
                type="radio"
                name="selectCheckbox"
                id="amount1"
                {...register("amount", { required: true })}
                className=""
              />
              <label htmlFor="amount1" className="form-check-label">
                Less than $50
              </label>
            </div>
            <div className="flex-row space-x-2">
              <input
                type="radio"
                name="selectCheckbox"
                id="amount2"
                {...register("amount", { required: true })}
                className=""
              />
              <label htmlFor="amount2" className="form-check-label">
                $50 - $100
              </label>
            </div>

            <div className="flex-row space-x-2">
              <input
                type="radio"
                name="selectCheckbox"
                id="amount3"
                {...register("amount", { required: true })}
                className=""
              />
              <label htmlFor="amount3" className="form-check-label">
                $200 - $500
              </label>
            </div>
            <div className="flex-row space-x-2">
              <input
                type="radio"
                name="selectCheckbox"
                id="amount4"
                {...register("amount", { required: true })}
                className=""
              />
              <label htmlFor="amount4" className="form-check-label">
                $500 - $1K
              </label>
            </div>
          </div>

          <div className="flex-row space-x-2">
            <input
              type="radio"
              name="selectCheckbox"
              id="amount5"
              {...register("amount", { required: true })}
              className=""
            />
            <label htmlFor="amount5" className="form-check-label">
              $1K+
            </label>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[#454545] font-medium text-base ">
            Experience Levels
          </p>
          <div className="flex flex-col">
            <label htmlFor="experience1">
              <input
                type="radio"
                name="selectCheckbox"
                id="experience1"
                {...register("level", { required: true })}
                className=""
              />{" "}
              Entry Level
            </label>
            <label htmlFor="experience2">
              <input
                type="radio"
                name="selectCheckbox"
                id="experience2"
                {...register("level", { required: true })}
                className=""
              />{" "}
              Intermediate
            </label>
            <label htmlFor="experience3">
              <input
                type="radio"
                name="selectCheckbox"
                id="experience3"
                {...register("level", { required: true })}
                className=""
              />{" "}
              Expert
            </label>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[#454545] font-medium text-base ">
            {" "}
            Number of proposals
          </p>
          <div className="flex flex-col">
            <label htmlFor="proposal1">
              <input
                type="radio"
                name="selectCheckbox"
                id="proposal1"
                {...register("proposal", { required: true })}
                className=""
              />{" "}
              Less than 5
            </label>
            <label htmlFor="proposal2">
              <input
                type="radio"
                name="selectCheckbox"
                id="proposal2"
                {...register("proposal", { required: true })}
                className=""
              />{" "}
              5 - 10
            </label>
            <label htmlFor="proposal3">
              <input
                type="radio"
                name="selectCheckbox"
                id="proposal3"
                {...register("proposal", { required: true })}
                className=""
              />{" "}
              10 - 15
            </label>
            <label htmlFor="proposal4">
              <input
                type="radio"
                name="selectCheckbox"
                id="proposal4"
                {...register("proposal", { required: true })}
                className=""
              />{" "}
              15 - 20
            </label>
            <label htmlFor="proposal4">
              <input
                type="radio"
                name="selectCheckbox"
                id="proposal4"
                {...register("proposal", { required: true })}
                className=""
              />{" "}
              20 - 30
            </label>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[#454545] font-medium text-base ">
            Project length
          </p>
          <div className="flex flex-col">
            <label htmlFor="length1">
              <input
                type="radio"
                name="selectCheckbox"
                id="length1"
                {...register("length", { required: true })}
                className=""
              />{" "}
              Less than 1 month
            </label>
            <label htmlFor="length2">
              <input
                type="radio"
                name="selectCheckbox"
                id="length2"
                {...register("length", { required: true })}
                className=""
              />{" "}
              1 - 2 months
            </label>
            <label htmlFor="length3">
              <input
                type="radio"
                name="selectCheckbox"
                id="length3"
                {...register("length", { required: true })}
                className=""
              />{" "}
              2 - 3 months
            </label>
            <label htmlFor="length4">
              <input
                type="radio"
                name="selectCheckbox"
                id="length4"
                {...register("length", { required: true })}
                className=""
              />{" "}
              3 - 4 months
            </label>
            <label htmlFor="length5">
              <input
                type="radio"
                name="selectCheckbox"
                id="length5"
                {...register("length", { required: true })}
                className=""
              />{" "}
              More than 4 months
            </label>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[#454545] font-medium text-base ">
            Hours per week
          </p>
          <div className="flex flex-col">
            <label htmlFor="hoursPerWeek1">
              <input
                type="radio"
                name="selectCheckbox"
                id="hoursPerWeek1"
                {...register("hoursPerWeek", { required: true })}
                className=""
              />{" "}
              Less than 30hrs
            </label>
            <label htmlFor="hoursPerWeek2">
              <input
                type="radio"
                name="selectCheckbox"
                id="hoursPerWeek2"
                {...register("hoursPerWeek", { required: true })}
                className=""
              />{" "}
              More than 30hrs
            </label>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[#454545] font-medium text-base ">Client info</p>
          <div className="flex flex-col">
            <label htmlFor="clientInfo1">
              <input
                type="radio"
                name="selectCheckbox"
                id="clientInfo1"
                {...register("clientInfo", { required: true })}
                className=""
              />{" "}
              Payment verified
            </label>
            <label htmlFor="clientInfo2">
              <input
                type="radio"
                name="selectCheckbox"
                id="clientInfo2"
                {...register("clientInfo", { required: true })}
                className=""
              />{" "}
              My previous clients
            </label>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[#454545] font-medium text-base ">
            Client history
          </p>
          <div className="flex flex-col">
            <label htmlFor="clientHistory1">
              <input
                type="radio"
                name="selectCheckbox"
                id="clientHistory1"
                {...register("clientHistory", { required: true })}
                className=""
              />{" "}
              No hires
            </label>
            <label htmlFor="clientHistory2">
              <input
                type="radio"
                name="selectCheckbox"
                id="clientHistory2"
                {...register("clientHistory", { required: true })}
                className=""
              />{" "}
              1 - 9 hires
            </label>
            <label htmlFor="clientHistory3">
              <input
                type="radio"
                name="selectCheckbox"
                id="clientHistory3"
                {...register("clientHistory", { required: true })}
                className=""
              />{" "}
              10+ hires
            </label>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[#454545] font-medium text-base ">
            Client location
          </p>
          <div className="flex flex-col">
            <label htmlFor="clientLocation1">
              <input
                type="radio"
                name="selectCheckbox"
                id="clientLocation1"
                {...register("clientLocation", { required: true })}
                className=""
              />{" "}
              World-wide
            </label>
            <label htmlFor="clientLocation2">
              <input
                type="radio"
                name="selectCheckbox"
                id="clientLocation2"
                {...register("clientLocation", { required: true })}
                className=""
              />{" "}
              Other
            </label>
          </div>
        </div>
        <input type="text" placeholder="Select or type location" />
        
      </form>
    </div>
  );
};

export default FilterJobs;
