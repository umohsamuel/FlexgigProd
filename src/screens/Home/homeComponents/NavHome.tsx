import imgref from "../../../components/imgref";
import { Link, useNavigate } from "react-router-dom";

const NavLiArr = [
  { title: "How it Works", href: "/" },
  { title: "About Flexgig", href: "/about" },
  { title: "Explore Jobs", href: "/" },
];

function NavHome() {
  const navigate = useNavigate()
  return (
    <nav className=" z-[99999] sticky top-0 bg-transparent backdrop-blur-sm py-5 flex justify-between items-center w-full px-[5%] mx-auto">
      <div className=" flex gap-9">
        <img
          src={imgref.flexgiglogo2}
          alt="Flexgig logo"
          className=" max-w-[130px]"
        />
        <ul className=" hidden ipad:flex gap-6">
          {NavLiArr.map((things, index) => (
            <li key={index}>
              <Link to={things.href}>{things.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" hidden tablet:flex items-center">
        <div className=" relative">
          <input
            type="text"
            className=" border border-[#B2ADAD] rounded-2xl h-12 max-w-[352px] pl-10"
            placeholder="Search"
          />
          <img
            src={imgref.search}
            alt="Search icon"
            className=" absolute top-[50%] translate-y-[-50%] pl-2"
          />
        </div>
        <div className=" hidden ipad:flex items-center text-lg font-medium">
          <button
            onClick={() => navigate("/signin")}
            className=" px-[20px] py-3 bg-transparent text-black"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/createaccount")}
            className=" px-[33.5px] py-3 bg-[#042268] text-white rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavHome;
