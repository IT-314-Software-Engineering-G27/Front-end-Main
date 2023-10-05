
import Box from "@mui/material/Box"
import Object1 from './OBJECT1.png';
import Object2 from './OBJECT2.png';
import Object3 from './OBJECT3.png';
import Object4 from './OBJECT4.png';
import Object5 from './OBJECT5.png';
import Object6 from './OBJECT6.png';
import Object7 from './OBJECT7.png';
import Typography  from "@mui/material/Typography";
import { Button } from "@mui/material";

const TourCard = () =>{
   return(

    <Box>
        
        <Box paddingY={1.5} paddingLeft={1}>     
            <img src={Object1} alt="" className="img" /> 
        </Box>
        

        <Box paddingY={1.5} >
            <Box paddingLeft={1}>
            <img src={Object2} alt="" className="img" /> 
            </Box>
            
             <Button variant="text" Link to = '' size='small'>
                <Typography variant="body" component="h5">
                    Profile
                </Typography>
             </Button>
        </Box>

        <Box paddingY={1.5}>
            <Box paddingLeft={1}>
                <img src={Object3} alt="" className="img"/> 
            </Box>
            <Button variant="text" Link to = '' size='small'>
                <Typography variant="body" component="h5">
                    Chat
                </Typography>
              </Button>
        </Box>

        <Box paddingY={1.5} >
            <Box paddingLeft={1}>
                <img src={Object4} alt="" className="img" /> 
            </Box>
            <Button variant="text" Link to = '' size='small'>
                <Typography variant="body" component="h5">
                    Post
                </Typography>
              </Button> 
        </Box>

        <Box paddingY={1.5}>
            <Box paddingLeft={1}>
                <img src={Object5} alt="" className="img" /> 
            </Box>
            <Button variant="text" Link to = '' size='small'>
                <Typography variant="body" component="h5">
                    Idea <br/> Sharing
                </Typography>
              </Button>
        </Box>

        <Box paddingY={1.5}>
            <Box paddingLeft={1}>
                <img src={Object6} alt="" className="img" /> 
            </Box>
            <Button variant="text" Link to = '' size='small'>
                <Typography variant="body" component="h5">
                    Updates
                </Typography>
              </Button> 
        </Box>

        <Box paddingY={1.5}>
            <Box paddingLeft={1}>
             <img src={Object7} alt="" className="img" /> 
            </Box> 
            <Button variant="text" Link to = '' size='small'>
                <Typography variant="body" component="h5">
                    Setting
                </Typography>
              </Button> 
        </Box>
    </Box>
    
   );
};

export default TourCard;