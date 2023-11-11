import ImgUpload from "../../../components/form/ImgUpload";
import imgref from "../../../components/imgref";

const EditPortfolio = () => {
  return (
    <div className="border-2 border-[#CACFDC] py-3 px-5">
      <h3 className="font-semibold text-sm">
        Add Portfolio <span className="text-red-500">*</span>
      </h3>
      <p className="text-xs text-[#9E9E9E]">Add previously completed job</p>
     <div className="flex flex-col"> <label className="font-semibold text-sm pt-3 pb-1">
        Project Title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Enter your alma-mata here.."
        className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg"
      /></div>

          <div className="flex flex-col">
          <label className="font-semibold text-sm pt-3 pb-1">
        Skills<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Project Design, UX Design"
        className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg w-2/3"
      />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-sm pt-3 pb-1">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          cols={3}
          className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col py-3 gap-1">
        <label>
          Upload Portfolio <span className="text-red-500">*</span>
        </label>
        <ImgUpload />
          </div>
          <div className="flex gap-3">
              <img src={imgref.warning_outline} alt="warning" />
              <p className="text-base text-[#9E9E9E]">Make sure you have approval from your clients to display the work you've done for them publicly.</p>
          </div>
          <div className="flex gap-3 justify-end py-5">
        <button className="rounded-md border-2 flex-col px-12 py-2 border-[#042268] hover:bg-[#042268] hover:text-[#fff] duration-200">
          Cancel
        </button>
        <button className="rounded-md px-14 py-2 bg-[#042268] hover:bg-[#fff] hover:text-[#042268] hover:border-2 hover:border-[#042268] duration-200 text-[#fff]">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditPortfolio;
