import React, { useState } from 'react'
import NavHome from './NavHome'
import FooterHome from './footerHome'
import { Link } from 'react-router-dom';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const BelowNavkiniArr = [
  {
    title: "Sales & Marketing",
    href: "/",
  },
  {
    title: "Design & Graphics",
    href: "/",
  },
  {
    title: "Web Development",
    href: "/",
  },
];

const DropDownOptions = [
  {
    title: "Option 1",
    href: "/",
  },
  {
    title: "Option 2",
    href: "/",
  },
  {
    title: "Option 3",
    href: "/",
  },
];

function HomeLayout({ children }: HomeLayoutProps) {

    const [mymore, setMymore] = useState<boolean>(false);
    function ToggleMore() {
      setMymore((prev) => !prev);
    }

  return (
    <div className=" z-[1]">
      <NavHome />
      <div className=" hidden tablet:flex gap-5 items-center px-[5%] bg-[#00007E] text-white text-base font-semibold py-3 z-30">
        {BelowNavkiniArr.map((things, index) => (
          <Link key={index} to={things.href}>
            {things.title}
          </Link>
        ))}
        <div className=" relative inline-block">
          <button onClick={ToggleMore} className=" cursor-pointer">
            More
          </button>
          <ul
            className={`absolute ${
              mymore ? "block" : "hidden"
            }  left-[50%] translate-x-[-50%] mt-4 bg-[#00007E] px-[0.5rem] py-2 min-w-[100px] w-full flex flex-col items-center gap-4 z-30`}
          >
            {DropDownOptions.map((things, index) => (
              <li key={index}>
                <Link to={things.href}>{things.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
      <FooterHome />
    </div>
  );
}

export default HomeLayout