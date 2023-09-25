
import './App.css';
import { HashRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from './Header';
import IndividualList from './pages/IndividualList';
import OrganizationList from './pages/OrganizationList';
import Login from './Login/Login';
import Register from './Login/Register';
import RegisterIndividual from './pages/RegisterIndividual';
import RegisterOrganization from './pages/RegisterOrganization';

function Root() {
    return (
        <>
            <HashRouter>
                {/* <Header /> */}
                <Routes>
                    <Route exact path="/" element={<Navigate to={"/Login"} />} />
                    <Route path='/Register'>
                        <Route path="/Register/Individual" element={<RegisterIndividual />} />
                        <Route path="/Register/Organization" element={<RegisterOrganization />} />
                        <Route path="/Register" element={<Register />} />
                    </Route>
                    <Route exact path="/Login" element={<Login />} />
                    {/* <Route path="/" element={<h1> Home </h1>} /> */}
                    <Route path="/individuals" element={<IndividualList />} />
                    <Route path="/organizations" element={<OrganizationList />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default Root;
