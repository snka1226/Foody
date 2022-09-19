import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <Typography sx={{ width: '8%', flexShrink: 15 }}>#ABCDEF</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Өглөө</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            • Кимчи Жигэ x2
          </Typography>
          <Typography>
            • Тунатай салад x1
          </Typography>
          <Typography>
            <LocationOnIcon sx={{ color: '#8bc34a' }}/>
              СБД, 7р хороо, 4 байр, 89 тоот
          </Typography>
          <Typography>
            <PhoneIcon sx={{ color: '#8bc34a' }} />
              99752288
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
            <Typography sx={{ width: '8%', flexShrink: 0 }}>#00DCF0</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Өглөө</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            • Кимчи Жигэ x2
          </Typography>
          <Typography>
            • Тунатай салад x1
          </Typography>
          <Typography>
            <LocationOnIcon sx={{ color: '#8bc34a' }}/>
              СБД, 7р хороо, 4 байр, 89 тоот
          </Typography>
          <Typography>
            <PhoneIcon sx={{ color: '#8bc34a' }}/>
              99752288
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
            <Typography sx={{ width: '8%', flexShrink: 0 }}>#00DCF0</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Өдөр</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            • Кимчи Жигэ x2
          </Typography>
          <Typography>
            • Тунатай салад x1
          </Typography>
          <Typography>
            <LocationOnIcon sx={{ color: '#8bc34a' }}/>
              СБД, 7р хороо, 4 байр, 89 тоот
          </Typography>
          <Typography>
            <PhoneIcon sx={{ color: '#8bc34a' }}/>
              99752288
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
            <Typography sx={{ width: '8%', flexShrink: 0 }}>#00DCF0</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Орой</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            • Кимчи Жигэ x2
          </Typography> 
          
          <Typography>
            • Тунатай салад x1
          </Typography>
          <Typography>
            <LocationOnIcon sx={{ color: '#8bc34a' }}/>
              СБД, 7р хороо, 4 байр, 89 тоот
          </Typography>
          <Typography>
            <PhoneIcon sx={{ color: '#8bc34a' }}/>
              99752288
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
