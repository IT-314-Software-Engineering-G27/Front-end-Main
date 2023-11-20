import React from 'react';
import { Divider,Button,Box,Link} from '@mui/material';


const ContactUs = () => {
   
    return ( 

        <>
        
                <Box 
                  sx={{pt:'32px',mx:{xs:'6px',sm:'24px',md:'32px',lg:'40px'},color:'white', display:'flex',flexDirection:'column'}}
                >   
                    <Box 
                     sx={{mb:4,fontSize:{xs:'30px',sm:'60px'},fontWeight:'medium',textAlign:'center',fontFamily:'helvetica', fontWeight:600}}
                    >
                        Contact Us
                    </Box>


                    <Box 
                    
                    sx={{ display: 'flex', flexDirection: { xs:'column',sm: 'column', md: 'row' }, backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(8px)', borderRadius: '20px', padding: 6, marginBottom: 20, fontSize: { xs: 'sm', md: 'base' }, }} >
                        
                            <Box sx={{width:{xs:'100%',sm:'100%',md:'40%'},pt:{md:20},pl:{sm:1,md:4,xl:6},pr:{md:10}, justifyItems:'center'}}>
                           
                            <Box sx={{display: {xs:'block',sm:'flex',md:'flex' },width: '100%',marginBottom: 2,justifyContent:'center',textAlign:'center'}}>
                                  
                            <a href="mailto:reset.startappforstartups@gmail.com">    <Button variant='contained' sx={{width:{xs:'190px',sm:'300px',md:'250px',xl:'300px'},height:{sm:'70px',xl:'70px'}, fontWeight:700,fontSize:{sm:'24px',xl:'20px'}}}>  Mail Us</Button></a> 


            </Box>
                           
           
            <Box sx={{display: {xs:'block',sm:'flex',md:'flex' },width: '100%',justifyContent:'center',textAlign:'center'}}>
                                  
                      <Link href="https://github.com/IT-314-Software-Engineering-G27/Front-end-Main/issues"
                       target='_blank'
                       rel='noopener noreferrer'
                       underline='none' 
                      >
                                     <Button variant='contained' sx={{width:{xs:'190px',sm:'300px',md:'250px',xl:'300px'},bgcolor:'red',height:{sm:'70px',xl:'70px'}, fontWeight:700,fontSize:{sm:'24px',md:'20px',xl:'20px'}}}>  Report an Issue </Button>
                      </Link>
                          
                                      </Box>



    </Box>
    
    
   <Divider sx={{ mx: 'auto', borderColor: 'white', my: 4 }} />
    <Box sx={{width:{lg:3/5,md:5/5},marginBottom: 2}} >
    <Box sx={{overflow:'hidden',borderRadius:'20px',height:'270px'}}>
     <iframe width='100%' height='270px' title="DA-IICT Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14669.989595290104!2d72.6289155!3d23.188537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1678437146026!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe>
                          
    </Box>
     <Box sx={{color:'black', fontSize: { xs: '20px', md: 'sm' }, marginTop: 3,marginBottom: 3,fontWeight:'600'}}>
            Dhirubhai Ambani Institute Of Information And Communication Technology<br/>
            Near Indroda Circle<br/>
            Gandhinagar - 382007<br/>
            Gujarat, India<br/>
     </Box>
     <Divider sx={{ mx: 'auto', borderColor: 'white', my: 1 }} />
                              
     <Box sx={{textAlign:'center', fontWeight:600,fontSize:'20px'}}>
         <Link href="https://startapp-for-startups-g27.vercel.app/home" underline='hover' sx={{mb:1/2, color:'white', justifyContent:'center',}}> startapp_for_startups.com</Link>
     </Box>
    <Box sx={{textAlign:'center',fontSize:'20px',color:'black',fontWeight:600}}>
             <div  >99xxxxxxxx</div>
    </Box>
        </Box>
        </Box> 
        </Box>
            </>
 
     );
}
 
export default ContactUs;