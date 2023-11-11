import imgref from "../../components/imgref";
interface CardProps {
  title?: string;
  heading1?: string;
  heading1Info?: string;
  heading2?: string;
  heading2Info?: string;
  heading3?: string;
  heading3Info?: string;
  heading4?: string;
  heading4Info?: string;
  skills?: string[];
  description?: string;
  descriptionInfo?: string;
}

const ReviewCard: React.FC<CardProps> = ({
  title,
  heading1,
  heading1Info,
  heading2,
  heading2Info,
  heading3,
  heading3Info,
  heading4,
  heading4Info,
  skills,
  description,
  descriptionInfo,
}) => {
  return (
    <div className=" border-2  border-[#CACFDC] rounded-lg  py-6  px-3 md:px-8  w-full max-w-[700px] bg-[#fbfcff] ">
      <div className="flex justify-between mb-6 md:mb-2">
        {" "}
        <h1 className="text-xl font-medium text-[#292B30]" >{title}</h1>
        <button className="flex justify-center items-center bg-white px-3 py-1 rounded border">
          <span className="text-[12px] bg-white text-[#05297D]"> Edit</span>{" "}
          <img src={imgref.edit} alt="" />
        </button>
      </div>
      <div className="flex  flex-col md:flex-row  gap-2  justify-between  pe-0 md:pe-20">
        <div className="">
          <h2 className="text-sm  text-[#9E9E9E]">{heading1}</h2>
          <p>{heading1Info}</p>
          <div className="mt-2">
            <h2 className="text-sm  text-[#9E9E9E]">{heading4}</h2>
            <p className="text-medium text-[#000000AB]">{heading4Info}</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-sm  text-[#9E9E9E]">{heading2}</h2>
          <p>{heading2Info}</p>
          <div className="mt-2">
            <h2 className="text-sm  text-[#9E9E9E]">{heading3}</h2>
            <p>{heading3Info}</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-wrap gap-2 pb-2">
          {skills?.map((skill, index) => (
            <div
              key={index}
              className="rounded-full py-2 px-3 bg-gray-200 text-gray-700 text-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[-20px] md:mt-0">
        <p className="text-sm  text-[#9E9E9E]"> {description}</p>
        <p className="font-medium text-[#000000AB]">{descriptionInfo}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
