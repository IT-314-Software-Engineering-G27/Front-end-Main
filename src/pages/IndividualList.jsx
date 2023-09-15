import { useEffect, useState } from "react";
import { fetchIndividuals } from "../database/Individual";
import IndividualCard from "../components/IndividualCard";

export default function IndividualList() {
    const [individuals, setIndividuals] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (page === -1) return;
        setIsLoading(true);
        fetchIndividuals({ query, page }).then((data) => {
            setIndividuals(data);
            setIsLoading(false);
        });
    }, [query, page]);

    return (
        <>
            <h1>Individuals</h1>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            {isLoading && <h2> Loading...</h2>}
            <ul>
                {individuals.map((individual) => (
                    <li key={individual.username}>
                        <IndividualCard individual={individual} isLoading={isLoading} />
                    </li>
                ))}
            </ul>
            <button onClick={() => setPage((page) => (page + 1))} disabled={page === -1} > Next Page </button>
            <button onClick={() => setPage((page) => (page - 1))} disabled={page === 1} > Previous Page </button>
        </>);
}