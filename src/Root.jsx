
import { HashRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from './Header';
import IndividualList from './pages/IndividualList';
import OrganizationList from './pages/OrganizationList';
import Login from './Login/Login';
import Register from './Login/Register';
import RegisterIndividual from './pages/RegisterIndividual';
import RegisterOrganization from './pages/RegisterOrganization';
import Test from './pages/Test';
import ThemeContextProvider from './context/theme';

function Root() {
    return (
        <>
            <ThemeContextProvider>
                <HashRouter>
                    <Routes>
                        <Route exact path="/" element={<Navigate to={"/login"} />} />
                        <Route path='/register'>
                            <Route path="/register/individual" element={<RegisterIndividual />} />
                            <Route path="/register/organization" element={<RegisterOrganization />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                        <Route exact path="/login" element={<Login />} />
                        <Route path="/individuals" element={<IndividualList />} />
                        <Route path="/organizations" element={<OrganizationList />} />
                        <Route path="/test" element={<Test />} />
                    </Routes>
                </HashRouter>
            </ThemeContextProvider>
        </>
    );
}

export default Root;
