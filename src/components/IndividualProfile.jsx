import { Paper, Box, Typography, Avatar } from "@mui/material";
import ConnectionButton from "./ConnectionButton";
const commonStyles = {
    bgcolor: 'C5B7FB',
    borderColor: '#2F1263',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
};

const IndividualProfileSection = ({ individual }) => {

    return (
        <Box padding={2}>
            <Paper elevation={3}>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Avatar src={individual.user.profile_image} sx={commonStyles} />
                    <ConnectionButton id={individual.user._id} />
                </Box>
                <Box>
                    <Typography style={{ color: '#2F1263' }} align="center" variant="h6" component="h3">
                        {individual.user.username}
                    </Typography>
                </Box>

                <Box padding={3} >
                    <Box sx={{ paddingBottom: 2 }}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1}>
                                Name
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} paddingBottom={1} variant="body" component="h3">
                                {individual.first_name} {individual.last_name}
                            </Typography>
                        </Paper>
                    </Box>

                    <Box paddingBottom={2}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                Contact
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                Mail @ {individual.user.email}
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                {individual.user.phone_number && `Phone ${individual.user.phone_number}`}
                            </Typography>
                        </Paper>
                    </Box>


                    <Box paddingBottom={2}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                Country
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                {individual.country}
                            </Typography>
                        </Paper>
                    </Box>

                    <Box paddingBottom={2}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                Education
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                {individual.degree && `${individual.degree}`}
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                {individual.college && `${individual.college} `}
                            </Typography>
                        </Paper>
                    </Box>

                    <Box paddingBottom={2}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                Skills
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                {individual.skills.join(", ")}
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default IndividualProfileSection;
