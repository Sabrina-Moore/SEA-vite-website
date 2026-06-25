import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import DataCard from './DataCard.jsx'
import ducks from './duckArray.json'
import geese from './geeseArray.json'

//goal - temporary drawer for a navigation bar to switch between duck cards or goose cards

export default function NavBar ({Animal, isDrawerOpen, setIsDrawerOpen}){
    const [animal, setAnimal] = useState('ducks');
    const [open, setOpen] = React.useState(false);

const handleSelectAnimal = (type) => {
    setAnimal(type);
    setIsDrawerOpen(false);

   //fix the states so that it's actually in the child component and make sure it's rendering in the return 
    // conditional statement for choosing a datacard = if click duck then duck and send to App.jsx
}
    const currentAnimal = animal === 'ducks' ? ducks : geese;

  const dataArray = [
    {text: 'duck', collection: 'ducks'},
    {text: 'Geese', collection: 'geese'}
  ];

return (
    <>
   {/*</>{animal === "ducks :(duck component ): (Geese component"} <> {/* <--- THIS IS THE PARENT ELEMENT WRAPPER */}
      {/*Navigation bar dropdown */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dropdown
          </Typography>
          <Button color="inherit" onClick={() => setIsDrawerOpen(true)}>
            Birds
          </Button>
        </Toolbar>
      </AppBar>

    {/*Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Typography variant="h6" sx={{ p: 2, textAlign: 'center' }}>
            Birds
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleSelectAnimal('ducks')}>
                <ListItemText primary="Ducks" />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleSelectAnimal('geese')}>
                <ListItemText primary="Geese" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>


      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h2" align="center" sx={{ py: 2 }}>
          {animal === 'ducks' ? 'Ducks Army' : 'Geese Faction'}
        </Typography>

        <Grid container spacing={4}>
          {currentBirds.map((bird, index) => (
            <Grid item xs={12} sm={6} md={4} key={`${animal}-${index}`}>
              <DataCard
                title={bird.title}
                imageURL={bird.imageURL} 
                text={Array.isArray(bird.text) ? bird.text[0] : bird.text}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </> 
  );
}