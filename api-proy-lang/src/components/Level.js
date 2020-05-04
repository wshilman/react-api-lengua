import React from "react";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Background from "../images/background_image.jpg";
import { Box } from "@material-ui/core";
import Navbar from "../components/Navbar.js";

import { Copyright } from "./Copyright.jsx";

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
}));

export default function Level() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
            >
              VERBOS!
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid}>

          {/* NIVEL 1 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
                <h2 style={{textAlign:"center"}}> información extra 1 </h2>
                <p style={{textAlign:"center"}}> El verbo es la parte de la oración o categoría léxica que expresa una acción, movimiento, existencia, 
                  consecución, condición o estado del sujeto. Sintácticamente representa una predicación. 
                  En la oración, el verbo conjugado funciona como el núcleo sintáctico del predicado. </p>
              </Card>
            </Grid>

            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card} style={{backgroundColor:"#64B5F6"}}>
            <p style={{textAlign:"center"}}> acá va el juego, nivel 1 </p>
            {/* <Button variant="contained" size="small" color="secondary"> 
              Listo 
            </Button> */}



            </Card>
            </Grid>
          </Grid>


          {/* NIVEL 2 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
                <h2 style={{textAlign:"center"}}> información extra 2 </h2>
                <p style={{textAlign:"center"}}> El verbo es la parte de la oración o categoría léxica que expresa una acción, movimiento, existencia, 
                  consecución, condición o estado del sujeto. Sintácticamente representa una predicación. 
                  En la oración, el verbo conjugado funciona como el núcleo sintáctico del predicado. </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card} style={{backgroundColor:"#64B5F6"}}>
            <p style={{textAlign:"center"}}> acá va el juego, nivel 2 </p>




            </Card>
            </Grid>
          </Grid>


          {/* NIVEL 3 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
                <h2 style={{textAlign:"center"}}> información extra 3 </h2>
                <p style={{textAlign:"center"}}> El verbo es la parte de la oración o categoría léxica que expresa una acción, movimiento, existencia, 
                  consecución, condición o estado del sujeto. Sintácticamente representa una predicación. 
                  En la oración, el verbo conjugado funciona como el núcleo sintáctico del predicado. </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card} style={{backgroundColor:"#64B5F6"}}>
            <p style={{textAlign:"center"}}> acá va el juego, nivel 3 </p>




            </Card>
            </Grid>
          </Grid>




        </Container>
      </main>


      {/* Footer */}
      <Box mt={5}>
        <Copyright />
      </Box>
      <br />
      {/* End footer */}
    </React.Fragment>
  );
}
