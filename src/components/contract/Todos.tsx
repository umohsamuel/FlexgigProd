import imgref from "../imgref"


const Todos = () => {
  return (
    <>
        <div>
            <header className="border-b border-t border-[#B2ADAD] py-3 mt-8 flex justify-between items-center px-3 md:px-6">
                <h2 className="text-[#000000AB] font-semibold text-xl md:text-2xl">To-dos</h2>
                <button className="flex gap-2 border py-1 px-3 rounded-3xl justify-center items-center">
                    <img src={imgref.plus} alt="" className="h-[24px]"/>
                    <span className="text-sm md:text-lg font-medium text-[#042268]">New</span>
                </button>
            </header>
            <div className="flex flex-col justify-center items-center py-28">
                <img src={imgref.box} alt="" />
                <div className="flex justify-center py-2" >
                    <p className="text-lg text-[#9E9E9E] w-[70%] md:w-[50%] text-center leading-6">Add to-dos to your project with Jane Doe to organize, prioritize and track your collaboration</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todos