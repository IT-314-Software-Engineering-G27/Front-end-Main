import React from "react";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Skeleton, Typography, } from "@mui/material";
import { Link } from "react-router-dom";
import { LocationOnOutlined as LocationOnOutlinedIcon, MonetizationOn as MonetizationOnIcon, Event as EventIcon, } from "@mui/icons-material";
import { API_URL } from "../config";
import { useQuery } from "@tanstack/react-query";

export default function JobCard({ id }) {
  const { data: job, } = useQuery({
    queryKey: ["job", { id }],
    queryFn: () => fetchJobProfile({ id }),
  });

  return (
    <>
      <Card sx={{ border: `1px solid black`, height: "100%", width: "100%", overflow: "clip", display: "flex", backgroundColor: 'white', borderRadius: "10px", flexDirection: "column", justifyContent: "space-between", boxShadow: " 7px 7px rgba(0, 0, 0, 0.15)", padding: "1rem", }}>
        {(!job) ?
          <Skeleton variant="rectangular" animation="pulse" height={250} /> :
          <>
            <OrganizationHeader id={job.organization} subheader={(new Date(job.posted)).toDateString()} />
            <CardHeader title={<>
              <Typography sx={{ fontSize: "1.3rem", mb: 1, pt: 0, fontWeight: 550 }}>{job.title}</Typography>
            </>} subheader={<>
              <EventIcon sx={{ fontSize: "1.3rem", verticalAlign: "middle", marginRight: "0.5rem", }} />
            </>
            } />
            <CardHeader sx={{ color: "black", py: 0, }} subheader={<>   <LocationOnOutlinedIcon sx={{ fontSize: "1.3rem", verticalAlign: "middle", marginRight: "0.5rem", }} />   {job.posting_location} </>} />   <CardContent>
              <Typography variant="h6" gutterBottom >
                <MonetizationOnIcon sx={{ fontSize: 20, verticalAlign: "middle", marginRight: "0.5rem", }} />   {Number(job.salary / 1000).toFixed(1)}k $ per month </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ pb: 0, pt: 2, display: "flex", justifyContent: "space-between", }}>
              <Button variant="contained" color="primary" size="large" fullWidth component={Link} to={`/jobs/${id}`} sx={{ width: '100%', transition: 'background-color 0.3s, transform 0.3s', boxShadow: " 5px 5px rgba(163, 23, 205, 0.1)", '&:hover': { backgroundColor: '#1976D2', transform: 'scale(1.05)', }, }} >  View Details </Button>
            </CardActions>
          </>}
      </Card>
    </>
  );
}

function OrganizationHeader({ id, subheader }) {
  const { data: organization } = useQuery({
    queryKey: ["organization", { id }],
    queryFn: () => fetchOrganization({ id }),
  });

  return (<>
    {(!organization) ? <Skeleton variant="rectangular" animation="pulse" height={50} /> :
      <CardHeader avatar={<Avatar src={`${organization.user.profile_image}`} sx={{ width: 55, height: 55 }} variant="rounded" />} titleTypographyProps={{ variant: "h7" }} title={`${organization.company_name}`} subheader={`${subheader}`} sx={{ color: "black" }} />
    }
  </>);
}

async function fetchJobProfile({ id }) {
  const response = await fetch(`${API_URL}/job-profiles/${id}/basic`);
  const data = await response.json();
  return data.payload.jobProfile;
}

async function fetchOrganization({ id }) {
  const response = await fetch(`${API_URL}/organizations/${id}/basic`);
  const data = await response.json();
  return data.payload.organization;
}