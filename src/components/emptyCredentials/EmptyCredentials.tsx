import imgref from "../imgref";

const EmptyCredentials = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center h-[400px] w-full">
      <img src={imgref.notFound} alt="" />
      <p className="text-[#ff7a60]">{text}</p>
    </div>
  );
};

export default EmptyCredentials;
