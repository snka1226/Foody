// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';


// function BuildOrder() {
//     const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//       <div>
//           <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//             {/* <Typography sx={{ width: '8%', flexShrink: 15 }}>#ABCDEF</Typography> */}
//             <Typography sx={{ color: 'text.secondary' }}>Өглөө</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             • Кимчи Жигэ x2
//           </Typography>
//           <Typography>
//             • Тунатай салад x1
//           </Typography>
//           <Typography>
//             <LocationOnIcon sx={{ color: '#8bc34a' }}/>
//               СБД, 7р хороо, 4 байр, 89 тоот
//           </Typography>
//           <Typography>
//             <PhoneIcon sx={{ color: '#8bc34a' }} />
//               99752288
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   )
// }

// export default BuildOrder

import { useState } from "react";
import { Typography, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./BuildOrderStyle";

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = useState(false);
  const propsy = props.data;

  const [checked, setChecked] = useState([0]);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        marginBottom: "1em",
        backgroundColor: "#FFF",
        border: "1px solid silver",
        borderRadius: "10px"
      }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>#ABCDEF</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#FFF",
              borderBottom: "1px solid silver",
            }}
          >
            {/* ы */}
            <ListItem
              secondaryAction={<ListItemText primary={`x${`2`}`} />}
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={'Кимчи Жигэ'} />
                {/* <ListItemText primary={'• Тунатай салад'} /> */}
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              borderTop: "1px solid silver",
            }}
          >
            <ListItem sx={{ gap: "1em", }}>
              <LocationOnIcon sx={{ color: "#8bc34a" }} />
              <ListItemText primary={"СБД, 7р хороо, 4 байр, 89 тоот"} />
            </ListItem>
            <ListItem sx={{ gap: "1em", }}>
              <LocalPhoneIcon sx={{ color: "#8bc34a" }}/>
              <ListItemText primary={"99752288"} />
            </ListItem>
          </List>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
