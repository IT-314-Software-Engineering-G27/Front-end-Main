import { Container,Typography,Box,Button } from "@mui/material";
import Image from '../images/p404.png'
const NotFound = () => {
    return ( 
        <Box  sx={{backgroundColor:'#151729', backgroundImage:`url(${Image})`,textAlign:'center', height:'100vh',pt:'26vh'}}>
           
            <Typography sx={{fontSize:{xs:'90px',sm:'180px',md:'240px',lg:'360px'},textAlign:'center',color:'white', lineHeight:{xs:'80px',sm:'160px',md:'220px',lg:'340px'}}}>
                404  
            </Typography>
            <Typography sx={{ textAlign:'center',fontSize:{sm:'30px',md:'50px',lg:'70px'},color:'white'}}>
              Opps! Page not found 
            </Typography>

         
        </Box>
     );
}
 
export default NotFound;