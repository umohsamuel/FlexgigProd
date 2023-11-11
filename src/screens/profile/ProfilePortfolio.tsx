import imgref from "../../components/imgref";

const ProfilePortfolio = () => {
  return  <div className="border-2 border-[#042268] bg-[#FAFBFFB2] flex flex-col font-poppins">
  <div className="flex justify-end py-4 pr-3">    <button className="flex border-2 border-[#042268] rounded-lg py-2 px-5 gap-2 cursor-pointer"><span><img src={imgref.material_symbols_add} alt="add" /></span>Add Portfolio</button> </div>
  <div className="flex flex-col items-center justify-center pt-20 pb-32 gap-3">
  <img src={imgref.image12} alt="box" />
  <h1 className="text-lg text-[#FF7A60] font-medium w-1/3 text-center">No portfolio yet</h1>
  <p className="text-[#9E9E9E] text-sm w-2/5">Upload porfolio project here for potential clients to view</p>
    </div>
    
</div>;
};

export default ProfilePortfolio;
