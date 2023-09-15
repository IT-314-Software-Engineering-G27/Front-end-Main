import { useEffect, useState } from "react";
import { fetchOrganizations } from "../database/Organization";
import OrganizationCard from "../components/OrganizationCard";

export default function IndividualList() {

    const [organizations, setOrganizations] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (page === -1) return;
        setIsLoading(true);
        fetchOrganizations({ query, page }).then((data) => {
            setOrganizations(data);
            setIsLoading(false);
        });
    }, [query, page]);

    return (
        <>
            <h1>Organizations</h1>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            {isLoading && <h2> Loading...</h2>}
            <ul>
                {organizations.map((organization) => (
                    <li key={organization.legal_name}>
                        <OrganizationCard organization={organization} isLoading={isLoading} />
                    </li>
                ))}
            </ul>
            <button onClick={() => setPage((page) => (page + 1))} disabled={page === -1} > Next Page </button>
            <button onClick={() => setPage((page) => (page - 1))} disabled={page === 1} > Previous Page </button>
        </>);
}