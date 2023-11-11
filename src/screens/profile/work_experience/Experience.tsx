import { useState, memo } from "react";
import imgref from "../../../components/imgref";

const exps = [
  {
    image: imgref.profile,
    position: "Product Engineer",
    company: "ZedCrest Group",
    time: "Aug 23, 2023 - present",
    location: "Lagos, Mainland",
    type: "full time",
    responsibility:
      "In my role as a Product Designer at Zedcrest, I specialize in the development and improvement of design systems and 3D printer firmware. My main focus is to create a user-centric experience and visually appealing aesthetics for our products, ensuring a seamless and delightful user journey. Key Responsibilities:- Collaborate with cross-functional teams, including engineers ",
  },
  {
    image: imgref.client,
    position: "Product Engineer",
    company: "ZedCrest Group",
    time: "Aug 23, 2023 - present",
    location: "Lagos, Mainland",
    type: "full time",
    responsibility:
      "In my role as a Product Designer at Zedcrest, I specialize in the development and improvement of design systems and 3D printer firmware. My main focus is to create a user-centric experience and visually appealing aesthetics for our products, ensuring a seamless and delightful user journey. Key Responsibilities:- Collaborate with cross-functional teams, including engineers ",
  },
];
const currentUser = null;

const DeleteExperience = ({
  setShow,
}: {
  setShow: (SetStateAction: boolean) => boolean;
}) => (
  <div className="flex items-center justify-center bg-zinc-800/50 w-full h-full fixed top-0 left-0">
    <div className="bg-[#fff] p-6 rounded-md flex flex-col gap-[1rem] items-center">
      <h5>Are you sure you want to delete this work experience?</h5>
      <div className="flex gap-[1rem]">
        <button className="border-2 border-solid border-[#05297d] rounded-md text-[#05297d] px-2">
          Confirm
        </button>
        <button
          onClick={() => setShow(setShow(false))}
          className="border-2 border-solid border-[#d43f3f] rounded-md text-[#d43f3f] px-2"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const [deleteShow, setDeleteShow] = useState(false);

  const [toggle, setToggle] = useState(() => {
    if (!currentUser && exps && exps.length > 0) {
      return Array(exps.length).fill(false);
    } else if (currentUser && exps && exps.length > 0) {
      return Array(exps.length).fill(false);
    }
    return [];
  });

  const toggleMore = (index: number) => {
    setToggle((previousState) => {
      const newState = [...previousState];
      if (newState[index] === undefined) {
        newState[index] = false;
      }
      newState[index] = true;

      return newState;
    });
  };

  const ReadMore = memo(({ index }: { index: number }) => {
    return (
      <p
        className="font-[500] cursor-pointer"
        onClick={() => toggleMore(index)}
      >
        Read more...{" "}
      </p>
    );
  });
  return (
    <div className="flex flex-col gap-[1rem] p-6">
      {deleteShow && <DeleteExperience setShow={setDeleteShow} />}
      <button className="w-fit border-solid border-2 self-end px-4 py-2">
        ADD WORK EXPERIENCE
      </button>
      {exps.map((work, index) => (
        <section
          className="flex gap-[1rem] justify-between py-4 border-b-2 border-solid"
          key={index}
        >
          <div className="w-1/12">
            <img src={work.image} className="w-12 h-12" alt="" />
          </div>
          <div className="w-10/12 flex flex-col gap-[1rem]">
            <div className="flex flex-col">
              <h4 className="text-[16px] font-[500]">{work.position}</h4>
              <p className="text-[14px] text-[#909090] ">
                {work.company} - {work.type}
              </p>
              <p className="text-[14px] text-[#909090] ">{work.time}</p>
              <p className="text-[14px] text-[#909090] ">{work.location}</p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[16px] font-[500]">Responsibilities</h3>
              <p className="text-[14px]">
                {work.responsibility.length >= 100 && !toggle[index] ? (
                  <>
                    {work.responsibility.slice(0, 100)}{" "}
                    <ReadMore index={index} />
                  </>
                ) : (
                  work.responsibility
                )}
              </p>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => setDeleteShow(true)}
              className="border-2 border-solid border-[#d43f3f] rounded-md text-[#d43f3f] px-2"
            >
              x
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Experience;
