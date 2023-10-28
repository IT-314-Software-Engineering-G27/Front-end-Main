import { Paper,TextField,Grid ,Button} from "@mui/material";
import {useRef , useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function CompanyJobRegistration(){
   

   return(
       <div style={{display:"flex",
           flexDirection:"column",
           justifyContent:"center",
           alignItems:"center"
       }}>
       <h1>Company's Job Registration</h1>
       <Paper elevation={10} 
       style ={{
           margin: "30px",
           marginTop:" 15px",
           width: "80vw",
           display:"flex",
           flexDirection:"column",
           alignItems:"center",
           
          // height:"78vh",
           padding:"30px",
           gap:"15px"
       }}>
                <TextField
               required
               id="outlined-required"
               label="Comapany's name"
               defaultValue="Enter the name of your Company"
               style={{margin: "5px", width:"75%"}}
               />
               <TextField
               required
               id="outlined-required"
               label="Job Profile"
               defaultValue="Enter the Job Profile"
               style={{margin: "5px", width:"75%"}}
               />
               
           <TextField
               id="outlined-multiline-static"
               label="Job Description"
               multiline
               rows={6}
               defaultValue="Write the description here.."
               style={{margin: "5px", width:"75%"}}
           />
            <FormControl fullWidth sx={{ m: 1 }}  style={{width:"75%"}}>
          <InputLabel htmlFor="outlined-adornment-amount" >Salary</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
           
          />
        </FormControl>
          
           <Button variant="contained" style={{width:" 200px",border:"solid white 1px", borderRadius:"5px"}}>Submit</Button>
       </Paper>
       </div>
   )
}