import { Box, Container, Grid,Paper,Typography } from "@mui/material";
import { useState } from "react";


const IndividualSocial = () => {

    const [Connection, setConnection] = useState(0);
    const [RegisterdComp, setRegisterdComp] = useState(0);
    const [body,setBody] = useState('Body');
    const [ConPer, setConPer] = useState(0);
    const [RegComPer, setRegComPer] = useState(0);
    return(  
         <div>
              <Grid > 

                <Grid item xs={6} marginY={2}>
                    <Paper elevation={3}>
                        <Box paddingX={2}>
                            <Typography variant="h5" component="h2" style={{color: '#2F1263'}}>
                                {Connection}
                            </Typography>

                            <Box>
                                <Typography variant="subtitle2" component="h1" style={{color: '#2F1263'}}>
                                    Your Connection
                                </Typography>
                                <Typography variant="h6" component="h3" style={{color: '#2F1263'}}>
                                    {ConPer}%
                                </Typography>

                       
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            

                <Grid item xs={6} marginY={2}>
                    <Paper elevation={3}>
                        <Box paddingX={2}>
                            <Typography variant="h5" component="h2" style={{color: '#2F1263'}}>
                                {RegisterdComp}
                            </Typography>
                            <Box>
                                <Typography variant="subtitle2" component="h1" style={{color: '#2F1263'}}>
                                    Company You Registerd
                                </Typography>
                                <Typography variant="h6" component="h3" style={{color: '#2F1263'}}>
                                    {RegComPer}%
                                </Typography>  
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={10} marginY={5}>
                    <Paper elevation={3}>
                        <Box paddingX={2}>
                            <Typography variant="body" component="h3" paddingY={2} style={{color: '#2F1263'}}>
                                My Post
                            </Typography>
                            <Box>
                                <Typography variant="h6" component="h2" style={{color: '#2F1263'}}>
                                    Subtitle/Heading
                                </Typography> 
                                <Typography variant="subtitle2" component="h1" paddingY={1}>
                                 {body  }
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                
               
                                </Typography> 
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
       
            </div>
    );
}

export default IndividualSocial;