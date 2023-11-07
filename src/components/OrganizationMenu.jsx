
import Box from "@mui/material/Box"
import Object1 from '../images/OBJECT1.png';
import Object2 from '../images/OBJECT2.png';
import Object3 from '../images/OBJECT3.png';
import Object4 from '../images/OBJECT4.png';
import Object5 from '../images/OBJECT5.png';
import Object6 from '../images/OBJECT6.png';
import Object7 from '../images/OBJECT7.png';
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";


  
const OrganizationMenu = () => {
    return (
      
   
      
        <Box  paddingBottom={1}>

            <Box paddingY={1.5} 
                            paddingTop={2}>

                <Box paddingLeft={1}>
                    <img src={Object2} alt="" className="img" />
                </Box>

                <Button variant="text" Link to='' size='small'>
                    <Typography variant="body" component="h5">
                        Profile
                    </Typography>
                </Button>
            </Box>

            <Box paddingY={1.5} >
                <Box paddingLeft={1}>
                    <img src={Object4} alt="" className="img" />
                </Box>
                <Button variant="text" href='/posts' size='small'>
                    <Typography variant="body" component="h5">
                        Post
                    </Typography>
                </Button>
            </Box>

            <Box paddingTop={2} paddingLeft={0.75}>
                <Button  href="/events" variant="outlined" style={{maxWidth: '60px', maxHeight: '50px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                      Events
                </Button>
            </Box>
            
            <Box paddingTop={2} paddingLeft={0.75}>
                <Button  href="/events" variant="outlined" style={{maxWidth: '60px', maxHeight: '60px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                      Job Profile Post
                </Button>
            </Box>

            <Box paddingTop={2} paddingLeft={0.75}>
                <Button  href="/events" variant="outlined" style={{maxWidth: '60px', maxHeight: '50px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                     Event List
                </Button>
            </Box>

            <Box paddingTop={2} paddingLeft={0.75}>
                <Button  href="/events" variant="outlined" style={{maxWidth: '60px', maxHeight: '60px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                     Job Profile List
                </Button>
            </Box>

            <Box paddingTop={2} paddingLeft={0.75}>
                <Button  href="/events" variant="outlined" style={{maxWidth: '60px', maxHeight: '60px', 
                                                                minWidth: '30px', minHeight: '30px',fontSize: '10px', textAlign : "center"}}>
                    Contact us
                </Button>
            </Box>

        </Box>
      
       
       

    );
};

export default OrganizationMenu;
