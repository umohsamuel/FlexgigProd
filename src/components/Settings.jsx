import Payment from './settings/Payment';
import imgref from './imgref';



function Funding() {
    return (
        <div className='relative px-5 mt-12'>
            <div className='flex items-baseline gap-[14px] '>
                <img src={imgref.returnIcon} alt="" className='bg-[#042268] rounded-full' />
                <h1 className="mt-10 font-medium text-2xl text-[#020E2A]">Account settings</h1>
            </div>
            <Payment />
            




            {/* <Sidenav/> */}

        </div>
    )
}

export default Funding
