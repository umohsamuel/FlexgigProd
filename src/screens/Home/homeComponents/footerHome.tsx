import { Link } from "react-router-dom";
import imgref from "../../../components/imgref";
import { CategoriesArr } from "./HomeArr.ts";
import { QuickArr } from "./HomeArr.ts";
import { PopularArr } from "./HomeArr.ts";
import { ResourcesArr } from "./HomeArr.ts";

const LogosArr = [
  {
    imgsrc: imgref.facebook,
    alt: "FaceBookLogo",
    href: "/",
  },
  {
    imgsrc: imgref.twitter,
    alt: "TwitterLogo",
    href: "/",
  },
  {
    imgsrc: imgref.linkedin,
    alt: "LinkedInLogo",
    href: "/",
  },
  {
    imgsrc: imgref.instagram,
    alt: "InstagramLogo",
    href: "/",
  },
];

function FooterHome() {
  return (
    <footer className=" px-[10%] tablet:px-[5%] py-[47px] bg-[#05297D] text-white font-medium text-xl flex flex-col gap-7 tablet:flex-row tablet:gap-0 justify-between">
      <div>
        <h2>Categories</h2>
        <ul className=" font-normal text-sm text-[#FDFDFD] tracking-[0.15px] flex flex-col gap-3 mt-[18px]">
          {CategoriesArr.map((thing, index) => (
            <li key={index}>
              <Link to={thing.href}>{thing.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Quick Links</h2>
        <ul className=" font-normal text-sm text-[#FDFDFD] tracking-[0.15px] flex flex-col gap-3 mt-[18px]">
          {QuickArr.map((thing, index) => (
            <li key={index}>
              <Link to={thing.href}>{thing.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Popular Courses</h2>
        <ul className=" font-normal text-sm text-[#FDFDFD] tracking-[0.15px] flex flex-col gap-3 mt-[18px]">
          {PopularArr.map((thing, index) => (
            <li key={index}>
              <Link to={thing.href}>{thing.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Resources</h2>
        <ul className=" font-normal text-sm text-[#FDFDFD] tracking-[0.15px] flex flex-col gap-3 mt-[18px]">
          {ResourcesArr.map((thing, index) => (
            <li key={index}>
              <Link to={thing.href}>{thing.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" font-semibold text-2xl">
        <h2>Mobile App</h2>
        <div className=" font-normal text-sm text-[#FDFDFD] tracking-[0.15px] flex flex-col gap-3 mt-[18px]">
          <p>getonGP</p>
          <p>getonApple</p>
        </div>

        <div className=" mt-8">
          <h2>Follow us</h2>
          <div className="flex gap-5 items-center mt-[18px] ">
            {LogosArr.map((things, index) => (
              <a key={index} href={things.href}><img src={things.imgsrc} alt={things.alt} /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterHome;
