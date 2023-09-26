import { Button, Container, Paper, Typography, Card, CardContent, CardActions, Grid } from "@mui/material";


export default function Test() {
    return (
        <>
            <Typography variant="h1">Khandar</Typography>
            <Container maxWidth="xl" sx={{ backgroundColor: "primary.main" }}>
                <Typography variant="h2">Estrada</Typography>
                <Paper elevation={3} sx={{ backgroundColor: "primary.dark" }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <Typography variant="h3" sx={{ backgroundColor: "secondary.main" }}>Khandos</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <Typography variant="h4" sx={{ backgroundColor: "secondary.dark" }}>Thrus</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <Typography variant="h5" sx={{ backgroundColor: "info.main" }}>Indactu</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <Typography variant="h6" sx={{ backgroundColor: "info.dark" }}>nosfrandus</Typography>
                        </Grid>
                    </Grid>
                    <Card sx={{ width: "20%" }}>
                        <CardContent>
                            <Typography variant="body1">dematos</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained">Button</Button>
                        </CardActions>
                    </Card>

                </Paper>
            </Container >
        </>
    )
}