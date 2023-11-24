import '../styles/landing_page.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Box, Typography } from "@mui/material";
import laptop from "../assets/laptop.jpg"
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
import CustomGrid from "../components/CustomGrid";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const logosSet1 = [ [sendoso, brex, adobe, motive, checkr, nba], [sendoso, brex, adobe, motive, checkr, nba],];
const logosSet2 = [ [twilio, square, motive, intuit, dribble, zendesk], [twilio, square, motive, intuit, dribble, zendesk],];

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
  return (

    
    
    <div>
        <NavBar/>
    <div className="Home">
        <Grid container justifyContent="center" sx={{ width: "100%" }}>
          <Grid >
            <Button  className="signupB" onClick={() => window.location.href = '/register'}
              sx={{ color:"gray", display:"flex", fontSize:"16px", fontWeight:"1000", letterSpacing:".2rem", m:"auto", mt:"110px",
                 mb:"40px", width: "55%", height: "60px", borderRadius: "150px",border: "1px solid wheat",}}>
              Signup for the Journey
            </Button>
          </Grid>
        </Grid>

      
        <Grid sx={{ color: "white", textAlign: "center", width: "100%" }}>
          <Typography variant="h1" className="eee" sx={{ marginBottom: "20px", fontWeight: 600, fontSize: "120px",fontFamily:'helvetica'}}>
            StartApp for Startups
          </Typography>
          <Typography  sx={{fontSize: "35px",color:'white' }}>
            A platform for investors and startups to meet
          </Typography>
        </Grid>
      

        <Grid sx={{ mt: "60px", mb: "100px",}}>
          <img className="laptop" src={laptop} alt="laptop" style={{ maxWidth: "100%" }}/>
        </Grid>


        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 10 }}>
        <Box sx={{ p: 4, pl: 8, display: 'flex', flexDirection: 'column' }}>
          <Typography  sx={{ color: 'white', fontSize: '40px', mb: 2,fontWeight:550 }}>
            Investors from all over the world are trying to find promising startups to fund!<br />
          </Typography>
          <Typography  sx={{ color: 'gray', fontSize: '26px', wordSpacing: '.1px', letterSpacing: '.3px' }}>
            StartApp is the best place for investors to find budding startups and for startups to pitch ideas to impress investors.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', maxHeight: '500px', maxWidth: '800px', textAlign: 'center', mr: 15, ml: 5 }}>
          {generateLogosSlider(logosSet1)}
          {generateLogosSlider(logosSet2)}
        </Box>
      </Box>


      </div>
     
     <div id="featuresSection">
      <br/>
     <CustomGrid/>
     </div>

<div className="Home">
<Grid container justifyContent="center" sx={{ mt: 10, textAlign: 'center', borderBottom: '1px solid white' }}>
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pr: 40 }}>
      <Box sx={{display:'flex',flexDirection:'column',}}>
      <Typography sx={{ fontFamily:'helvetica',color: 'white', fontSize: '46px', lineHeight: '52px', mt: 1, textAlign: 'right' }}>
        One
      </Typography>
      <Typography sx={{ fontFamily:'helvetica',color: 'white', fontSize: '46px', lineHeight: '52px' }}>
        Platform
      </Typography>
      </Box>
      <Typography className="eee" sx={{fontFamily:'helvetica', fontSize: '122px', lineHeight: '120px', fontWeight: 550 }}>
        Endless
      </Typography>
    </Grid>
    <Typography  className="eee" sx={{fontFamily:'helvetica', fontSize: '122px', lineHeight: '120px', fontWeight: 550, pl: 42, width: '100%', mb: 8 }}>
      Opportunities
    </Typography>
  </Grid>
  </div>
  {/* <Footer/> */}
</div>

  );
};
export default LandingPage;
