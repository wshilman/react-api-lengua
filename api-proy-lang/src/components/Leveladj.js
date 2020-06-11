import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Background from "../images/background_image.jpg";
import { Box, Button } from "@material-ui/core";
import Navbar from "../components/Navbar.js";
import { Copyright } from "./Copyright.jsx";
import { Link } from 'react-router-dom';
import { red, lightGreen } from '@material-ui/core/colors';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundImage: "url(" + Background + ") ",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  lightGreen: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
  },
  red: {
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[800],
    },
  },
}));


const Leveladj = () => {
  const classes = useStyles();

  //ESTO ES PARA HACER LOS BOTONES QUE APARECEN CADA CIERTO TIEMPO...
  var arr = ["ADJETIVOS","TRIUNFADORA","GANADOR","FLACO","RAPIDA","ENTRENADOR","FIN"];
  var index = 0;
  var interval = setInterval(function myVar(){
    document.getElementById("demo").innerHTML = arr[index++ % arr.length];
    if(index == arr.length){
      clearInterval(interval);
    }
  }, 1000)


  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h3"
              align="center"
            >
              NIVEL 3
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid}>
          
          {/* NIVEL 3 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#e57373"}}>
                <h2 style={{textAlign:"center"}}> Encontrá las faltas </h2>
                <p style={{textAlign:"center", margin:"0"}}> la idea acá es que aparezcan muchas palabras, 
                bien o mal escritas, y que uno tenga que identificar si están bien o mal con dos 
                botones abajo. si es posible que las palabras aparezcan a un lado marcadas en rojo 
                las que hicieron mal y en verde las que hicieron bien.
                </p>
                <br />
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFF59D"}}>
                <Grid container justify="center" alignContent="center">
                  <Grid item xs={12} sm={12} md={6} style={{backgroundColor:"#FFCC80"}} align="justify"> 


                    <div style={{textAlign:"center"}}>
                        {/* ESTO ES LO QUE CAMBIA CADA CIERTO TIEMPO */}
                        <p id="demo"> ADJETIVOS </p>
                        <br />
                        <br />
                        <br />
                        {/* ESTE ES EL BOTON QUE DEBERIA HACER CLICK Y EMPIECEN A CAMBIAR LAS PALABRAS */}
                        <Button variant='contained' color='primary'> empezar </Button>

                    </div>


                  </Grid>
                  <Grid item xs={12} sm={12} md={6}> 
                    <ul style={{listStyle:"none", display:"flex", padding:"0", margin:"0", justifyContent:"space-evenly"}}>
                      <li><Button className={classes.lightGreen} size='large' variant='contained' color='secondary'> 
                        BIEN 
                      </Button></li>

                      <li><Button className={classes.red} size='large' variant='contained' color='secondary' > 
                        MAL
                      </Button></li>
                    </ul>



                  </Grid>

                </Grid>

              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-evenly"}}>
                <li><Button size='large' variant='contained' color='secondary' component={Link}to="/menu"> 
                  Volver 
                </Button></li>

                <li><Button size='large' variant='contained' color='secondary' > 
                  ANSWER
                </Button></li>
              </ul>
            </Grid>


          </Grid>
        </Container>
      </main>

      <Footer />
      
    </React.Fragment>
  );
}

export default Leveladj;