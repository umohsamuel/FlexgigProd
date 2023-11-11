import ImgUpload from "../../../components/form/ImgUpload";

const EditEducation = () => {
    return ( 
        <div className="border-2 border-[#CACFDC] py-3 px-5">
            <div className="flex flex-col font-poppins">
                <h3 className="font-semibold text-sm">Add Education <span className="text-red-500">*</span></h3>
                <p className="text-xs text-[#9E9E9E]">Add your educational background</p>
                <label className="font-semibold text-sm pt-3 pb-1">School <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter your alma-mata here.." className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg"/>
                <label className="font-semibold text-sm pt-3 pb-1">Degree <span className="text-red-500">*</span></label>
                <input type="text" placeholder="your qualification here" className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg" />
            </div>
            <div>
                <div className="flex flex-wrap">
                    <label className="font-semibold text-sm pt-3 pb-1">Field of study <span className="text-red-500">*</span></label>
                   <div className="flex gap-5 w-full py-2"> <input type="text" placeholder="Software Engineering" className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg w-full"/>
                    <input type="text" placeholder="Country" className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg w-full"/></div>
                    <div className="flex gap-3"><input type="checkbox" />
                        <p>I currently work here.</p></div>
                    
                </div>
                <div className="flex flex-col py-3">
                    <label className="font-semibold text-sm pt-3 pb-1">Grade <span className="text-red-500">*</span></label>
                    <input type="text" className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg w-2/3"/></div>
            </div>
            <div className="flex flex-col">
                <label className="font-semibold text-sm pt-3 pb-1">Additional Information <span className="text-red-500">*</span></label>
                <textarea cols={3} className="border-2 border-[#CACFDC] py-2 px-5 rounded-lg w-full"/>
            </div>
            <div className="flex flex-col py-3 gap-1">
                <label>Upload certificate <span className="text-red-500">*</span></label>
                <ImgUpload />
            </div>
            <div className="flex gap-3 justify-end">
        <button className="rounded-md border-2 flex-col px-12 py-2 border-[#042268] hover:bg-[#042268] hover:text-[#fff] duration-200">
          Cancel
        </button>
        <button className="rounded-md px-14 py-2 bg-[#042268] hover:bg-[#fff] hover:text-[#042268] hover:border-2 hover:border-[#042268] duration-200 text-[#fff]">
          Save
        </button>
      </div>
        </div>
     );
}
 
export default EditEducation;