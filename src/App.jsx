import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import './App.css'
import DataCard from './DataCard.jsx'
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
          <Grid item size={2}>
            <DataCard
            title="Duck"
            imageURL={"https://www.allaboutbirds.org/guide/assets/photo/308743931-480px.jpg"} 
            text={[
              "A duck about to do mayhem."
            ]}
            />
          </Grid>
        
          <Grid item size={2}>
            <DataCard
            title="Duck"
            imageURL={"https://s7d1.scene7.com/is/image/isp/wabruddyduckmale-mkr?qlt=100&wid=1200&ts=1759251643047&$ImageComponent$&fit=constrain"} 
            text={[
              "A duck about to do mayhem."
            ]}
            />
          </Grid>
        
          <Grid item size={2}>
            <DataCard
            title="Duck"
            imageURL={"https://media.audubon.org/nas_birdapi_hero/h_ring-necked-duck_004_spring_california_beckymatsubara_flickrcc-by-2.0_breeding-adult-male.jpg?height=944&auto=webp&quality=90&fit=bounds&disable=upscale"} 
            text={[
              "A duck about to do mayhem."
            ]}
            />
          </Grid>

           <Grid item size={2}>
            <DataCard
            title="Duck"
            imageURL={"https://www.marylandzoo.org/wp-content/uploads/2017/11/woodduck2-1024x683.jpg"} 
            text={[
              "A duck about to do mayhem."
            ]}
            />
          </Grid>
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