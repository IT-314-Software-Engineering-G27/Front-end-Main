import {Grid,Box,Typography} from '@mui/material';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/5.png';
import Image5 from '../assets/6.png';

const CustomGrid = () => {
    return ( <div>
        <Grid item xs={12} sm={8} md={8} lg={6} sx={{ textAlign: 'left', width: '100%', }}>
  <Typography variant="h2" sx={{fontFamily:'helvetica', fontSize: { xs: '20px', sm: '40px', md: '60px' }, fontWeight: 600, pl: { xs: 2, sm: 4, md: 8 }, pt: { xs: 2, sm: 4, md: 6 } }}>
    An unmatched attendee
  </Typography>
  <Typography variant="h1" sx={{fontFamily:'helvetica', fontSize: { xs: '70px', sm: '100px', md: '170px' }, pb: { xs: 2, sm: 4, md: 6 }, fontWeight: 700, pl: { xs: 2, sm: 4, md: 8 } }}>
    Experience
  </Typography>

  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={4}>
      {[
        { img: Image1, xs: 12, justifyContent: 'center', m: 4, mx: 8 },
        { img: Image2, xs: 7, my: 4, ml: 8, },
        { img: Image3, xs: 5, m: 4, ml: 4 , mr:8},
        { img: Image4, xs: 6, my: 4, ml: 8,mr:3 },
        { img: Image5, xs: 6, m: 4,mr:8},
      ].map((item, index) => (
        <Grid key={index} item xs={item.xs} justifyContent={item.justifyContent}>
          <Box sx={{ borderRadius: '50px', overflow: 'hidden', ...item }}>
            <img src={item.img} alt={`features-${index}`} style={{ width: '100%', height: item.img === Image3 ? '730px' : '100%' }} />
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
</Grid>
  
</div> )
}
export default CustomGrid;