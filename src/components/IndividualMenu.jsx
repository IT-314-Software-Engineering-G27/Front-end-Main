
import Box from "@mui/material/Box"
import Object1 from '../images/OBJECT1.png';
import Object2 from '../images/OBJECT2.png';
import Object3 from '../images/OBJECT3.png';
import Object4 from '../images/OBJECT4.png';
import Object5 from '../images/OBJECT5.png';
import Object6 from '../images/OBJECT6.png';
import Object7 from '../images/OBJECT7.png';
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";
import { Link } from 'react-router-dom';


const IndividualMenu = () => {
    return (
   
        <Box paddingBottom={1}>

            <Box paddingY={1} paddingLeft={1}> 
                <Button href="/jobs"  variant="outlined" style={{maxWidth: '60px', maxHeight: '80px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                   
                        Profile
                  
                </Button>
            </Box>


            <Box paddingY={1.5} paddingLeft={1} >
              
            <Button  href="/jobs"  variant="outlined" style={{maxWidth: '60px', maxHeight: '80px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                        POST
                    </Button>
            </Box>

           
            <Box paddingLeft={1}>
                <Button  href="/jobs"  variant="outlined" style={{maxWidth: '60px', maxHeight: '80px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                        JOBS
                    </Button>
            </Box>

            
            <Box paddingTop={2} paddingLeft={1}>
                <Button  href="" variant="outlined" style={{maxWidth: '60px', maxHeight: '80px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '7px', textAlign : "center"}}>
                      job Application
                </Button>
            </Box>

            <Box paddingTop={2} paddingLeft={0.75}>
                <Button  href="" variant="outlined" style={{maxWidth: '60px', maxHeight: '80px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '7px', textAlign : "center"}}>
                    Contact us
                </Button>
            </Box>
        </Box>
      

    );
};

export default IndividualMenu;
