import chevron from "../../assets/Chevron.svg";
import search from "../../assets/search.svg";
import menu from "../../assets/search.svg";


const AllContractslayout = () => {
  return (
    <div>
          <main className="bg-[#EBF1FF] mt-5 flex flex-col pt-16 pb-5 md:py-20 gap-5">
        <header className="flex flex-col lg:flex-row gap-3 pl-2">
          <img className="w-5" src={chevron} alt="logo" />
          <p className="text-lg font-medium text-[#020E2A]">Active Contracts</p>
          <div className="relative">
              <input
                type="input"
                className="border border-[#E7E7E7] bg-[#F8FAFC] rounded-[48px] w-1/4 py-1 pl-7 placeholder:text-[14px] placeholder:font-medium"
                name="search"
                placeholder="Search contracts"
              />
              <img
                className="absolute right-5 bottom-1.5"
                src={search}
                alt="logo"
              />
            </div>
            <div>
                <p className="font-medium text-[#020E2A]">Earnings available now: </p>
                <span className="text-[#042268] font-medium text-[18px]">$0.00</span>
                <img src={menu} alt="menu" />
            </div>
        </header>
        </main>
    </div>
  )
}

export default AllContractslayout