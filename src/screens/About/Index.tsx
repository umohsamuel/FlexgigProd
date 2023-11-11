import AboutLanding from "./AboutLanding";
import WhoWeAre from "./WhoWeAre";
import WhyChooseFlex from "./WhyChooseFlex";
import JoinOurCommunity from "./JoinOurCommunity";
import OurMission from "./OurMission";
import HomeLayout from "../Home/homeComponents/HomeLayout";




const Index = () =>{
    return(
    <HomeLayout>
        <AboutLanding/>
        <WhoWeAre/> 
        <WhyChooseFlex/>
        <JoinOurCommunity/>
         <OurMission/> 
    </HomeLayout>
        
    )
}

export default Index;