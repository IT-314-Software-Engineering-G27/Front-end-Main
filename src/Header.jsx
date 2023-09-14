import { Link } from "react-router-dom";


export default function Header() {
    return (<>
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/individuals"><h1>Individuals</h1></Link>
        <Link to="/organizations"><h1>Organizations</h1></Link>
        <Link to="/jobseekers"><h1>Job Seekers</h1></Link>
    </>);
}