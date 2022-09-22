import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { height } from '@mui/system';

export default function BasicTextFields() {
    return (
      <Box
        // component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch' },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            width: "100vw",
            height: "50vh",
            marginLeft: "40%",
            // marginTop:"30px"
        }}
      >
            <TextField id="outlined-basic" label="И-Мэйл" variant="outlined" />
        <TextField id="filled-basic" label="Утасны дугаар" variant="outlined" />
        <Box>
            <Button sx={{width: "10vw", marginLeft:"20%"}} id="filled-basic" variant="outlined">Бүртгүүлэх</Button>
        </Box>
      </Box>
    );
}