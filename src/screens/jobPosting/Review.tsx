import ReviewCard from "./ReviewCard";
import Button from "../../components/shared/Button";

//This data  being rendered is temporary for now. When RTK is implemented, we will get the data from the global state and render accordingly !!!
const jobInfo = [
  {
    id: "job",
    title: "Job title",
    heading1: "I want to hire a freelancer",
    heading1Info: "UI/UX Design",
    heading2: "Type of project I’m hiring for",
    heading2Info: "Improvement of existing project",
  },
];

const descInfo = [
  {
    id: "description",
    title: "Description",
    description: "Job description",
    descriptionInfo:
      "Need a skilled UI/UX designer with expertise in Figma, prototyping and user research for the revamp of a mobile app. The ideal candidate will have experience working with clients to understand their needs and translate those needs into effective polish designs. He will also be able to work with developers to ensure that their designs are implemented correctly. If you have a passion for creating beautiful and user-friendly designs, I would like to hear from you!",
  },
];

const detailsInfo = [
  {
    id: "details",
    title: "Details",
    heading1: "Number of freelancers needed",
    heading1Info: "One freelancer",
    heading2: "Engagement timeline",
    heading2Info: "Short time(Less than a month)",
    heading3: "Starting time",
    heading3Info: "Immediately",
    heading4: "Time requirement",
    heading4Info: "Less than 20hrs/week",
  },
];

const expertiseInfo = [
  {
    id: "expertise",
    title: "Expertise",
    heading1: "Freelancer Skillset",
    skills: ["UI/UX Designer", "Mobile App", "Figma"],
  },
];

const visibilityInfo = [
  {
    id: "visibility",
    title: "Visibility",
    heading1: "Visibility location",
    heading1Info: "World-wide",
    heading2: "Who can see the job post",
    heading2Info: "Anyone",
  },
];
const budgetInfo = [
  {
    id: "budget",
    title: "Budget",
    heading1: "Preferred payment term",
    heading1Info: "Hourly payment",
    heading2: "Freelancer’s experience level",
    heading2Info: "Expert(more than $40/hr)",
  },
];

const Review = () => {
  return (
    <>
    <div className=" mx-2 md:mx-4   ms-2 md:ms-5">
      <div className="my-5 md:my-0">
        <h2 className="font-semibold text-[25px] text-[#292B30] pb-4">REVIEW</h2>

        <div className="flex flex-col gap-8">
          {jobInfo.map((job) => (
            <ReviewCard
              key={job.id}
              title={job.title}
              heading1={job.heading1}
              heading1Info={job.heading1Info}
              heading2={job.heading2}
              heading2Info={job.heading2Info}
            />
          ))}
          {descInfo.map((description) => (
            <ReviewCard
              key={description.id}
              title={description.title}
              description={description.description}
              descriptionInfo={description.descriptionInfo}
            />
          ))}

          {detailsInfo.map((info) => (
            <ReviewCard
              key={info.id}
              title={info.title}
              heading1={info.heading1}
              heading1Info={info.heading1Info}
              heading2={info.heading2}
              heading2Info={info.heading2Info}
              heading3={info.heading3}
              heading3Info={info.heading3Info}
              heading4={info.heading4}
              heading4Info={info.heading4Info}
            />
          ))}
          {expertiseInfo.map((info) => (
            <ReviewCard
              key={info.id}
              title={info.title}
              heading1={info.heading1}
              skills={info.skills}
            />
          ))}
          {visibilityInfo.map((visibility) => (
            <ReviewCard
              key={visibility.id}
              title={visibility.title}
              heading1={visibility.heading1}
              heading1Info={visibility.heading1Info}
              heading2={visibility.heading2}
              heading2Info={visibility.heading2Info}
            />
          ))}
          {budgetInfo.map((budget) => (
            <ReviewCard
              key={budget.id}
              title={budget.title}
              heading1={budget.heading1}
              heading1Info={budget.heading1Info}
              heading2={budget.heading2}
              heading2Info={budget.heading2Info}
            />
          ))}
        </div>
        <div className="flex justify-between w-full mt-20 pb-10  max-w-[760px]">
          <Button
            text="Save as draft"
            backgroundColor="bg-transparent"
            textColor="#042268"
            to=""
            
          />
          <Button text="Post job" to="/dashboard/jobs/review-success" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Review;
