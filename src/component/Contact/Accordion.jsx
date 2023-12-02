import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';



const AAccordion = () => {
  return (
    <div className='AAC'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is a Learning Management System (LMS) </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Learning Management System (LMS) is a software application that facilitates the
           administration, tracking, and delivery of educational content. It provides a centralized 
          platform for organizing, managing, and delivering online courses and training materials.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What types of courses are offered on our LMS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our LMS offers a diverse range of courses, including professional development, technical skills, soft skills, 
          and industry-specific training. We aim to provide a comprehensive learning experience to meet various needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can learners track their progress in a course?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Absolutely! The LMS includes features for learners to track their progress, view completed modules,
           and monitor assessment scores.
           This allows for self-assessment and identification of areas that may need further review.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the primary benefits of implementing an LMS in an organization?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Implementing an LMS offers several key benefits, including centralized training management, 
          improved accessibility, cost savings, and enhanced tracking and reporting capabilities.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  )
}

export default AAccordion