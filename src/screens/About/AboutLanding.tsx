import aboutBg from "../../../src/assets/about-bg.svg"

const AboutLanding = () =>{
        return(
        <section className="w-full text-white bg-cover  mt-10 bg-no-repeat rounded gap-[4.54px]" style={{ backgroundImage: `url(${aboutBg})`}}>
           
                <div className=" left-[16.51px] top-[16.07px] w-[700px]absolute m-[6%] flex-col justify-center items-start inline-flex">
                    <h1 className="text-white text-10 mb-6 sm:text-20 font-poppins font-medium">About FLEXGIG</h1>
                    <div className="flex-col justify-center items-start gap-2  sm:gap-4 flex">

                    <p className="w-[304px] sm:w-[890px] text-white sm:text-3xl text-left font-semibold font-['Poppins']">A platform that connects skilled freelancers with clients seeking top-notch talent</p>

                    <p className="w-[287px] sm:w-[790px] sm:text-xl mb-6 text-white sm:font-medium sm:leading-[30px] text-[9px] font-normal font-['Poppins']">Our mission is to revolutionize the world of freelancing by providing a platform that connects skilled freelancers with clients seeking top-notch talent.
                      We're committed to creating a community that fosters collaboration, transparency, and success for all.</p>
                   </div>
                </div>
    

        </section>

    )
}
export default AboutLanding