import { WhatIsThisBlue } from '..';
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FlexGigTalentPoll } from './HomeArr';
import { useNavigate } from 'react-router-dom';

// @ts-ignore
// function Arrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

function TalentPool() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      // nextArrow: <Arrow />,
      // prevArrow: <Arrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };

    const navigate = useNavigate();
  return (
    <section className=" max-w-[100vw] tablet:flex px-[5%] items-center justify-between my-[10vh] py-8 min-h-full overflow-hidden">
      <div className=" tablet:w-[45%]">
        <div className="max-w-[506px]">
          <h1 className=" text-xl tablet:text-4xl text-center tablet:text-start font-semibold">
            Choose From Pool Of Talents on FlexGig
          </h1>
          <p className=" mt-[18px] mb-7 text-sm tablet:text-lg text-center tablet:text-start  font-normal">
            Whether you're a visionary entrepreneur, a seasoned business
            executive, or a creative mastermind, FlexGig has everything you need
            to thrive in the gig economy
          </p>
          <div className=" flex justify-center tablet:block">
            <WhatIsThisBlue
              children="Get Started"
              HandleClick={() => navigate("/signin")}
            />
          </div>
        </div>
      </div>

      {/* <div className=" mt-6 tablet:mt-0 tablet:w-1/2 flex"> */}
      <div className=" tablet:w-[50%] mt-6 tablet:mt-0">
        <Slider {...settings}>
          {FlexGigTalentPoll.map((thing, index) => (
            <div
              key={index}
              className=" container bg-[#FEFEFE] shadow rounded-lg px-5 py-[15px] max-w-[302px] min-h-[228px]"
            >
              <img src={thing.logo} alt="" />
              <h2 className=" font-medium text-2xl mt-[10px]">{thing.title}</h2>
              <p className=" font-normal text-sm mt-[18px]">
                {thing.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TalentPool