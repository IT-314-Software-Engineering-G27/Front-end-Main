import '../styles/landing_page.css';
import { Button, Grid, Box, Typography , useTheme} from "@mui/material";
import { useState, useEffect } from 'react';
import Laptop from "../assets/laptop.jpg"
import banner from "../assets/banner.bmp"
import Home from "../assets/Home.jpg"
import intuit from "../assets/intuit.png";
import twilio from "../assets/twilio.png";
import motive from "../assets/motive.svg";
import zendesk from "../assets/zendesk.png";
import brex from "../assets/brex.svg";
import adobe from "../assets/adobe.png";
import checkr from "../assets/checkr.png";
import nba from "../assets/nba.png";
import square from "../assets/square.png";
import sendoso from "../assets/sendoso.png";
import dribble from "../assets/dribble.png";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { CenterFocusStrong } from '@mui/icons-material';
const logosSet1 = [
  [sendoso, brex, adobe, motive, checkr, nba],
  [sendoso, brex, adobe, motive, checkr, nba],
];
const logosSet2 = [
  [twilio, square, motive, intuit, dribble, zendesk],
  [twilio, square, motive, intuit, dribble, zendesk],
];

const generateLogosSlider = (logosSets) => (
  <Box className="logos" style={{ overflow: 'hidden', padding: '60px 0', position: 'relative' }}>
    {logosSets.map((logos, index) => (
      <Box key={index} className="logos-slide" sx={{ px: 4, maxWidth: '300px', marginBottom: index % 2 === 0 ? '0' : '0' }}>
        {logos.map((logo, logoIndex) => (
          <img key={logoIndex} src={logo} alt={`logo-${index}-${logoIndex}`} style={{ height: '50px', margin: '30px' }} />
        ))}
      </Box>
    ))}
  </Box>
);

const LandingPage = () => {
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <div className="Home">
      <Grid container justifyContent="center">
  <Grid item sx={{width :"36%", textAlign: 'center' }}>
    <Button
      className="signupB"
      onClick={() => (window.location.href = '/register')}
      sx={{
        background: 'rgba(92, 36, 179, 1)',
        borderRadius: '1rem',
        width: '100%',
        transition: 'background-color 0.3s, transform 0.3s',
        color: 'White',
        marginTop: '5rem',
        justifyContent: 'center', // Centering the content horizontally
        '&:hover': {
          backgroundColor: 'White',
          transform: 'scale(1.05)',
          color: 'rgba(92, 36, 179, 1)',
        },
      }}
    >
      {windowWidth > 768 ? 'Signup for the Journey' : 'Sign Up'}
    </Button>
  </Grid>
</Grid>

        <Grid sx={{ color: "white", textAlign: "center", width: "100%" }}>
          <Typography variant="h1" className="eee" sx={{ marginBottom: "20px", fontWeight: 600, 
          [theme.breakpoints.down('sm')]: {
            fontSize: '3rem', // Change font size for screens smaller than or equal to 'sm'
          },
          [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '5rem', // Change font size for screens between 'sm' and 'md'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '7rem', // Change font size for screens larger than or equal to 'md'
          }, fontFamily: 'helvetica' }}>
            StartApp for Startups
          </Typography>
          <Typography sx={{ [theme.breakpoints.down('sm')]: {
            fontSize: '1rem', // Change font size for screens smaller than or equal to 'sm'
          },
          [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.5rem', // Change font size for screens between 'sm' and 'md'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '3rem', // Change font size for screens larger than or equal to 'md'
          }, color: 'white' }}>
            A platform for investors and startups to meet
          </Typography>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box>
              <img
                src={Laptop}
                alt="Feature Image"
                style={{ maxWidth: "100%", height: "auto", display: 'block', padding: '0 20px' }}
              />
            </Box>
          </Grid>
        </Grid>
        

        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 10 }}>
          <Box sx={{ p: 4, pl: 8, display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: 'white', [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem', // Change font size for screens smaller than or equal to 'sm'
          },
          [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.2rem', // Change font size for screens between 'sm' and 'md'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '2.3rem', // Change font size for screens larger than or equal to 'md'
          }, mb: 2, fontWeight: 550 }}>
              Investors from all over the world are trying to find promising startups to fund!<br />
            </Typography>
            <Typography sx={{ color: 'gray', [theme.breakpoints.down('sm')]: {
            fontSize: '1rem', // Change font size for screens smaller than or equal to 'sm'
          },
          [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1rem', // Change font size for screens between 'sm' and 'md'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1.8rem', // Change font size for screens larger than or equal to 'md'
          }, wordSpacing: '.1px', letterSpacing: '.3px' }}>
              StartApp is the best place for investors to find budding startups and for startups to pitch ideas to impress investors.
            </Typography>
          </Box>
        </Box>
        
      </div>

      <div id="featuresSection" sx={{ mt: '60px', mb: '100px', overflow: 'auto'}}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box >
              <img
                src={Home}
                alt="Feature Image"
                style={{margin:"auto", maxWidth: "80%", height: "auto", display: 'block' }}
              />
            </Box>
          </Grid>
        </Grid>
        
      </div>
      <div className="Home">
      <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box>
              <img
                src={banner}
                alt="Feature Image"
                style={{ maxWidth: "100%", height: "auto", display: 'block'}}
              />
            </Box>
          </Grid>
        </Grid>

      
  </div>
      <Footer />
    </div>
  );
};

export default LandingPage;