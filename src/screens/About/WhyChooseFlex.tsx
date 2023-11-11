
import {chooseFlex} from './AboutArr'

const WhyChooseFlex = ()=>{
    return(
   <div className="w-80 h-[700px] tablet:w-[1280px] tablet:h-[350px] relative m-auto">
    <h1 className="left-[88px] tablet:left-[462px] top-[29.59px] absolute text-black text-opacity-70 tablet:text-[35px] font-semibold font-['Poppins']">Why Choose FLEXGIG</h1>
    <div className="h-[634.55px] tablet:w-[1280px] tablet:m-auto tablet:top-[83px] top-[65.07px] absolute tablet:flex-row flex-col justify-start items-start gap-[18px] tablet:justify-between inline-flex ">
        {chooseFlex.map((item, index)=>{
                  return <div key={index} className="px-[16.16px] py-[19.39px] tablet:px-5 tablet:py-6 bg-neutral-400 bg-opacity-10 rounded-[12.93px] tablet:rounded-2xl flex-col justify-start items-center gap-[16.16px] tablet:gap-5 tablet:inline-flex flex">
                 <div className="h-[46.87px] tablet:h-[58px] tablet:gap-2.5 flex-col justify-start items-center gap-[8.08px] flex">
                     <img className="w-[46.87px] h-[46.87px] tablet:w-[58px] tablet:h-[58px]  relative" src={item.logo}/>
                 </div>
                 <div className="flex-col justify-start items-center tablet:gap-3 gap-[9.70px] flex">
                     <h2 className="text-center text-black tablet:text-2xl text-xl font-medium font-['Poppins']">{item.title}</h2>
                     <p className="w-[287.68px] tablet:w-[356px] text-center tablet:text-tablet text-stone-950 text-xs font-normal font-['Poppins'] tablet:leading-normal leading-tight tracking-tight">
                        {item.description}
                     </p>
                 </div>
             </div>
        })
        }
     
    </div>
</div> 

    )
}


export default WhyChooseFlex