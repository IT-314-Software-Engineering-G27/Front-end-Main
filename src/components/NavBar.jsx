import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Logo from '../assets/images/Logo.svg';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Features', 'Contact-Us'];


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

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
        <img src={Logo} alt="Logo" width="60" height="55" style={{ display: { xs: 'none', md: 'flex' }, mr: 1,backgroundColor: 'white', borderRadius:'170px',border:'2px solid wheat' }} />
           <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
                ml:2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'gray',
              textDecoration: 'none',
            }}
          >
            STARTAPP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STARTAPP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' },
                     gap:'60px' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'gray', display: 'block' ,fontWeight:'700',fontSize:'15px'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            
                <Button onClick={() => window.location.href = '/login'}
                
                sx={{color: 'gray',
                fontWeight: '1000',
                letterSpacing: '.01rem',
                borderRadius: '150px',
                 padding:'8px',
                paddingLeft:'30px',
                paddingRight:'30px',
            //    border: '2px solid wheat',
                

                background: 'black',
             //   background: 'rgba(  205, 182, 245, 0.5 )',
                // boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                // backdropfilter: 'blur( 6px )',
              // webkitbackdropfilter: 'blur( p4x )',
             //  border: '1px solid rgba( 255, 255, 255, 0.18 )',
               
                
              border: '1px solid wheat',
                // backdropFilter: 'blur(5px)',
                // backgroundColor: 'white',
                 boxShadow: '35px 35px 68px 0px rgba(141, 86, 246, 0.25)', 
                            }}

                >Login</Button>
             
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;