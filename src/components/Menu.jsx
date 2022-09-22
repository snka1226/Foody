import { Button } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { AddNewFoodModal } from './addNewFood'
import menu from "../image/menu.png"
import { useGetDocsFromFireBase } from '../customHook/getDocsHook'

const Menu = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const a = useGetDocsFromFireBase('foods');
  console.log(a)
  return (
      <Box sx={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
           <Box
        sx={{
            background: "#eeeeee",
            width: "500px",
            height: "500px",
            borderRadius: '20px'
           
        }}>
              <Box
                //   sx={{
                //     width: "300px",
                //     height: "300px",
                //     marginLeft: '20%',
                //     marginTop: '10%',
                //     borderRadius: '50%'
                //   }}
              >
                  <img src={menu} style={{width:'200px', marginLeft: '30%', marginTop: '15%'}}></img>
                </Box>
                <Box sx={{ color: "white" }}>
                  <Button onClick={()=>setIsOpenModal(true)}  variant="contained" sx={{marginTop: '15%', marginLeft: '33%', background:"#8bc34a"}}>
                      Шинэ Хоол нэмэх
                  </Button>
          </Box>
          </Box>
          <AddNewFoodModal value={{isOpenModal,setIsOpenModal }} />          
   </Box>
  )
}

export default Menu