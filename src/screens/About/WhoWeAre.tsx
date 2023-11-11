import vector from "../../assets/Vector.svg"


const WhoWeAre = () =>{
    return(
        <section className="w-80 h-[370px] m-auto bg-slate-50 shadow tablet:w-full tablet:flex">

            <div className="w-[319px] h-[77px] tablet:w-[791px] tablet:h-[191px] tablet:p-12 tablet:gap-4 flex-col justify-start items-start inline-flex">
                <h1 className="text-black text-opacity-70 tablet:text-2xl text-tablet font-semibold tablet:leading-[53px] tablet:tracking-tight font-['Poppins']">Who We Are</h1>
                <p className="w-[319px] tablet:w-[791px] text-zinc-800 text-[8px] tablet:text-base font-normal font-['Poppins'] tablet:leading-[30px] tablet:tracking-tight leading-3">
                  FLEXGIG is the brainchild of a team of passionate individuals who understand the challenges and opportunities in the freelance industry. 
                  We've combined our expertise in technology, design, and business to create a platform that empowers both clients and freelancers.</p>
            </div>
            <img className="tablet:w-[471.48px] tablet:transform tablet:rotate-0.87" src={vector}/>
        </section>
    )
}
export default WhoWeAre