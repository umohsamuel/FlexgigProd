import imgref from "../components/imgref";


function EmailSentPage(props) {
    return (
        <div className='flex flex-col  '>
            <img src={imgref.emailSentIcon} alt="" className='self-center my-[71px] w-[192.5px] h-[197.3px]' />
            <h1 className='text-center mb-[29px] text-[#010819] font-medium text-2xl md:text-[2.5rem]'>Email Sent</h1>
            <h1 className='text-center text-base md:text-2xl text-[rgba(19, 19, 19, 0.80) font-normal]'>Click on the link that is sent to {props.userEmail} to get verified</h1>
        </div>
    )
}

export default EmailSentPage
