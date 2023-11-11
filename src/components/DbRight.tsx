import { useState } from "react";
import imgref from "./imgref";

const freelancers = [
  {
    name: "Maleek Wasiu",
    profileImg: `${imgref.profile}`,
    job: "Professional UI/UX Designer",
    client: 1027,
    lightStar: `${imgref.starLight}`,
    greyStar: `${imgref.starGrey}`,
  },
 
  {
    name: "Maleek Wasiu",
    profileImg: `${imgref.profile}`,
    job: "Professional UI/UX Designer",
    client: 1027,
    lightStar: `${imgref.starLight}`,
    greyStar: `${imgref.starGrey}`,
  },
  
  {
    name: "Maleek Wasiu",
    profileImg: `${imgref.profile}`,
    job: "Professional UI/UX Designer",
    client: 1027,
    lightStar: `${imgref.starLight}`,
    greyStar: `${imgref.starGrey}`,
  },
  {
    name: "Maleek Wasiu",
    profileImg: `${imgref.profile}`,
    job: "Professional UI/UX Designer",
    client: 1027,
    lightStar: `${imgref.starLight}`,
    greyStar: `${imgref.starGrey}`,
  },
];

// i took the liberty to create a rating Component, so you really dont have to use any library, unless you cant work with it. its not useful now so ill comment it out 

type StarProps = {
  selected: boolean
  onSelect: () => void
}

function Star({ selected, onSelect }: StarProps) {
  return (
    <span
      className={`star ${selected ? "selected" : ""}`}
      onClick={onSelect}
      style={{
        cursor: "pointer",
        color: selected ? "#FF7A60" : "#939697", // Set color based on selected state
        margin: "0 5px",
      }}
    >
      ★
    </span>
  );
}


function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onSelect={() => handleStarClick(index)}
        />
      ))}
      {/* <p>Selected Rating: {rating} stars</p> */}
    </div>
  );
}



const DbRight = () => {
  return (
    <>
      <div className="p-4  pt-[90px]  w-full h-screen  md:w-[250px]  lg:w-[280px] xl:w-[330px]   bg-white z-0 font-poppins">
        <div className="h-[140px] border rounded-lg flex flex-col justify-center items-center">
          <img src={imgref.add} alt="" className="h-[30px] xl:h-[35px]" />
          <p className="font-medium text-[#292B30] text-sm">
            Add a payment method
          </p>
        </div>
        <div className="text-[#4A5A5A] font-medium flex justify-between py-4">
          <p className=" ">Top Freelancers</p>
          <button className="text-sm">View all</button>
        </div>
        {freelancers.map((freelancer) => (
          <div className="flex  border my-2 border-[#ACB8D4] rounded-lg justify-between py-2 px-2 xl:px-[18px]  gap-2">
            <img
              src={freelancer.profileImg}
              alt="Profile"
              className="justify-self-start  h-[40px] xl:h-[50px]"
            />
            <div>
              <h4 className="font-semibold text-[#333333] text-sm">
                {freelancer.name}
              </h4>
              <p className="font-medium  text-[10px] xl:text-[12px] text-[#8A8A8A] py-1">
                {freelancer.job}
              </p>
              <div className="flex gap-4 w-full items-center justify-between ">
                <div className="flex gap-1">
                  {/* Alot of repeated code why arent we mapping over this broski? whatever is returned in the backend, youll map overit that number of times i guess? */}
                  <img
                    src={imgref.starLight}
                    alt="Star rating "
                    className=" h-3 xl:h-4"
                  />
                  <img
                    src={imgref.starLight}
                    alt="Star rating"
                    className=" h-3 xl:h-4"
                  />
                  <img
                    src={imgref.starLight}
                    alt="Star rating"
                    className=" h-3 xl:h-4"
                  />
                  <img
                    src={imgref.starLight}
                    alt="Star rating"
                    className=" h-3 xl:h-4"
                  />
                  <img
                    src={imgref.starGrey}
                    alt="Star rating"
                    className=" h-3 xl:h-4"
                  />
                  {/* <StarRating /> */}
                </div>
                <p className="text-[12px] font-medium text-[#8A8A8A] w-full flex gap-2">
                  <span className="ms-6">{freelancer.client}</span>{" "}
                  <span>Clients</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DbRight;
