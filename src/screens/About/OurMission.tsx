import hazard from '../../assets/hazard-lights.svg'
import handshake from '../../assets/handshake-outline.svg'
import diamond from '../../assets/diamond-stone.svg'

const OurMission = () =>(

<section className="w-80 h-[226.52px] m-auto mt-10 mb-20 tablet:h-[630px] tablet:w-[890px] relative">
    <div >
    <div className="px-[6.47px] py-[13.66px] tablet:px-[18px] tablet:py-[38px] left-0 top-0 absolute bg-white rounded-sm shadow border-t border-blue-900 justify-start items-start gap-[6.47px] inline-flex">
        <div className="w-[24.45px] h-[24.45px] tablet:w-[68px] tablet:h-[68px] relative">
            <img src={hazard}/>
        </div>
        <div className="flex-col justify-start items-start gap-[4.31px] tablet:gap-3 inline-flex">
            <h1 className="text-black text-[10.07px] font-medium tablet:text-[28px] font-['Poppins']">Our Mission</h1>
            <p className="w-[207.82px] tablet:w-[578px]  tablet:text-lg text-stone-950 text-[6.47px] font-normal font-['Poppins'] leading-[8.63px] tracking-tight">To connect freelancers and clients around the globe to get work done</p>
        </div>
   </div>
  <div className="px-[6.47px] py-[13.66px] tablet:gap-[18px] tablet:px-[18px] tablet:py-[38px] tablet:left-[94px] tablet:top-[226px] left-[33.80px] top-[81.26px] absolute bg-white rounded-sm shadow border-t border-blue-900 justify-start items-start gap-[6.47px] inline-flex">
        <div className="w-[24.45px] h-[24.45px] tablet:w-[68px] tablet:h-[68px] relative">
            <img src={handshake}/>
        </div>
        <div className="flex-col justify-start items-start gap-[4.31px] tablet:gap-3 inline-flex">
            <h1 className="text-black text-[10.07px] font-medium tablet:text-[28px] font-['Poppins']">Our Vission</h1>
            <p className="w-[207.82px] tablet:w-[578px]  tablet:text-lg text-stone-950 text-[6.47px] font-normal font-['Poppins'] leading-[8.63px] tracking-tight">To be the world's foremost freelance platform, connecting talent and businesses for shared success.</p>
        </div>
    </div>
   <div className="px-[6.47px] py-[13.66px] tablet:gap-[18px] tablet:px-[18px] tablet:py-[38px] tablet:left-[200px] tablet:top-[452px] left-[64.79px] top-[162.94px] absolute bg-white rounded-sm shadow border-t border-blue-900 justify-start items-start gap-[6.47px] inline-flex">
        <div className="w-[24.45px] h-[24.45px] tablet:w-[68px] tablet:h-[68px] relative">
            <img src={diamond}/>
        </div>
        <div className="flex-col justify-start items-start gap-[4.31px] tablet:gap-3 inline-flex">
            <div className="text-black text-[10.07px] font-medium tablet:text-[28px] font-['Poppins']">Our Proposition</div>
            <div className="w-[207.82px] tablet:w-[578px]  tablet:text-lg text-stone-950 text-[6.47px] font-normal font-['Poppins'] leading-[8.63px] tracking-tight">Empowering freelancers and businesses to collaborate effortlessly and drive productivity in the evolving world of work.</div>
        </div>
    </div>
</div>
</section>
)

export default OurMission