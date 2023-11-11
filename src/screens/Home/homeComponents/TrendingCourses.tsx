import { TrendingCoursesArr } from './HomeArr';

function TrendingCourses() {
  return (
    <section className=" mt-[10vh] bg-[#2F4D93] px-[5%] py-[52px] flex items-center justify-center flex-col w-full min-h-[50vh]">
      <div>
        <h1 className=" font-semibold text-xl tablet:text-4xl text-white">
          Trending Courses
        </h1>
        <div className=" mt-8 grid gap-8 place-items-center grid-cols-1 tablet:grid-cols-2 ipad:grid-cols-3">
          {TrendingCoursesArr.map((thing, index) => (
            <div key={index} className="max-w-[377.73px]">
              <img
                src={thing.courseImg}
                alt={thing.alt}
                className=" min-w-full object-cover aspect-video"
              />
              <div className=" px-6 py-4 bg-white flex items-center justify-between">
                <div>
                  <h2 className=" font-bold text-[17px] tablet:text-xl">
                    {thing.title}
                  </h2>
                  <p className=" font-medium text-[17px] tablet:text-xl">
                    {thing.timeframe}
                  </p>
                </div>
                <span className=" font-bold text-xl tablet:text-2xl">
                  {thing.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingCourses