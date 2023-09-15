
export default function JobSeekerCard({ jobSeeker, isLoading }) {
    return (<>
        <div style={{ border: `1px solid ${isLoading ? 'grey' : 'black'}`, color: `${isLoading ? 'grey' : 'black'}`, padding: "1rem", margin: "1rem" }}>
            <h4>First Name: {jobSeeker.first_name}</h4>
            <h4>Last Name: {jobSeeker.last_name}</h4>
            <h4>Email: {jobSeeker.email}</h4>
            <h4>Skills: {jobSeeker.skills.join(' ')}</h4>
        </div>
    </>);
}