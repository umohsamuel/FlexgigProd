import Forgetpassword from "./screens/Forgetpassword.tsx";
import CreateAccount from "./components/CreateAccount.tsx";
// import SignUp from "./screens/SignUp.tsx";
import SignUp from "./screens/SignUp.tsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AuthLayout from "./components/authLayout.tsx";
import Verification from "./screens/Verification.tsx";
import Dashboard from "./components/Dashboard.tsx";
import DashboardLayout from "./components/DashboardLayout.tsx";
import Signin from "./screens/Signin.jsx";
// @ts-ignore
import Settings from "./components/Settings.jsx";
// @ts-ignore
import PaymentForm from "./components/settings/PaymentForm.jsx";
import Title from "./screens/jobPosting/Title.tsx";
import Description from "./screens/jobPosting/Description.tsx";
import JobPostinglayout from "./components/jobPosting/JobPostinglayout.tsx";
import Details from "./screens/jobPosting/Details.tsx";
import Expertise from "./screens/jobPosting/Expertise.tsx";
import Home from "./screens/Home/index.tsx";
import About from "./screens/About/Index.tsx"


import Profile from "./screens/profile/Profile.tsx";
import Sidenav from "./components/Sidenav.tsx";
import Topnav from "./components/Topnav.tsx";
import ProfileNav from "./screens/profile/ProfileNav.tsx";
import ProfileInformation from "./screens/profile/ProfileInformation.tsx";
import ProfileEducation from "./screens/profile/ProfileEducation.tsx";
import ProfileExperience from "./screens/profile/ProfileExperience.tsx";
import ProfilePortfolio from "./screens/profile/ProfilePortfolio.tsx";
import EditProfile from "./screens/profile/edit/EditProfile.tsx";
import Visibility from "./screens/jobPosting/Visibility.tsx";
import Budget from "./screens/jobPosting/Budget.tsx";
import Review from "./screens/jobPosting/Review.tsx";
import ReviewSuccess from "./screens/jobPosting/ReviewSuccess.tsx";
import ContractOverview from "./screens/contracts/ContOverview.tsx";
import ContractSubNavLayout from "./components/contract/ContractSubNavLayout.tsx";
import ContractTimesheet from "./screens/contracts/ContTimesheet.tsx";
import ContMessages from "./screens/contracts/ContMessages.tsx";
import ContFeedback from "./screens/contracts/ContFeedback.tsx";
import ContDetails from "./screens/contracts/ContDetails.tsx";
//@ts-ignore
import DashboardLayoutFreeL from "./screens/freelancer/DashboardLayoutFreeL.jsx";
//@ts-ignore
import Jobs from "./screens/jobPosting/freelancer/Jobs.jsx";
//@ts-ignore
import BestMatches from "./screens/jobPosting/freelancer/BestMatches.jsx"
//@ts-ignore
import Savedjob from "./screens/jobPosting/freelancer/Savedjob.jsx"
import Contracts from "./screens/contracts/Contracts.tsx";

import Protected from "./components/Protected.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Make this the first page that shows upon getting to the site  */}
          <Route path="/" element={<Home />} />
          <Route
            path="/createaccount"
            element={
              <AuthLayout>
                <CreateAccount />
              </AuthLayout>
            }
          />
            <Route path="/about" element={<About />} />
          <Route
            path="/signin"
            element={
              <AuthLayout>
                <Signin />
              </AuthLayout>
            }
          />

          <Route
            path="/signup"
            element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            }
          />
          <Route
            path="/verification"
            element={
              <AuthLayout>
                <Verification />
              </AuthLayout>
            }
          />
          <Route path="/dashboard/freelancer" element={<DashboardLayoutFreeL />}>
            {/* this is  for the freelancer routing */}
            <Route path="/dashboard/freelancer" element={<Jobs />}>
            <Route path="/dashboard/freelancer/jobs/bestmatches" element={<BestMatches />} />
            <Route path="/dashboard/freelancer/jobs/Savedjobs" element={<Savedjob />} />

            </Route>
          </Route>

          <Route
            path="/forgotpassword"
            element={
              <AuthLayout>
                <Forgetpassword />
              </AuthLayout>
            }
          />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
           
            <Route path="/dashboard/contracts/info" element={<ContractSubNavLayout/>}>
              <Route index element={<ContractOverview />} />
              <Route path="/dashboard/contracts/info/timesheet" element={<ContractTimesheet />} />
              <Route path="/dashboard/contracts/info/messages" element={<ContMessages />} />
              <Route path="/dashboard/contracts/info/feedback" element={<ContFeedback />} />
              <Route path="/dashboard/contracts/info/details" element={<ContDetails />} />
            </Route>
            <Route path="/dashboard/contracts/all" element={  
            <Contracts />
            }
            />
            <Route index element={<Protected><Dashboard /></Protected>} />

            <Route path="/dashboard/settings" element={<Settings />}>
              <Route path="/dashboard/settings/payment" element={<PaymentForm />} />

              {/* all sub element in the setting component goes in here */}
            </Route>

            {/* All elements that includes both the top, side bar and the sidebar for the jobs 
            should wrapped with JobPosting Layout and positioned here */}
            <Route
              path="/dashboard/jobs/title"
              element={
                <JobPostinglayout>
                  <Title />
                </JobPostinglayout>
              }
            />
            <Route
              path="/dashboard/jobs/description"
              element={
                <JobPostinglayout>
                  <Description />
                </JobPostinglayout>
              }
            />
            <Route
              path="/dashboard/jobs/details"
              element={
                <JobPostinglayout>
                  <Details />
                </JobPostinglayout>
              }
            />
            <Route
              path="/dashboard/jobs/expertise"
              element={
                <JobPostinglayout>
                  <Expertise />
                </JobPostinglayout>
              }
            />
            <Route
              path="/dashboard/jobs/visibility"
              element={
                <JobPostinglayout>
                  <Visibility />
                </JobPostinglayout>
              }
            />
            <Route
              path="/dashboard/jobs/budget"
              element={
                <JobPostinglayout>
                  <Budget />
                </JobPostinglayout>
              }
            />
            <Route
              path="/dashboard/jobs/review"
              element={
                <JobPostinglayout>
                  <Review />
                </JobPostinglayout>
              }
            />
            <Route
              path="/dashboard/jobs/review-success"
              element={
                <JobPostinglayout>
                  <ReviewSuccess/>
                </JobPostinglayout>
              }
            />
            {/* All elements that has the topnav and sidenav should be inside this dashboard layout */}
          </Route>
          <Route path="/forgetpassword"  element={
              <AuthLayout>
                <Forgetpassword />
              </AuthLayout>
            } />
            

          <Route
            path="/profile"
            element={
              <div className="bg-[#f6f9ff] h-screen w-screen overflow-hidden flex flex-row max-w-[1440px]">
                <Topnav text={"Settings"} />
                <div className="flex w-full">
                  <Sidenav />
                  <div className="pt-[90px] flex flex-col w-full h-full gap-[0.5rem] pl-8">
                    <h3 className="text-[24px]">Account Settings</h3>
                    <div className="flex gap-[0.5rem] h-4/5 bg-white flex-1 border-solid border-2 w-full">
                      <div className="w-1/5">
                        <ProfileNav />
                      </div>
                      <div className="max-h-full h-full w-full overflow-y-auto p-[2rem] flex flex-col gap-[1rem]">
                        <h3 className="text-[32px] font-[600]">Profile</h3>
                        <Profile />
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Route index element={<ProfileInformation />} />
            <Route path="/profile/education" element={<ProfileEducation />} />
            <Route path="/profile/edit_profile" element={<EditProfile />} />
            <Route
              path="/profile/work_experience"
              element={<ProfileExperience />}
            />
            <Route path="/profile/portfolio" element={<ProfilePortfolio />} />
          </Route>
          <Route path="/forgotpassword" element={<Forgetpassword />} />

          <Route
            path="/profile"
            element={
              <div className="bg-[#f6f9ff] h-screen w-screen overflow-hidden flex flex-row max-w-[1440px]">
                <Topnav text={"Settings"} />
                <div className="flex w-full">
                  <Sidenav />
                  <div className="pt-[90px] flex flex-col w-full h-full gap-[0.5rem] pl-8">
                    <h3 className="text-[24px]">Account Settings</h3>
                    <div className="flex gap-[0.5rem] h-4/5 bg-white flex-1 border-solid border-2 w-full">
                      <div className="w-1/5">
                        <ProfileNav />
                      </div>
                      <div className="max-h-full h-full w-full overflow-y-auto p-[2rem] flex flex-col gap-[1rem]">
                        <h3 className="text-[32px] font-[600]">Profile</h3>
                        <Profile />
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Route index element={<ProfileInformation />} />
            <Route path="/profile/education" element={<ProfileEducation />} />
            <Route path="/profile/edit_profile" element={<EditProfile />} />
            <Route
              path="/profile/work_experience"
              element={<ProfileExperience />}
            />
            <Route path="/profile/portfolio" element={<ProfilePortfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
