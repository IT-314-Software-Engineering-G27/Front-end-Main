
export default function IndividualCard({ individual }) {
    return (<>
        <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
            <h4>First Name: {individual.first_name}</h4>
            <h4>Last Name: {individual.last_name}</h4>
            <h4>Email: {individual.email}</h4>
            <h4>Country: {individual.country}</h4>
        </div>
    </>);
}