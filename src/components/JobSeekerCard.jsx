
export default function JobSeekerCard({ jobSeeker: job_seeker }) {
    return (<>
        <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
            <h4>First Name: {job_seeker.first_name}</h4>
            <h4>Last Name: {job_seeker.last_name}</h4>
            <h4>Email: {job_seeker.email}</h4>
            <h4>Skills: {job_seeker.skills.join(' ')}</h4>
        </div>
    </>);
}