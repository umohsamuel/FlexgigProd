import imgref from "../imgref"

const ContractorInfo = () => {
  return (
    <>
        <div className=" p-4">
            <div className="flex justify-between gap-5">
                <div className="w-full flex pb-4">
                    <h2 className="text-[#05297D] text-lg font-semibold">UI/UX Designer for company landing page design</h2>
                </div>
                
                <img src={imgref.dots} alt="3 dots" className="h-[30px] md:h-[40px]"/>
            </div>
            <div className="flex justify-between items-center my-2">
                <div className="block md:flex  items-center flex-1 gap-16 ">
                    <div className="flex items-center gap-3">
                        <img src={imgref.profile} alt="Profile" className="h-[36px]"/>
                         <p className="text-[#292B30] font-semibold text-lg">Jane Doe</p>
                    </div>
                    <div className="flex flex-1  items-center gap-1">
                        <img src={imgref.location} alt="Location" className="h-[16px]"/>
                        <p>Riyadh- 3:47pm AST (local time)</p>
                    </div>
                </div>
                <p className="text-sm text-[#042268] ">View profile</p>
            </div>

        </div>
    </>
  )
}

export default ContractorInfo