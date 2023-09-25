
import './App.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from './Header';
import IndividualList from './pages/IndividualList';
import OrganizationList from './pages/OrganizationList';
import JobSeekerList from './pages/JobSeekerList';
import Login from './Login/Login';
import Register from './Login/Register';

function Root() {
    return (
        <>
            <HashRouter>
                {/* <Header /> */}
                <Routes>
                <Route exact path="/"  element={<Login/>}/>    
                    <Route exact path='/Register' element= { <Register/> }/>
                    <Route exact path="/Login" element ={<Login/>}/>
                    {/* <Route path="/" element={<h1> Home </h1>} /> */}
                    <Route path="/individuals" element={<IndividualList />} />
                    <Route path="/organizations" element={<OrganizationList />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default Root;
