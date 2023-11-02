import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobData from '../database/jobs';

import {
  ArrowBackRounded as ArrowBackRoundedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
WorkOutline as  WorkOutlineIcon,
BarChartRounded as BarChartRoundedIcon,
AccessTimeRounded as  AccessTimeRoundedIcon,
MonetizationOnOutlined as MonetizationOnOutlinedIcon ,
LocationOnOutlined as LocationOnOutlinedIcon,ErrorOutline as ErrorOutlineIcon,
} from '@mui/icons-material';

import Image from "../assets/images/back.png"
import {
  Divider,Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';

function JobDetail() {
  const { jobId } = useParams(); 
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    JobData.fetchJob(jobId)
      .then((jobData) => {
        setJob(jobData);
      })
      .catch((error) => {
        setError(error);
      });
  }, [jobId]);

  if (error) {
    return (
      <Container maxWidth="lg">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h5" color="error">
            <ErrorOutlineIcon fontSize="large" /> Error: {error.message}
          </Typography>
        </Paper>
      </Container>
    );
  }

  if (!job) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <CircularProgress color="primary" />
        </Paper>
      </Container>
    );
  }

  return (
   
   
    <div>

        
    <Box sx={{borderRadius:'40px',m:2,display:'flex', flexDirection:'row', p:2,width:'15%',justifyContent:'center',alignItems:'center',ml:6,
  }}>
    <ArrowBackRoundedIcon sx={{mt:'2px'}}/>
    <Typography sx={{fontSize:'20px',mx:'4px'}}>
        
        See all jobs</Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'row',mx:8,my:2,justifyContent:'center',alignItems:'flex-start'}}>
{/* Left side box */}

 

    <Box sx={{borderRadius:'10px', width:'75%',m:2,pb:4, 
    border: '1px solid #EAEBF3',
    background:'#FFF',
    boxShadow: '0px 1px 6px 0px rgba(156, 159, 181, 0.15);',overflowY:'auto'}}>  

    <Box sx={{textAlign:'center',backgroundImage:  `url(${Image})`, 
backgroundSize: 'contain', 
backgroundPosition: 'fixed', 
width:'100%',borderRadius:'8px',backgroundRepeat:'no-repeat'

}}>
    <br/>
    <br/>
  
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Avatar variant="rounded" src={`${job.company_logo}`}  sx={{border:'4px solid white',width:'80px',height:'80px',borderRadius:'10px', mt:11,
 border: '3px solid #EAEBF3',
 background: 'linear-gradient(180deg, #376FFF 0%, #5E5BFF 100%)',
 
 boxShadow:'0px 3px 4px 0px rgba(20, 20, 43, 0.04);'}}/>
   </Box>
    
    </Box>

    <Box sx={{px:4}}>

    <Box>
 
    <Typography sx={{textAlign:'center',color: '#232535',
                                mt:2, 
                                fontFamily: 'sans-serif',
                                fontSize: '18px',
                                fontStyle: 'WidthNormal',
                                fontWeight: 500,
                                lineHeight: '24px',mb:1}}> {job.company}
    </Typography>
    
    <Typography sx={{textAlign:'center',color: '#232535',
                                mt:1.5, 
                                fontFamily: 'sans-serif',
                                fontSize: '22px',
                                fontStyle: 'WidthNormal',
                                fontWeight: 600,
                                lineHeight: '24px',mb:1}}> {job.title} 
    </Typography>


    <Typography sx={{textAlign:'center',
    mx:14,
    color: '#484B62',
    fontFamily: 'sans-serif',  
    fontSize: '15px',     
    fontStyle:' normal',
    fontWeight: 400,
    lineHeight: '26px',
     }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit recusandae necessitatibus aspernatur quisquam in. 
    </Typography>
   
    <Box sx={{justifyContent:'center', display:'flex',flexDirection:'row',mt:3}}>
    <CalendarTodayOutlinedIcon sx={{width:'20px',height:'20px' ,mt:'1px'}}/> <Typography sx={{pb:1,px:1.5}}>Posted on: Jan 01, 2001</Typography>

    </Box>
   
    </Box>


    <Divider variant="middle" sx={{mt:5}} />
    <Typography sx={{textAlign:'left',color: '#232535',
                                mt:6, 
                                fontFamily: 'sans-serif',
                                fontSize: '22px',
                                fontStyle: 'WidthNormal',
                                fontWeight: 600,
                                lineHeight: '24px',mb:1}}>Job Description    </Typography>


    <Typography sx={{textAlign:'left',
    color: '#484B62',
    fontFamily: 'sans-serif',  
    fontSize: '16px', 
    fontStyle:' normal',
    fontWeight: 400,
    lineHeight: '26px',
}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quae impedit tempora harum ratione amet excepturi eligendi illum nam suscipit quasi expedita dolorum ullam, rem aut obcaecati ducimus. Quam suscipit impedit illo blanditiis necessitatibus nisi, nihil quos corporis error laboriosam?
   <br/>
   <br/>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro consequuntur, error dolores totam amet. Animi nostrum consectetur corporis libero obcaecati officia, repellat quibusdam accusamus cumque, a laborum ab laboriosam veritatis ipsa mollitia voluptatem dolore vitae architecto. Nam, odio tenetur?
    </Typography>
    


    <Typography sx={{textAlign:'left',color: '#232535',
                                mt:3,
                                fontFamily: 'sans-serif',
                                fontSize: '22px',
                                fontStyle: 'WidthNormal',
                                fontWeight: 600,
                                lineHeight: '24px',mb:1}}>Responsibilities    </Typography>


    <Typography sx={{textAlign:'left',
    color: '#484B62',
    fontFamily: 'sans-serif',  
    fontSize: '16px', 
    fontStyle:' normal',
    fontWeight: 400,
    lineHeight: '26px',
}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quae impedit tempora harum ratione amet excepturi eligendi illum nam suscipit quasi expedita dolorum ullam, rem aut obcaecati ducimus. Quam suscipit impedit illo blanditiis necessitatibus nisi, nihil quos corporis error laboriosam?
   <br/>
   <br/>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro consequuntur, error dolores totam amet. Animi nostrum consectetur corporis libero obcaecati officia, repellat quibusdam accusamus cumque, a laborum ab laboriosam veritatis ipsa mollitia voluptatem dolore vitae architecto. Nam, odio tenetur?
    </Typography>
    




    <Typography sx={{textAlign:'left',color: '#232535',
                                mt:3,
                                fontFamily: 'sans-serif',
                                fontSize: '22px',
                                fontStyle: 'WidthNormal',
                                fontWeight: 600,
                                lineHeight: '24px',mb:1}}>Job Requirements </Typography>


    <Typography sx={{textAlign:'left',
    color: '#484B62',
    fontFamily: 'sans-serif',  
    fontSize: '16px', 
    fontStyle:' normal',
    fontWeight: 400,
    lineHeight: '26px',
    mb:4,
}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quae impedit tempora harum ratione amet excepturi eligendi illum nam suscipit quasi expedita dolorum ullam, rem aut obcaecati ducimus. Quam suscipit impedit illo blanditiis necessitatibus nisi, nihil quos corporis error laboriosam?
   <br/>
   <br/>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro consequuntur, error dolores totam amet. Animi nostrum consectetur corporis libero obcaecati officia, repellat quibusdam accusamus cumque, a laborum ab laboriosam veritatis ipsa mollitia voluptatem dolore vitae architecto. Nam, odio tenetur?
    </Typography>
    



    </Box>
    </Box>

{/* Right side box */}

    <Box classname="right-side-box" sx={{ width:'25%',m:2,position:'sticky',top:'0',ml:'20px',}}> 
    



    {/* Box for apply now */}

    <Box sx={{ mb:2,p:2,position:'sticky',mt:2,pt:3,
    borderRadius: '6px',
    border: '1px solid #EAEBF3',
    background:'#FFF',
    boxShadow: '0px 1px 6px 0px rgba(156, 159, 181, 0.15);'}}>

    <Box sx={{ml:2}}>
    <Typography sx={{textAlign:'left',color: '#232535',
                                
                                fontFamily: 'sans-serif',
                                fontSize: '20px',
                                fontStyle: 'WidthNormal',
                                fontWeight: 600,
                                lineHeight: '24px',mb:1}}>Apply now    </Typography>


    <Typography sx={{textAlign:'left',
    color: '#484B62',
    fontFamily: 'sans-serif',  
    fontSize: '16px',     
    fontStyle:' normal',
    fontWeight: 400,
    lineHeight: '26px',
}}>  Lorem ipsum dolor sit amet consectetur adipisicing 
    </Typography>

<Box sx={{my:2}}>
 <Typography sx={{display:'flex',flexDirection:'row',my:'8px'}}>
<LocationOnOutlinedIcon sx={{width:'20px',height:'25px',color:'#376FFF', }}/> <Typography sx={{py:'1px',px:1.5}}>{job.location}</Typography>
</Typography>

<Typography sx={{display:'flex',flexDirection:'row',my:'8px'}}>
<BarChartRoundedIcon sx={{width:'20px',height:'25px',color:'#376FFF', }}/> <Typography sx={{py:'1px',px:1.5}}>Senior</Typography>
</Typography>

<Typography sx={{display:'flex',flexDirection:'row',my:'8px'}}>
<WorkOutlineIcon sx={{width:'20px',height:'25px',color:'#376FFF', }}/> <Typography sx={{py:'1px',px:1.5}}>Development</Typography>
</Typography>

<Typography sx={{display:'flex',flexDirection:'row',my:'8px'}}>
<AccessTimeRoundedIcon sx={{width:'20px',height:'25px',color:'#376FFF', }}/> <Typography sx={{py:'1px',px:1.5}}>{job.duration}</Typography>
</Typography>

<Typography sx={{display:'flex',flexDirection:'row',my:'8px'}}>
<MonetizationOnOutlinedIcon sx={{width:'20px',height:'25px',color:'#376FFF', }}/> <Typography sx={{py:'1px',px:1.5}}>{job.salary}$</Typography>
</Typography>

</Box>
</Box>
<Box sx={{textAlign:"centre"}}>
 <Button variant='contained' sx={{width:'85%', m:2, textTransform:'none',fontFamily:'sans-serif',
border:'1px solid #376FFF',borderRadius:'5px',
background: 'linear-gradient(180deg, #376FFF 0%, #5E5BFF 100%)',fontSize:'14px',
boxShadow: '0px 3px 6px 0px rgba(55, 111, 255, 0.16);'}} >Apply Now</Button>

 
 </Box>
    </Box>

{/* Box for view company */}
    
    <Box sx={{mb:2,p:2, borderRadius: '6px',
    border: '1px solid #EAEBF3',
    background:'#FFF',
    boxShadow: '0px 1px 6px 0px rgba(156, 159, 181, 0.15);'}}> 
    <Box sx={{ml:2}}>
   <Box sx={{mt:2,mb:2.5}}>
   <Avatar sx={{ bgcolor: 'lightblue',width:'55px',height:'55px' }} variant="rounded" src={`${job.company_logo}`} ></Avatar>
   </Box>
    <Typography sx={{textAlign:'left',color: '#232535',
                                
                                fontFamily: 'sans-serif',
                                fontSize: '20px',
                                fontStyle: 'WidthNormal',
                                fontWeight: 600,
                                lineHeight: '24px',mb:1.5}}>About {job.company}  </Typography>


    <Typography sx={{textAlign:'left',
    color: '#484B62',
    fontFamily: 'sans-serif',  
    fontSize: '16px',      
    fontStyle:' normal',
    fontWeight: 400,
    lineHeight: '26px',
}}>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, temporibus? 
    </Typography>
    </Box>
    <Box sx={{textAlign:"center"}}>
 <Button variant='outlined' sx={{width:'85%', m:2,fontFamily:'sans-serif',fontSize:'12px',textTransform:'none',
 borderRadius:'5px',
 border: '1px solid #EAEBF3',

 background: 'linear-gradient(180deg, #FFF 0%, #F3F3F7 100%);',
 boxShadow:'0px 3px 4px 0px rgba(20, 20, 43, 0.04);'}} >View Company</Button>

 
 </Box>
    
   
    </Box>
     </Box>

    </Box>
    </div>
   
    );
}

export default JobDetail;
