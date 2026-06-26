//cards and containers
import * as React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';


//button 
import Button from "@mui/material/Button";

//use state
import { useState } from 'react';

//grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//search bar
import TextField from '@mui/material/TextField';

//sidebar
/*
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';*/




//project files
import './App.css'
import DataCard from './DataCard.jsx'
import ducks from './duckArray.json'
import geese from './geeseArray.json'
//import NavBar from './navBar.jsx'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


function App() {

  //for non-working drawer
   /*const [animal, setAnimal] = useState('ducks');
   const [open, setOpen] = React.useState(false);
   const currentAnimal = animal === 'ducks' ? ducks : geese;*/

   //states for modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //states for searchBar
  const [search, setSearch] = useState("");

  console.log(search);

  function handleInput(event){
    setSearch(event.target.value);
  }

//search filter
    const filteredDucks = ducks.filter((duck) => 
      duck.name.toLowerCase().includes(search.toLowerCase())
);
//optional: also filter for text keywords


  return (
    <>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        > Ducks
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          A collection of ducks, thirsting for mayhem.
          {/*{animal === 'ducks'
          ? 'A collection of ducks, thirsting for mayhem.'
         : 'A collection of geese, specialized in combat.'}*/}
        </Typography>
      </Container>

      {/*Text field for search bar display */}
      <Container sx={{ display: "flex", justifyContent: "center", mt: 4, }}
      >
          <TextField 
            
            label="Search by name" 
            variant="outlined" 
            sx={{width: 400}} 
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
              />
        </Container>

      <Container maxWidth="sm"  sx={{
         py: 4,
         justifyContent: "center"
         }} >
        <Grid container 
          spacing={4} 
          columns={4}
          columnspacing={{ xs: 1, sm: 2, md: 3}} 
          >
            {/*Populating DataCard with array*/}
          {filteredDucks.map((ducks, index) => ( 
          <Grid size={2} key= {index} >
            <DataCard
            name={ducks.name}
            imageURL={ducks.imageURL} 
            text={ducks.text}
            />
          </Grid>
         ))}
        </Grid>
      </Container>
    </>
  )
}



export default App;

