import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MuiAccordian() {
  const [expand, setExpand] = useState('panel0');
  function handleExpand(isExpanded, panel) {
    console.log(expand);
    console.log(isExpanded);
    setExpand(isExpanded ? panel : 'panel0');
  }
  console.log(expand);
  return (
    <div>
      <Accordion
        expanded={expand === 'panel1'}
        onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel1')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expand === 'panel2'}
        onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel2')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel2-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expand === 'panel3'}
        onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel3')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel3-header">
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MuiAccordian;
