
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import IndividualList from './pages/IndividualList';
import OrganizationList from './pages/OrganizationList';
import Login from './Login/Login';
import Register from './pages/Register';
import RegisterIndividual from './pages/RegisterIndividual';
import RegisterOrganization from './pages/RegisterOrganization';
import ThemeContextProvider from './contexts/theme';
import { CssBaseline } from "@mui/material";
import QueryContextProvider from "./contexts/query";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import IndividualDetails from "./pages/IndividualDetails";
import OrganizationDetails from "./pages/OrganizationDetails";
import ContactList from "./pages/ContactList";
import EventRegistrationForm from "./components/EventRegistrationForm";
import ContactDetails from "./pages/ContactDetails";
import CandidateList from "./pages/CandidateList";
import MakePost from "./pages/MakePost";
import CompanyJobRegistration from "./pages/CompanyJobRegistration";
import ContactUs from "./pages/ContactUs";
import SessionProvider from "./contexts/session";
import StartupList from "./pages/StartupList";
import StartupDetails from "./pages/StartupDetails";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";
import PasswordResetEmail from "./pages/PasswordResetEmail";
import PasswordResetOTP from "./pages/PasswordResetOTP";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";
import LandingPage from "./pages/LandingPage";

function Root() {
    return (
        <>
            <QueryContextProvider>
                <ThemeContextProvider>
                    <SessionProvider>
                        <CssBaseline />
                        <BrowserRouter>
                            <SideBar />
                            <Routes>
                                <Route exact path="/" element={<Navigate to={"/home"} />} />
                                <Route path='/register'>
                                    <Route path="/register/individual" element={<RegisterIndividual />} />
                                    <Route path="/register/organization" element={<RegisterOrganization />} />
                                    {/* <Route path="/register/jobseeker" element={<RegAsJobSeek />} />  */}
                                    <Route path="/register" element={<Register />} />
                                </Route>
                                <Route exact path="/login" element={<Login />} />
                                <Route exact path="/home" element={<LandingPage />} />
                                <Route path="/contact-us" element={<ContactUs />} />
                                <Route path="/posts" element={<PostList />}></Route>
                                <Route path="/makePost" element={<MakePost />}></Route>
                                <Route path="/posts/:postId" element={<PostDetails />}></Route>
                                <Route path="/jobs" element={<JobList />}></Route>
                                <Route path="/jobs/:jobId">
                                    <Route path="/jobs/:jobId" element={<JobDetails />}></Route>
                                    <Route path="/jobs/:jobId/candidates" element={<CandidateList />} />
                                </Route>
                                <Route path="/events">
                                    <Route path="/events" element={<EventList />}></Route>
                                    <Route path="/events/:eventId" element={<EventDetails />} />
                                    <Route path="/events/:eventId/register" element={<EventRegistrationForm />} />
                                    <Route path="/events/:eventId/startups" element={<StartupList />} />
                                </Route>
                                <Route path="/startups/:startupId" element={<StartupDetails />} />
                                <Route path="/individuals" element={<IndividualList />} />
                                <Route path="/individuals/:individualId" element={<IndividualDetails />} />
                                <Route path="/organizations" element={<OrganizationList />} />
                                <Route path="/organizations/:organizationId" element={<OrganizationDetails />} />
                                <Route path="/organizations/JobRegistration" element={<CompanyJobRegistration />} />
                                <Route path="/contacts" element={<ContactList />}>
                                    <Route path="/contacts/:contactId" element={<ContactDetails />} />
                                </Route>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/profile/edit" element={<EditProfile />} />
                                <Route path="/password-reset" element={<PasswordResetEmail />} />
                                <Route path="/password-reset/:resetId" element={<PasswordResetOTP />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </BrowserRouter>
                    </SessionProvider>
                </ThemeContextProvider>
            </QueryContextProvider>
        </>
    );
}

export default Root;
