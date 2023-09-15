import { useEffect, useState } from "react";
import { fetchJobSeekers } from "../database/JobSeeker";
import JobSeekerCard from "../components/JobSeekerCard";

export default function JobSeekerList() {
    const [jobSeekers, setJobSeekers] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (page === -1) return;
        setIsLoading(true);
        fetchJobSeekers({ query, page }).then((data) => {
            setJobSeekers(data);
            setIsLoading(false);
        });
    }, [query, page]);

    return (
        <>
            <h1>JobSeekers</h1>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            {isLoading && <h2> Loading...</h2>}
                <ul>
                    {jobSeekers.map((jobSeeker) => (
                        <li key={jobSeeker.username}>
                            <JobSeekerCard jobSeeker={jobSeeker} isLoading={isLoading} />
                        </li>
                    ))}
                </ul>
            <button onClick={() => setPage((page) => (page + 1))} disabled={page === -1} > Next Page </button>
            <button onClick={() => setPage((page) => (page - 1))} disabled={page === 1} > Previous Page </button>
        </>);
}