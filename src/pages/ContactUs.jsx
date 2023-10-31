import React from 'react';
import { Divider,TextField,Button,Box,Link,InputLabel } from '@mui/material';


const ContactUs = () => {


    // const handleSubmit = (e) => {
    //     console.log("submitted");
    //   }
    
    return ( 

        <>
        
                <Box 
                  sx={{pt:'32px',mx:{xs:'6px',sm:'24px',md:'32px',lg:'40px'},color:'white', display:'flex',flexDirection:'column'}}
                >   
                    <Box 
                     sx={{mb:4,fontSize:{xs:'30px',sm:'60px'},fontWeight:'medium',textAlign:'center'}}
                    >
                        Contact Us
                    </Box>


                    <Box 
                    
                    sx={{ display: 'flex', flexDirection: { xs:'column',sm: 'column', md: 'row' }, backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(8px)', borderRadius: '20px', padding: 6, marginBottom: 20, fontSize: { xs: 'sm', md: 'base' }, }} >
                        
                            <Box sx={{width:'100%'}}>
                            <Box sx={{display: 'flex',flexWrap: 'wrap',pr: { md: 3 }}}>
                            <Box sx={{display: {xs:'block',sm:'flex',md:'flex' },width: '100%',marginBottom: 2,}}>
                                  

         <InputLabel sx={{color:'white', display: 'flex', alignItems: 'center', width: {sm:2/5}, fontWeight: '700', marginBottom: '4px', }}>
     Name 
        </InputLabel>
        <TextField  required variant="outlined" fullWidth
          sx={{borderRadius: '10px', color:'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'gray', '&:hover': {borderColor: 'rgba(128, 128, 128, 0.5)',},
            '&.Mui-focused': {borderColor: 'rgba(128, 128, 128, 0.5)',},}} 
            inputProps = {{sx: {'&::placeholder': {color: 'rgba(255, 255, 255, 0.7)', opacity: 1, },},}}
            type="text" placeholder='Enter your name'/>


            </Box>
                           
         <Box sx={{display: {xs:'block',sm:'flex',md:'flex' },width: '100%',marginBottom: 2,}}>


         <InputLabel sx={{color:'white', display: 'flex', alignItems: 'center', width: {sm:2/5}, fontWeight: '700', marginBottom: '4px', }}>
     Email
        </InputLabel>
        <TextField  required variant="outlined" fullWidth
          sx={{borderRadius: '10px', color:'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'gray', '&:hover': {borderColor: 'rgba(128, 128, 128, 0.5)',},
            '&.Mui-focused': {borderColor: 'rgba(128, 128, 128, 0.5)',},}}
            inputProps = {{sx: {'&::placeholder': {color: 'rgba(255, 255, 255, 0.7)', opacity: 1, },},}}
            type="email" placeholder='Enter your email address'/>


    </Box>
    <Box sx={{display: {xs:'block',sm:'flex',md:'flex' },width: '100%',marginBottom: 2,}}>


    <InputLabel sx={{color:'white', display: 'flex', alignItems: 'center', width: {sm:2/5}, fontWeight: '700', marginBottom: '4px', }}>
     Contact No.
    </InputLabel>
    <TextField  required variant="outlined" fullWidth
          sx={{borderRadius: '10px', color:'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'gray', '&:hover': {borderColor: 'rgba(128, 128, 128, 0.5)',},
            '&.Mui-focused': {borderColor: 'rgba(128, 128, 128, 0.5)',},}}
            inputProps = {{sx: {'&::placeholder': {color: 'rgba(255, 255, 255, 0.7)', opacity: 1, },},}}
            type="contact" placeholder='Enter your contact number'/>

    </Box>
    
    <Box sx={{ width: '100%', marginBottom: 2,}}>

    <InputLabel sx={{color:'white', display: 'flex', alignItems: 'center', width: {sm:2/5}, fontWeight: '700', marginBottom: '8px', }}>
     Message
    </InputLabel>                           
    <TextField  required multiline variant="outlined"  rows={6} fullWidth
          sx={{mt:1.5,borderRadius: '10px', color:'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'gray', '&:hover': {borderColor: 'rgba(128, 128, 128, 0.5)',},
            '&.Mui-focused': {borderColor: 'rgba(128, 128, 128, 0.5)',},}} 
            inputProps = {{sx: {'&::placeholder': {color: 'rgba(255, 255, 255, 0.7)', opacity: 1, },},}}
            type="text" placeholder='Drop us a message :)'/>                     
    </Box>

    <Box sx={{ width: '100%', my: 2,}}>
            <Button variant='contained' sx={{borderRadius:'10px'}}  
            // onClick={this.handleSubmit}
            >Submit </Button>       
    </Box>
    </Box>
    </Box>
    
    
   <Divider sx={{ mx: 'auto', borderColor: 'white', my: 4 }} />
    <Box sx={{width:{lg:3/5,md:3/5},marginBottom: 2}} >
    <Box sx={{overflow:'hidden',borderRadius:'20px',height:'270px'}}>
     <iframe width='100%' height='270px' title="DA-IICT Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14669.989595290104!2d72.6289155!3d23.188537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1678437146026!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe>
                          
    </Box>
     <Box sx={{ fontSize: { xs: '12px', md: 'sm' }, marginTop: 3,marginBottom: 3,}}>
            Dhirubhai Ambani Institute Of Information And Communication Technology<br/>
            Near Indroda Circle<br/>
            Gandhinagar - 382007<br/>
            Gujarat, India<br/>
     </Box>
     <Divider sx={{ mx: 'auto', borderColor: 'white', my: 1 }} />
                              
     <Box sx={{textAlign:'center'}}>
         <Link href="some_email.com" underline='hover' sx={{mb:1/2, color:'white', justifyContent:'center',}}> our_sites_address.com</Link>
     </Box>
    <Box sx={{textAlign:'center'}}>
             <div  >99xxxxxxxx</div>
    </Box>
        </Box>
        </Box> 
        </Box>
            </>
 
     );
}
 
export default ContactUs;