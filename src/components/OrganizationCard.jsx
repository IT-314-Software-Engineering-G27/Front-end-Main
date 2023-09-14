
export default function OrganizationCard({ organization }) {
    return (<>
        <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
            <h4>Name: {organization.legal_name}</h4>
            <h4>CEO: {organization.name_of_ceo}</h4>
            <h4>Email: {organization.email}</h4>
            <h4>Website: {organization.website}</h4>
        </div>
    </>);
}