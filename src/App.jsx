import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

import './App.css'
import DataCard from './DataCard.jsx'
import ducks from './array.json'

// import characters from './protagonists.json'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
  console.log("My data:", ducks);
  return (
    <>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Ducks
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          A collection of ducks, thirsting for mayhem.
        </Typography>
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
          {ducks.map((ducks, index) => (
          <Grid size={2} key= {index} >
            <DataCard
            title={ducks.title}
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

{/*       <Item><Card sx={{ maxWidth: 345 }}> 
        <CardMedia
          component="img"
          height="200"
          image="https://www.allaboutbirds.org/guide/assets/photo/65533521-480px.jpg"
          alt="Duck 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Duck
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Quack!
          </Typography>
        </CardContent>
      <CardActionArea>
        <cardActions>
          <Button 
          variant="contained"
          color="error"
          // I'm trying to use custom CSS defined in the file App.css,
          // but it isn't working. Why, and how can I fix it?
          className="characterButton"
        >
          Choose mayhem
        </Button>
        </cardActions>
      </CardActionArea>
        
    </Card> */}