
export default function IndividualCard({ individual, isLoading }) {
    return (<>
        <div style={{ border: `1px solid ${isLoading ? 'grey' : 'black'}`, color: `${isLoading ? 'grey' : 'black'}`, padding: "1rem", margin: "1rem" }}>
            <h4>First Name: {individual.first_name}</h4>
            <h4>Last Name: {individual.last_name}</h4>
            <h4>Email: {individual.email}</h4>
            <h4>Country: {individual.country}</h4>
        </div>
    </>);
}