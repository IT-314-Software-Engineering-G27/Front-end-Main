import React from 'react'
import { Typography, Link, Box ,useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';



function Footer() {
    const theme = useTheme();
    return (
        <Box 
            sx={{
                mt: 'auto',py: 3,backgroundColor: 'black',color: 'white',position: 'relative',bottom: 0,width: '100%',}}
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2" align="center" sx={{
                    [theme.breakpoints.down('sm')]: 
                    {FontSize: '.8rem', },
                    [theme.breakpoints.between('sm', 'md')]: {
                            fontSize: '1rem', 
                    },
                    [theme.breakpoints.up('md')]: {
                        fontSize: '1.8rem',}
                    ,pt:'10px',mr:'14px', color:'white'}}>
                    &copy; {new Date().getFullYear()}  All rights reserved by StartUp App  
                </Typography>
                <Typography variant="body2" align="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link
                        href="https://github.com/IT-314-Software-Engineering-G27"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <GitHubIcon sx={{ fontSize:40, ml: '5px', bgcolor:'white',borderRadius:'20px' }} />
                    </Link>
                </Typography>
            </div>
        </Box>
    );
}

export default Footer;