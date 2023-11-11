import { useNavigate } from 'react-router-dom';
import { FindGreaterArr } from './HomeArr';

function GreatOppourtinity() {
  const navigate = useNavigate();
  return (
    <section className="bgimgforlanding text-white rounded-lg h-screen mx-[7px] px-[5%] py-[52px] flex items-center">
      <div className=" tablet:w-1/2">
        <h1 className=" font-semibold text-xl tablet:text-4xl">
          Find Great Opportunity
        </h1>
        <p className=" mt-[18px] font-medium text-sm tablet:text-xl">
          You can unlock a plethora of opportunities that will empower your
          career and elevate your freelancing journey.
        </p>
        <div className=" my-[32px] flex flex-col gap-6">
          {FindGreaterArr.map((thing, index) => (
            <div
              key={index}
              className="flex items-center gap-[5px] tablet:gap-5"
            >
              <img src={thing.logo} alt="" className=" w-6 tablet:w-[50px]" />
              <p className=" font-medium text-xs tablet:text-lg">
                {thing.info}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/signin")}
          className=" px-[9.5px] tablet:px-10 py-[11px] tablet:py-[13px] rounded-lg bg-white text-black text-xs tablet:text-base font-medium"
        >
          Find Opportunities
        </button>
      </div>
    </section>
  );
}

export default GreatOppourtinity