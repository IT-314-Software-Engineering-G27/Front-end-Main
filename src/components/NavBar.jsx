import * as React from 'react';
import { Navigate, useNavigate  } from 'react-router';
import {useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Logo from '../assets/images/Logo.svg';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Features', 'Contact-Us', 'Sign up'];


function NavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
  return (
    <AppBar className='Resp_app_bar' position="fixed"
    sx={{ backgroundColor: 'black', borderBottom: '0.01px solid #ccc' ,
          backdropFilter: 'blur(20px)',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Grid item xs={12} md={6} lg={3} sx={{ display: { xs: 'none', md: 'block' },mt:1 }}>
              <img src={Logo} alt="Logo" width="45" height="45" style={{mr: 1,backgroundColor: 'white', borderRadius:'170px',border:'2px solid wheat'  }} />
            </Grid>
           

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              colorAdjust='unset'
            >
              <MenuRoundedIcon  sx={{color:"white",backgroundColor:"gray", borderRadius:'7px',}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"  onClick={() => {
                  if (page === 'Features') {
                    const featuresSection = document.getElementById('featuresSection');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } 
                  if (page === 'Sign up') {navigate("/register");}
                if (page === 'Contact-Us'){
                  navigate("/contact-us");
                    
                  }
                }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Grid item xs={12} md={6} lg={3} sx={{ display: { xs: 'block', md: 'none' },mt:1,mr:1.5 }}>
              <img src={Logo} alt="Logo" width="28" height="28" style={{mr: 1,backgroundColor: 'white', borderRadius:'170px',border:'1px solid wheat'  }} />
            </Grid>

        <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              [theme.breakpoints.down('sm')]: 
                    {FontSize: '1rem', },
                    [theme.breakpoints.between('sm', 'md')]: {
                            fontSize: '1.3rem', 
                    },
                    [theme.breakpoints.up('md')]: {
                        fontSize: '1.5rem',}
                    ,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            STARTAPP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },
                  gap :"3em" }}>
            {pages.map((page) => (
              <Button
                key={page}
              
                sx={{ my: 2, color: 'white', display: 'block' ,fontWeight:'700',fontSize:'15px'}}
                onClick={() => {
                  if (page === 'Features') {
                    const featuresSection = document.getElementById('featuresSection');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } 
                  if (page === 'Sign up') {navigate("/register");}
                if (page === 'Contact-Us'){
                  navigate("/contact-us");
                    
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            
                <Button onClick={() => navigate('/login')}
                
                sx={{ background:"rgba(92, 36, 179, 1)",right:"1rem",borderRadius:"0.5rem", width: '130%', transition: 'background-color 0.3s, transform 0.3s',color :"White", '&:hover': { backgroundColor: 'White', transform: 'scale(1.05)',color:"rgba(92, 36, 179, 1)" }, }} >
               

                Login</Button>
             
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;