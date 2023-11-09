import { Paper,TextField,Grid ,Button, Card,Box} from "@mui/material";
import {useRef , useState} from "react";
import  "./EventRegistration.css";

export default function EventRegistration(){
   const inputRef1= useRef(null);

   const [image1,setImage1] = useState("");
 

   const handleImageClick1= () =>{
       inputRef1.current.click();
   }
 

   const handleImageChange1= (event) =>{
       const file1= event.target.files[0];
       setImage1(file1);
       }



   return(
       <div >
        
       <h1 style={{display:"flex",
           flexDirection:"column",
           justifyContent:"center",
           alignItems:"center"
       }}>Edit Profile</h1>

       <div style={{display:"flex",
           flexDirection:"column",
           justifyContent:"center",
           alignItems:"center"
       }}>
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
          disabled
          id="outlined-disabled-1"
          label="User Name"
          defaultValue="UserName"
          style={{margin: "5px", width:"75%"}}
          />

          <TextField
            disabled
          id="outlined-disabled-2"
          label="Email"
          defaultValue="Email"
          style={{margin: "5px", width:"75%"}}
          />
           <TextField
               id="outlined-multiline-static"
               label="First Name"
             
               defaultValue="Enter first name"
               style={{margin: "5px", width:"75%"}}
           />

            <TextField
               id="outlined-multiline-static"
               label="Last Name"
             
               defaultValue="Enter Last name"
               style={{margin: "5px", width:"75%"}}
           />
            <TextField
               id="outlined-multiline-static"
               label="PhoneNo"
             
               defaultValue="PhoneNo"
               style={{margin: "5px", width:"75%"}}
           />
            <TextField
               id="outlined-multiline-static"
               label="College"
             
               defaultValue="College"
               style={{margin: "5px", width:"75%"}}
           />

            <TextField
               id="outlined-multiline-static"
               label="Country"
             
               defaultValue="Country"
               style={{margin: "5px", width:"75%"}}
           />
                 <TextField
               id="outlined-multiline-static"
               label="Age"
             
               defaultValue="Age"
               style={{margin: "5px", width:"75%"}}
           />
             <TextField
               id="outlined-multiline-static"
               label="Highest Qualification"
             
               defaultValue="Highest Qualification"
               style={{margin: "5px", width:"75%"}}
           />
             <TextField
               id="outlined-multiline-static"
               label="Skills"
             
               defaultValue="Skills"
               style={{margin: "5px", width:"75%"}}
           />

            <TextField
               id="outlined-multiline-static"
               label="Bio"
               multiline
               rows={6}
               defaultValue="Write the Bio here.."
               style={{margin: "5px", width:"75%"}}
           />

           <h4>Click on the image to upload new profile image</h4>
           <div style={{width:"75%",
               display:"flex",
               justifyContent:"center"
           }}>
           
           <Box style={{
               margin: "5px", 
               width:"30%" , 
               display:"flex",
               alignItems:"center",
              
               }}>

               <Box style={{
               display:"flex",
               justifyContent:"center",
               //  margin:"30px"
               }}
               onClick ={handleImageClick1}
               >
                {/* <img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}/> */}
                {image1 ?(<img src={URL.createObjectURL(image1)} style={{height:"250px" , width:"250px"}}/>):(<img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}/>)}
                <input type="file" ref={inputRef1} onChange={handleImageChange1} style={{display:"none"}}></input>
               </Box>

             
           </Box>
           </div>
           <Button variant="contained" style={{width:" 100px",border:"solid white 1px", borderRadius:"5px"}}>Submit</Button>
          
       </Paper>
       </div>
       </div>
   )
}