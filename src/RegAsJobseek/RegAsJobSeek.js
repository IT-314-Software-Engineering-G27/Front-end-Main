import React from "react";
import {Link} from 'react-router-dom';
import Phone from './Phone.png';
import Logo from './Logo.png';
import { Box,Paper,TextField,Typography} from "@mui/material";


import "./RegAsJobSeek.css";


const RegAsJobSeek = ()=>{
    return(
        <div >
            <Box sx={{display: "flex",
                    justifyContent:"right",
                    padding:"1%",
                    paddingX:"3%",
                    paddingTop:"1rem",

        }} id='jobNav'>

                    <Box sx={{
                        paddingX:"10px",

                    }}>
                    <Link to=''>
                        <img src={Phone} alt="contact us" id='contact' width={25} 
                        style={{paddingRight:"2rem"}}
                        />
                    </Link>
                    </Box>

                    <Box>
                    
                    <button id='sgnin'>
                    <Link to="/" >
                     Sign in   
                     </Link>
                    </button>
                   
                    </Box>
                    </Box>
                    
                    <Paper elevation={0} sx={{display:"flex" ,height:"91vh"}} id='papr'>   
                        <Box sx={{width:"50%"}} id="lbox">
                            {/* <Typography variant="h4" component="h5" sx={{paddingY:"7%", paddingX:"5%"}}> */}
                             <h1 id='h1'>Sign Up as Jobseeker</h1>  
                                {/* </Typography> */}
                         
                                <Box sx={{paddingX:"5%",
                                display:"flex",
                                flexDirection:"column",
                                
                            }} id='inbox'>    
                                 
                                    <TextField  className="Tfield" sx={{ paddingY:"1%"}}
                                     placeholder="Phone Number" type='number' InputProps={{
                                        style: {
                                          borderRadius: "15px",
                                        }
                                      }}
                                     size="small"
                                     />
                                     <TextField  className="Tfield" sx={{ paddingY:"1%"}}
                                     placeholder="College Name(highest Qualifications)" InputProps={{
                                        style: {
                                          borderRadius: "15px",
                                        }
                                      }}
                                     size="small"
                                     />
                                     <TextField  className="Tfield" sx={{ paddingY:"1%"}}
                                     placeholder="Country" InputProps={{
                                        style: {
                                          borderRadius: "15px",
                                        }
                                      }}
                                     size="small"
                                     />
                                     <TextField  className="Tfield" sx={{ paddingY:"1%"}}
                                     placeholder="Age" type="number" InputProps={{
                                        style: {
                                          borderRadius: "15px",
                                        }
                                      }}
                                     size="small"
                                     />
                                     <TextField  className="Tfield" sx={{ paddingY:"1%"}}
                                     placeholder="Highest Qualifications" InputProps={{
                                        style: {
                                          borderRadius: "15px",
                                        }
                                      }}
                                     size="small"
                                     />
                                
                                    <button id="SUbutton">
                                        <Link to=''>
                                        Sign Up
                                        </Link>
                                        </button>
                                        <Box id='txt'>
                                        <p id='txt' >
                                            <Link to='' style={{color:"black"}}>
                                            Need help?
                                            </Link>
                                        </p>
                                        </Box>
                                </Box>
                            {/* </Box> */}
                        </Box>

                        <Box sx={{width:"50%", display:"flex", justifyContent:"center" }} id='rbox'>
                            <img src={Logo} id='logoI'/>
                        </Box>
                    </Paper>
         
            
        </div>
     )
}


export default RegAsJobSeek;