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
import { Box } from "@material-ui/core";
import VerbosImg from "../images/verbos.jpg";
import adjetivos from "../images/adjetivos.png";
import sustantivos from "../images/sustantivos.jpg";
import Navbar from "../components/Navbar.js";
import { Link } from "react-router-dom";
import { Copyright } from "./Copyright.jsx";
import { useStyles } from "./styles.js";

function Menu() {
  //TODOS LOS ESTILOS ESTÁN ACÁ...
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
              color="textPrimary"
              gutterBottom
            >
              ¿Qué trivia queres jugar?
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
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
                  <Typography gutterBottom variant="h5" component="h2">
                    Verbos
                  </Typography>
                  <Typography>
                    Los verbos son palabras que expresan la acción que ejecuta
                    el sujeto, o el estado o proceso en el que se encuentra. Por
                    ello, siempre concuerdan con el sujeto en persona y número.
                    Los verbos son el núcleo del predicado. Además, pueden ir
                    acompañados de complementos que añadan información sobre
                    cómo ocurre la acción o qué elementos involucra.{" "}
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
                  <Typography gutterBottom variant="h5" component="h2">
                    Adjetivos
                  </Typography>
                  <Typography>
                    Los Adjetivos son: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut sodales molestie tellus, eget euismod
                    velit ultrices a. .{" "}
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
                  image={sustantivos}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sustantivos
                  </Typography>
                  <Typography>
                    Los Sustantivos son: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut sodales molestie tellus, eget euismod
                    velit ultrices a. .{" "}
                  </Typography>
                </CardContent>
                <CardActions style={{ alignSelf: "center" }}>
                  <Button size="small" variant="contained" color="secondary">
                    Jugar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box mt={5}>
        <Copyright />
      </Box>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Menu;
