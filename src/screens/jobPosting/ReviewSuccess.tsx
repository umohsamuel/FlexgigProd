import imgref from "../../components/imgref"
import Button from "../../components/shared/Button"

const ReviewSuccess = () => {
  return (
    <>
    <div className="w-full flex justify-center items-center flex-col border py-20">
        <img src={imgref.success} alt="Success icon"  className="h-[200px]"/>
        <div>
            <h2 className="font-medium text-[#292B30] text-xl text-center py-4">Your job is successfully posted</h2>
            <div className="text-[#9E9E9E] text-center ">
            <p>Your job details has been posted and
             <span className="hidden md:block">can be seen by the specified freelancers.</span> 
             <span className="inline md:hidden">can be seen by the specified freelancers.</span> 
             </p>
            {/* <p className="block md:hidden text-red-500">can be seen by the specified freelancers.</p> */}
            </div>
            
        </div>
        <div className="flex justify-between w-full mt-16  max-w-[760px]">
          <Button
            text="Go to Dashboard"
            backgroundColor="bg-transparent"
            textColor="#042268"
            to="/dashboard"
          />
          <Button text="View status" to="/dashboard" />
          {/* This path will be updated when the right component is available */}
        </div>
    </div>
    </>
  )
}

export default ReviewSuccess