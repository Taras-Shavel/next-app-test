"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import accordionData from "../data/accordion.json";
import { IAccordion } from '@/interfaces/accordion.interface';

const data: IAccordion[] = accordionData;

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AccordionUsage = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<IAccordion | null>(null);

  const handleOpen = (item: IAccordion) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="w-full p-[16px] bg-[#F5DACC] box-border">
      <Accordion className="w-full h-full flex flex-col justify-center">
        <AccordionSummary
          className="flex"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          CATEGORY
        </AccordionSummary>
        <AccordionDetails className="h-[372px] p-[12px] bg-[#FDF8F5] box-border overflow-y-scroll">
          {data.map((item) => (
            <div
              key={item.id}
              className="h-[48px] bg-white p-[12px] px-[16px] rounded-md mb-[10px] flex items-center cursor-pointer"
              onClick={() => handleOpen(item)}
              // style={{ cursor: 'pointer' }}
            >
              <img className="w-[24px] h-[24px] mr-[16px]" src={item.icon} alt={item.title} />
              <h3 className="text-[14px] font-medium">{item.title}</h3>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      {selectedItem && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'grey',
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-title" variant="h6" component="h2">
              {selectedItem.title}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Details about element: 
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export { AccordionUsage };
