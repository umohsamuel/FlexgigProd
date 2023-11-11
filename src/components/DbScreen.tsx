import { useNavigate } from "react-router-dom";
import DbRight from "./DbRight";
import imgref from "./imgref";

// you can make a general type to import and use if you have a lot of repeated information, else continue like this
type tipsArrayProps = {
  title: string;
  src: string;
  bgImg: string;
  color: string;
};

const tipsArray: tipsArrayProps[] = [
  {
    title: "Completing Your Profile",
    src: `${imgref.tipImg1}`,
    bgImg: `${imgref.tipBg1}`,
    color: "#2F4D93",
  },
  {
    title: "Hiring in FlexGig",
    src: `${imgref.tipImg2}`,
    bgImg: `${imgref.tipBg2}`,
    color: "#0E8B1C",
  },
  {
    title: "Billing in FlexGig",
    src: `${imgref.tipImg3}`,
    bgImg: `${imgref.tipBg3}`,
    color: "#FF7A60",
  },
];

const DbScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className=" block md:flex  h-screen ">
        <div className="sm:w-full md:mx-6 lg:mx-auto md:max-w-[470px] lg:max-w-[500px] xl:max-w-[680px] w-[100vw] mt-[130px] mx-auto flex-1">
          <div className="w-full h-[180px] xl:h-[200px] flex bg-gradient-to-r from-[#05297D] to-[#FF7A60] px-6  xl:px-12 py-4  xl:py-8 justify-between relative rounded-md">
            <div>
              <h1 className="font-semibold text-2xl lg:text-3xl tracking-tight text-white">
                Welcome Maleek!
              </h1>
              <p className="text-white mt-2 max-w-[50%] text-sm">
                Complete your profile now to have a seamless job posting as you
                do soon
              </p>
              <button
                onClick={() => navigate("/dashboard/jobs/title")}
                className="text-[#010819] bg-white rounded-full px-8 py-2 mt-3 xl:mt-6 text-sm font-medium"
              >
                Complete profile
              </button>
            </div>
            <div>
              <img
                src={imgref.image35}
                alt=""
                className="absolute top-[-45px]  right-[-30px] xl:right-[-10px] h-[220px] xl:h-[245px]"
              />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-medium text-xl text-[#292B30]">Quick tips</h2>
            <div className="flex justify-between gap-4 my-4">
              {tipsArray.map((tip) => (
                <div
                  key={tip.title}
                  className="flex justify-between w-[200px] h-[90px] rounded-lg shadow"
                >
                  <div className=" relative w-full bg-white">
                    <img src={tip.src} alt="" className="h-[80px]" />
                    <span
                      className={`absolute left-2 top-[48%] text-sm  text-[${tip.color}] font-medium  w-[80%] leading-[20px]`}
                    >
                      {tip.title}
                    </span>
                  </div>
                  <div>
                    <img src={tip.bgImg} alt="" className="h-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {" "}
            <div>
              <h2 className="font-medium text-xl text-[#292B30] pt-2">
                Active Project
              </h2>
              <div className="w-full py-6 px-6 flex flex-col bg-white mt-2 rounded-lg">
                <div className="flex-col md:flex-row flex gap-4 items-center">
                  <img src={imgref.box} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#292B30] text-center md:text-start">
                      Your Recent Job post will appear here
                    </h3>
                    <p className="text-[#9E9E9E] text-sm pt-2 text-center md:text-start">
                      Click above to get started with your job posting or hiring
                      a freelancer
                    </p>
                  </div>
                </div>
                <div className=" self-center md:self-end">
                  {/* you can make a resuseable button component to reduce repeated styles?   */}
                  <button onClick={()=>navigate("/dashboard/jobs/title")}className="bg-[#042268] text-white  mt-6  lg:mt-6 py-2 px-8 rounded-lg font-medium text-sm ">
                    Post Job now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DbRight />
      </div>
    </>
  );
};

export default DbScreen;
