import { Paper,TextField,Grid ,Button} from "@mui/material";
import {useRef , useState} from "react";

export default function EventRegistration(){
   const inputRef1= useRef(null);
   const inputRef2= useRef(null);
   const inputRef3= useRef(null);
   const [image1,setImage1] = useState("");
   const [image2,setImage2] = useState("");
   const [image3,setImage3] = useState("");

   const handleImageClick1= () =>{
       inputRef1.current.click();
   }
   const handleImageClick2 = () =>{
       inputRef2.current.click();
   }
   const handleImageClick3 = () =>{
       inputRef3.current.click();
   }

   const handleImageChange1= (event) =>{
       const file1= event.target.files[0];
       setImage1(file1);
       }

   const handleImageChange2= (event) =>{
       const file2= event.target.files[0];
       setImage2(file2);
       }
   const handleImageChange3= (event) =>{
       const file3= event.target.files[0];
       setImage3(file3);
        }

   return(
       <div style={{display:"flex",
           flexDirection:"column",
           justifyContent:"center",
           alignItems:"center"
       }}>
       <h1>Event Registration</h1>
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
               label="Startup Idea"
               defaultValue="Type the Idea here.."
               style={{margin: "5px", width:"75%"}}
               />
           <TextField
               id="outlined-multiline-static"
               label="Idea Description"
               multiline
               rows={6}
               value="text"
               placeholder=""
               style={{margin: "5px", width:"75%"}}
           />

           <h4>Click on the image to add a new image</h4>
           <div style={{width:"75%",
               display:"flex",
               justifyContent:"center"
           }}>
           
           <Grid container spacing={11}  style={{
               margin: "5px", 
               width:"100%" , 
               display:"flex",
               alignItems:"center",
              
               }}>

               <Grid xs={4} style={{
               display:"flex",
               justifyContent:"center",
               //  margin:"30px"
               }}
               onClick ={handleImageClick1}
               >
                {/* <img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}/> */}
                {image1 ?(<img src={URL.createObjectURL(image1)} style={{height:"250px" , width:"250px"}}/>):(<img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}/>)}
                <input type="file" ref={inputRef1} onChange={handleImageChange1} style={{display:"none"}}></input>
               </Grid>

               <Grid xs={4} style={{
               display:"flex",
               justifyContent:"center"}}
               onClick ={handleImageClick2}
               >
                   {/* <img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}></img> */}
                   {image2 ?(<img src={URL.createObjectURL(image2)} style={{height:"250px" , width:"250px"}}/>):(<img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}/>)}
                   <input type="file" ref={inputRef2} onChange={handleImageChange2} style={{display:"none"}}></input>
               </Grid>

               <Grid xs={4} style={{
               display:"flex",
               justifyContent:"center"}}
               onClick ={handleImageClick3}
               >
                   {/* <img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}></img> */}
                   {image3 ?(<img src={URL.createObjectURL(image3)} style={{height:"250px" , width:"250px"}}/>):(<img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{width:"100%"}}/>)}
                   <input type="file" ref={inputRef3} onChange={handleImageChange3} style={{display:"none"}}></input>
               </Grid>
           </Grid>
           </div>
           <Button variant="contained" style={{width:" 200px",border:"solid white 1px", borderRadius:"5px"}}>Submit</Button>
       </Paper>
       </div>
   )
}