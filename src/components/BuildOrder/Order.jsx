import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import BuildOrder from './BuildOrder';
import { Box, Card } from '@mui/material';
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useState } from 'react';
import { styles } from "./OrderStyle"

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const days = [
    { week: `Даваа`, datas: [] },
    { week: `Мягмар`, datas: [] },
    { week: `Лхагва`, datas: [] },
    { week: `Пүрэв`, datas: [] },
    { week: `Баасан`, datas: [] },
    { week: `Бямба`, datas: [] },
    { week: `Ням`, datas: [] },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const [array, setArray] = useState([]);
  // for (let i = 0; i < 30; i++) {
  //   setArray([...array, i]);
  // }

  return (
    <div>
      <Box sx={styles.weekSection}>
      <Box sx={styles.daySection}>
        {days.map((el, idx) => {
          return (
            <Card sx={styles.dayWithCard} key={idx}>
              <Box sx={styles.dayTitleSection}>
                <Typography>{el.week}</Typography>
                <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                  <ViewInArIcon />
                  <Typography>{12}</Typography>
                </Box>
              </Box>
              <Card sx={styles.orderCardSection}>
                {days.map((el, idx) => <BuildOrder key={idx} title={el.week}/>)}
                {/* {el.datas.map((e, i) => <CustomizedAccordions key={i} data={e.data} id={e.uid}/>)} */}
              </Card>
            </Card>
          );
        })}
      </Box>

      <Box sx={styles.packedSection}>
        <Box sx={styles.packedTitle}>
          <Typography component="div" variant="h5">
            Савласан
          </Typography>
        </Box>
        <Box sx={styles.packedSectionWithin}>
          {days.map((el, idx) => {
            return (
              <Card sx={styles.dayWithCard} key={idx}>
                <Box sx={styles.dayTitleSection}>
                  <Typography>{el.week}</Typography>
                  <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                    <ViewInArIcon />
                    <Typography>{}</Typography>
                  </Box>
                </Box>
                <Card sx={styles.orderCardSection}>
                  {/* {days.map((el, idx) => <CustomizedAccordions key={idx} title={el.week}/>)} */}
                </Card>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
    </div>
  );
}
