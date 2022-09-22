import { Button, CardMedia, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
// import addFood from "../image/food.png"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { setDocToFirebase } from '../firebase/setDocToFIrebase';
import { uploadBytes, ref ,getDownloadURL} from 'firebase/storage';
import { storage } from '../firebase/firebase';
import { uploadImageToFirebase } from '../firebase/storage';
export const AddNewFoodModal= (props) => {
  const { isOpenModal, setIsOpenModal } = props.value;
  const [ImageUrl, setImageUrl] = useState();
  const [foodDetails,setFoodDetails]=useState({})
  const [image,setImage]=useState('')
  const takeUserInput = (event) => {
    setFoodDetails({ ...foodDetails, [event.target.name]: event.target.value });
  }
  

  return (
    <Box sx={{ width: `50vw`, height: `200%`, background: "#eeeeee", borderRadius: "20px", display: isOpenModal === true ? "block" : 'none', position: 'absolute', top: 0, left: `29%`, }}>
      
      <Box sx={{display:'flex',justifyContent:'space-around', marginTop:"20px"}}>
        <Button onClick={() => setIsOpenModal(false)}>
          <ClearIcon sx={{ color: "black" }} />
        </Button>  
        <Typography sx={{ color: "black"}}>
          Хоол нэмэх
        </Typography>
        <Button variant="contained" onClick={
          async () => {
            await setDocToFirebase(`foods/${foodDetails.foodName}`, foodDetails);
            await uploadImageToFirebase(foodDetails.foodName,image)
        
        }}
        
          sx={{ background: "#8bc34a" }}>Хадгалах</Button>
      </Box>

      <Box sx={{display:'flex',justifyContent:'space-evenly',marginTop:"80px",}}>
        <Box>
          <CardMedia
            component="img"
            src={ImageUrl}
          />
          <input type='file' onChange={async (e) => {
          
            var file = e.target.files[0];
            setImage(file)
            var reader = new FileReader();
            reader.onload = function (event) {
              setImageUrl(event.target.result);
            };
            reader.readAsDataURL(file);
          }}/>
       </Box>
        <Box >
          <Typography>Хоолны нэр</Typography>
          <TextField name='foodName' onChange={e=>takeUserInput(e)} sx={{ width: "100%" }} id="outlined-basic" label="Энд бичнэ үү" variant="outlined" />
          <Typography>Дэлгэрэнгүй</Typography>
          <TextField name='foodDetails' onChange={e => takeUserInput(e)} sx={{ width: "100%" }} id="outlined-basic" label="Энд бичнэ үү" variant="outlined" />
        <Box sx={{display:"flex"}}>
          <Typography>Хоолны үнэ</Typography>
          <TextField name='foodName' onChange={e=>takeUserInput(e)} sx={{ width: "20%" }} id="outlined-basic" label="Энд бичнэ үү" variant="outlined" />
          <Typography>Төрөл</Typography>
          <TextField name='foodDetails' onChange={e=>takeUserInput(e)} sx={{width:"20%"}} id="outlined-basic" label="Энд бичнэ үү" variant="outlined" />
        </Box>
          
        </Box>
      </Box>
    </Box>
  )
}
