import { useEffect, useMemo, useState } from "react";
import { asyncFetchIndividuals } from "../database/individual";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";

export default function CandidateCard() {
    return (<></>);
};