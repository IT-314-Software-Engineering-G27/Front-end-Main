
import { Container,Grid, Paper,Box, colors } from '@mui/material';
import './App.css';
import IndProfCard1 from '../Component/IndProfCard1'
import IndProfCard2 from '../Component/IndProfCard2';
import IndProfCard3 from '../Component/IndProfCard3';
import SearchAppBar from '../Component/IndSearchAppBar';



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
                  <IndProfCard1/>
                  </Paper>
                  </Box>
              </Grid>

              <Grid item xs={4}>
                <Box margin={2}>
                  <IndProfCard2/>
                  </Box>
              </Grid>
              
              <Grid item xs={6.5}>
                  <IndProfCard3/>
              </Grid>

        </Grid>
        </Paper>
        </Box>
    </Container>
    
   </div>
  );
}

export default App;
