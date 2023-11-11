import imgref from "./imgref";
import LandingArr from "./welcomearr";

const Welcome = () => {
  return (
    <aside
      className="hidden tablet:flex w-1/2 px-[3.5%]  py-[2.5%] bg-no-repeat text-white h-[97.5vh] flex-col justify-between items-center rounded-l-[30px] relative z-10"
      // style={{ backgroundImage: `url(${imgref.backgroundlogin})` }}
    >
      {/* bg image  */}
      <img
        src={imgref.backgroundlogin}
        alt=""
        className="absolute z-[-1] w-full h-full object-cover top-0 lrounded-l-lg rounded-l-[30px] "
      />
      <div className="">
        <img src={imgref.flexgiglogo} alt="Logo" className=" h-[50px]" />

        <div className=" mt-2 flex flex-col gap-2">
          <h2 className=" font-medium text-3xl">Welcome to FlexGig</h2>
          <p className="font-normal text-sm">
            Welcome to the world of freelancers, where you can find skilled
            professionals for any project you have in mind.
          </p>
        </div>
      </div>

      <div className=" flex flex-col gap-6">
        {LandingArr.map((things, index) => (
          <div key={index} className=" flex gap-3">
            <div className="max-w-[50px] max-h-[50px] flex justify-center items-center  p-1 h-[50px] min-w-[50px] rounded-full bg-[#CDD4E5]">
              <img src={things.logo} alt="" className=" w-[30px]" />
            </div>
            <div className=" w-[89%]">
              <h2 className=" text-base font-bold">{things.heading}</h2>
              <p className=" text-sm">{things.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Welcome;
