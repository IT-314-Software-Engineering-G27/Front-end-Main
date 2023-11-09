import { Paper, Box, Typography,  Avatar } from "@mui/material";

const commonStyles = {
    bgcolor: 'C5B7FB',
    borderColor: '#2F1263',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
};

const TourCard2 = ({ organization }) => {


    return (
        <Box marginY={2}>
            <Paper elevation={3}>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Avatar src={organization.user.profile_image} sx={commonStyles} />
                </Box>
                <Box>
                    <Typography style={{ color: '#2F1263' }} align="center" variant="h7" component="h3">
                        {organization.user.username}
                    </Typography>
                </Box>
                <Box paddingX={3} >
                    <Box sx={{ paddingBottom: 2 }}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} paddingBottom={1} variant="body" component="h3">
                                {organization.company_name}
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} paddingBottom={1} variant="body" component="h3">
                                Since {organization.year_of_establishment}
                            </Typography>
                        </Paper>
                    </Box>

                    <Box sx={{ paddingBottom: 2 }}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                Contact
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                Mail @ {organization.user.email}
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                {organization.user.phone_number && `Phone ${organization.user.phone_number}`}
                            </Typography>
                        </Paper>
                    </Box>

                    <Box paddingBottom={2}>
                        <Paper elevation={2} >
                            <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                Address
                            </Typography>
                            <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                {organization.headquarter_location}
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default TourCard2;