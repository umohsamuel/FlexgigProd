import chess from '../../assets/chess.svg'


const JoinOurCommunity = () =>{
    return(
 <div className="w-80 h-[480.50px] bg-slate-50 m-auto tablet:w-[1280px] tablet:h-[484.63px] tablet:justify-between  tablet:inline-flex relative ">
    <div className="h-[187.11px] bg-slate-50 flex-col justify-start items-start tablet:gap-2.5 gap-[4.89px] tablet:inline-flex flex">
       
        <div className="h-[148.34px] tablet:h-[284px] tablet:ml-[4%] left-0 top-[17.19px] tablet:top-[35.18px] absolute flex-col justify-start items-start gap-[20.52px] tablet:gap-[42px] flex">
            <div className="h-[93.82px] tablet:h-48  flex-col justify-start items-start gap-[7.82px] tablet:gap-4 flex">
                <h1 className="w-80 tablet:w-[655px] text-black text-opacity-70 text-base tablet:text-[32px]  font-medium font-['Poppins']">Join Our Community</h1>
                <p className="w-[313.65px] tablet:w-[642px] text-black text-opacity-70 text-[8.79px] tablet:text-lg font-medium font-['Poppins'] leading-none tablet:leading-loose">
                    FLEXGIG is more than just a platform; it's a community of freelancers and clients who share a passion for quality work. We invite you to join our growing community of professionals and experience the future of freelancing.
                </p>
            </div>
            <button className="w-[115px] h-[34px] tablet:w-[236px] tablet:h-[50px] bg-blue-950 
            rounded text-white hover:text-[#042268] hover:border-[#042268] hover:bg-white hover:border transition-all duration-300 ease-in-out" onClick={()=>{
                // redirecting upon a click
                console.log('about getting started...')
            }}>Get Started</button>
        </div>
    </div>

    <img className="w-80 h-[281.66px] tablet:w-[550.60px] tablet:h-[484.63px] tablet:rounded-[10.15px] rounded-md" src={chess} />
</div>
    
    )    
}
export default JoinOurCommunity



