import { useNavigate } from 'react-router-dom';
import imgref from '../../../components/imgref'
import learnmmore from "./learnmore.svg"

function WhereToStart() {
  const navigate = useNavigate();
  return (
    <section className=" mx-[5%] px-[5%] mb-[10vh] rounded-lg py-5 min-h-[50vh] bg-gradient-to-br from-[#05297D] from-40% to-[#FF7A60] tablet:flex items-center justify-between">
      <div className=" tablet:w-[45%] text-white">
        <div className=" max-w-[442px]">
          <h1 className=" font-medium text-base tablet:text-[32px]">
            Don’t Know Where To Start?
          </h1>
          <p className=" font-normal text-xs tablet:text-lg mt-[9px] mb-[18px] tablet:mb-[48px]">
            Check out our list of tutorials available and easy to follow guides
            for getting started.
          </p>
          <div>
            <button
              onClick={() => navigate("/signin")}
              className=" flex justify-center items-center gap-2 tablet:gap-[10px] font font-medium text-xs tablet:text-base bg-white text-black px-3 tablet:px-9 py-[10px] tablet:py-3 rounded-lg"
            >
              <img
                src={learnmmore}
                alt=""
                className=" w-[16.62px] tablet:w-[29px]"
              />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-8 tablet:mt-0 tablet:w-1/2 flex justify-end">
        <img src={imgref.dontknowhome} alt="" />
      </div>
    </section>
  );
}

export default WhereToStart