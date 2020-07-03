import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import VerbosImg from "../images/verbos.jpg";
import adjetivos from "../images/adjetivos.png";
import clectora from "../images/clectora.jpg";
import Navbar from "../components/Navbar.js";
import { Link } from "react-router-dom";
import { useStyles } from "./styles.js";
import Footer from "./Footer";
import Hero from "./Hero";
import { createUser } from '../controllers/gamescoreAPI';

function Menu() {
  //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();


  const createUserData = async () => {

    let didEnd = sessionStorage.getItem("SesStorJuegoFinalizado")
    
    if (didEnd==="False") {

      console.log("------------")

    let user = {
      firstName: sessionStorage.getItem("SesStorNombre"),
      lastName: sessionStorage.getItem("SesStorApellido"),
      score: parseInt(sessionStorage.getItem("SesStorPuntaje")) 
    }

    const userDataAPI = await createUser(user)

    console.log(userDataAPI)

    if(userDataAPI === 404 || userDataAPI === 201){

      console.log("Error al crear el usuario")

    }
    sessionStorage.setItem("SesStorJuegoFinalizado", "True");

  }
  
    
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{ backgroundColor: "#ccffff" }}>
        <Hero textLine="Qué querés jugar?" />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={VerbosImg}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center", backgroundColor: "#FFD54F" }}
                  >
                    Verbos
                  </Typography>
                  <Typography>
                    Los verbos son palabras que expresan la acción que ejecuta
                    el sujeto, o el estado o proceso en el que se encuentra. Por
                    ello, siempre concuerdan con el sujeto en persona y número.
                    Además, pueden ir acompañados de complementos que añadan 
                    información sobre cómo ocurre la acción o qué elementos involucra.
                  </Typography>
                </CardContent>
                <CardActions style={{ alignSelf: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/game1"
                  >
                    Jugar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={adjetivos}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center", backgroundColor: "#FFD54F" }}
                  >
                    Adjetivos
                  </Typography>
                  <Typography>
                    Los adjetivos son las palabras que complementan al
                    sustantivo, lo acompañan y proporcionan información de éste,
                    como sus propiedades y características.{" "}
                  </Typography>
                </CardContent>
                <CardActions style={{ alignSelf: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/level1adj"
                  >
                    Jugar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={clectora}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center", backgroundColor: "#FFD54F" }}
                  >
                    Comprensión Lectora
                  </Typography>
                  <Typography>
                    Comprensión Lectora: La comprensión lectora es el proceso de
                    entender las ideas relevantes de algo que leemos, es también
                    relacionarlos con esas ideas que ya sabemos. Es importante
                    para cada uno entender y relacionar el texto con el
                    significado de las palabras. . . .{" "}
                  </Typography>
                </CardContent>
                <CardActions style={{ alignSelf: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/Lvl1CL"
                  >
                    Jugar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={createUserData}
          component={Link}
          to="/scoreboard"
        >
          {" "}
          Finalizar Juego
        </Button>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default Menu;
