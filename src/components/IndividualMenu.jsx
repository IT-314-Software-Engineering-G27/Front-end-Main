
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

const IndividualMenu = () => {
    return (
    <Paper>
        <Box >

            <Box paddingY={1.5} 
                            paddingTop={2}>

                <Box paddingLeft={1.75}>
                    <img src={Object2} alt="" className="img" />
                </Box>

                <Button variant="text" Link to='' size='small'>
                    <Typography variant="body" component="h5">
                        Profile
                    </Typography>
                </Button>
            </Box>

            <Box paddingY={1.5}>
                <Box paddingLeft={1.25}>
                    <img src={Object3} alt="" className="img" />
                </Box>
                <Button variant="text" Link to='' size='small'>
                    <Typography variant="body" component="h5">
                        Chat
                    </Typography>
                </Button>
            </Box>

            <Box paddingY={1.5} >
                <Box paddingLeft={1.5}>
                    <img src={Object4} alt="" className="img" />
                </Box>
                <Button variant="text" Link to='' size='small'>
                    <Typography variant="body" component="h5">
                        Post
                    </Typography>
                </Button>
            </Box>

            <Box paddingY={1.5}>
                <Box paddingLeft={2}>
                    <img src={Object5} alt="" className="img" />
                </Box>
                <Button variant="text" Link to='' size='small'>
                    <Typography variant="body" component="h5">
                        Idea <br /> Sharing
                    </Typography>
                </Button>
            </Box>

            <Box paddingY={1.5}>
                <Box paddingLeft={1.25}>
                    <img src={Object6} alt="" className="img" />
                </Box>
                <Button variant="text" Link to='' size='small'>
                    <Typography variant="body" component="h5">
                        Updates
                    </Typography>
                </Button>
            </Box>

            <Box paddingY={1.5}>
                <Box paddingLeft={1.5}>
                    <img src={Object7} alt="" className="img" />
                </Box>
                <Button variant="text" Link to='' size='small'>
                    <Typography variant="body" component="h5">
                        Setting
                    </Typography>
                </Button>
            </Box>
        </Box>
        </Paper>

    );
};

export default IndividualMenu;