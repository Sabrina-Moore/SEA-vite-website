//data card
import { useState } from 'react';
import * as React from 'react';

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

//modal
import Modal from '@mui/material/Modal';

//properties are what we're bringing into the function
export default function DataCard({name, imageURL, text}) {
  
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter +1);

    console.log("Button clicked");
  }
  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Card >
      <Typography align='center'> {name}</Typography>
      <CardMedia component="img" height="200px" image={imageURL} sx={{ objectFit:"cover"}}/>
      <CardContent sx={{ pt: 0 }} >
        <Typography align='center'> {text}</Typography>
      </CardContent>
      <Button
              variant="contained"
              sx={{ px: 6, mx: "auto" }}
              onClick={handleClick}
              >
              Quack!
            </Button>
            <Typography >
              Quacks so far: {counter}
            </Typography>
      <Button onClick={handleOpen}> 
        Open modal
      </Button>
      <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       hideBackdrop={true}
       >
        <Box >
          <Typography id="modal-modal-title" variant="h2" component="h2">
        Quack
        </Typography>
          </Box>

      </Modal>
    </Card>
  );
}



