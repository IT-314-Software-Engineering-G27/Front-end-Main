
import { Container,Grid, Paper,Box, colors } from '@mui/material';
import './App.css';
import OrgProfCard1 from '../Component/OrgProfCard1'
import OrgProfCard2 from '../Component/OrgProfCard2';
import OrgProfCard3 from '../Component/OrgProfCard3';
import SearchAppBar from '../Component/SearchAppBar';



function App() {

  return (
   <div>
    
    <Container>
    <Box backgroundColor = 'blue'>
    <Paper >
        <SearchAppBar/>
        
        <Grid container spacing={4}>
           
              <Grid item xs={1}>
                <Box marginY={2}>
                <Paper elevation={3} >
                  <OrgProfCard1/>
                  </Paper>
                  </Box>
              </Grid>

              <Grid item xs={4}>
                <Box margin={2}>
                  <OrgProfCard2/>
                  </Box>
              </Grid>
              
              <Grid item xs={6.5}>
                  <OrgProfCard3/>
              </Grid>

        </Grid>
        </Paper>
        </Box>
    </Container>
    
   </div>
  );
}

export default App;
