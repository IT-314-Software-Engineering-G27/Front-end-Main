import { Button, Grid, Box, Typography } from "@mui/material";
import laptop from "./laptop.jpg"
import intuit from "./logos/intuit.png";
import twilio from "./logos/twilio.png";
import motive from "./logos/motive.svg";
import zendesk from "./logos/zendesk.png";
import brex from "./logos/brex.svg";
import adobe from "./logos/adobe.png";
import checkr from "./logos/checkr.png";
import nba from "./logos/nba.png";
import square from "./logos/square.png";
import sendoso from "./logos/sendoso.png";
import dribble from "./logos/dribble.png";
import Homeb from "./Homeb"
const logosSet1 = [ [sendoso, brex, adobe, motive, checkr, nba], [sendoso, brex, adobe, motive, checkr, nba],];
const logosSet2 = [ [twilio, square, motive, intuit, dribble, zendesk], [twilio, square, motive, intuit, dribble, zendesk],];

const generateLogosSlider = (logosSets) => (
  <Box className="logos" style={{ overflow: 'hidden', padding: '60px 0', position: 'relative' }}>
    {logosSets.map((logos, index) => (
      <Box key={index} className="logos-slide" sx={{ px: 4, maxWidth: '250px', marginBottom: index % 2 === 0 ? '0' : '0' }}>
        {logos.map((logo, logoIndex) => (
          <img key={logoIndex} src={logo} alt={`logo-${index}-${logoIndex}`} style={{ height: '50px', margin: '30px' }} />
        ))}
      </Box>
    ))}
  </Box>
);

const Home = () => {
  return (
    <div>
    <div className="Home">
        <Grid container justifyContent="center" sx={{ width: "100%" }}>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Button  className="signupB"
              sx={{ color:"gray", display:"flex", fontSize:"16px", fontWeight:"1000", letterSpacing:".2rem", m:"auto", mt:"170px",
                 mb:"40px", width: "55%", height: "60px", borderRadius: "150px",border: "1px solid wheat",}}>
              Signup for the Journey
            </Button>
          </Grid>
        </Grid>

      
        <Grid item xs={12} sm={10} md={8} lg={6} sx={{ color: "white", textAlign: "center", width: "100%" }}>
          <Typography variant="h1" className="eee" sx={{ marginBottom: "20px", fontWeight: 600, fontSize: "120px",}}>
            Engage <span>&</span> Excel
          </Typography>
          <Typography variant="h2" sx={{fontSize: "35px" }}>
            A platform for investors and startups to meet
          </Typography>
        </Grid>
      

        <Grid item xs={12} sm={10} md={8} lg={6} sx={{ mt: "60px", mb: "100px",}}>
          <img className="laptop" src={laptop} alt="laptop" style={{ maxWidth: "100%" }}/>
        </Grid>


        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 10 }}>
        <Box sx={{ p: 4, pl: 8, fontWeight: 600, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3" sx={{ color: 'white', fontSize: '46px', mb: 2 }}>
            Investors from all over the world are trying to find promising startups to fund!<br />
          </Typography>
          <Typography variant="h7" sx={{ color: 'gray', fontSize: '24px', wordSpacing: '.1px', letterSpacing: '.3px' }}>
            StartApp is the best place for investors to find budding startups and for startups to pitch ideas to impress investors.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', maxHeight: '500px', maxWidth: '800px', textAlign: 'center', mr: 5, ml: 5 }}>
          {generateLogosSlider(logosSet1)}
          {generateLogosSlider(logosSet2)}
        </Box>
      </Box>


      </div>

     <Homeb/>

<div className="Home">
<Grid container justifyContent="center" sx={{ mt: 10, textAlign: 'center', borderBottom: '1px solid white' }}>
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pr: 40 }}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{ color: 'white', fontSize: '46px', lineHeight: '52px', mt: 1, textAlign: 'right' }}>
        One
      </Typography>
      <Typography sx={{ color: 'white', fontSize: '46px', lineHeight: '52px' }}>
        Platform
      </Typography>
      </Box>
      <Typography variant="h1" className="eee" sx={{ fontSize: '122px', lineHeight: '120px', fontWeight: 550 }}>
        Endless
      </Typography>
    </Grid>
    <Typography variant="h1" className="eee" sx={{ fontSize: '122px', lineHeight: '120px', fontWeight: 550, pl: 42, width: '100%', mb: 8 }}>
      Opportunities
    </Typography>
  </Grid>
  </div>
</div>
  );
};
export default Home;
