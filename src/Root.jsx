
import './App.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from './Header';
import IndividualList from './pages/IndividualList';
import OrganizationList from './pages/OrganizationList';
import JobSeekerList from './pages/JobSeekerList';
function Root() {
    return (
        <>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<h1> Home </h1>} />
                    <Route path="/individuals" element={<IndividualList />} />
                    <Route path="/organizations" element={<OrganizationList />} />
                    <Route path="/jobseekers" element={<JobSeekerList />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default Root;
