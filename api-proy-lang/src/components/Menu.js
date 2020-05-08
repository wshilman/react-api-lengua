import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Background from "../images/background_image.jpg";
import { Box } from "@material-ui/core";
import VerbosImg from "../images/verbos.jpg";
import Navbar from "../components/Navbar.js";
import {Link} from 'react-router-dom';
import { Copyright } from "./Copyright.jsx";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 100,
    maxWidth: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  image: {
    backgroundImage: "url(" + Background + ") ",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

function Menu() {
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
              ¿Que trivia queres jugar?
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
                    Los verbos son: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut sodales molestie tellus, eget euismod
                    velit ultrices a. .{" "}
                  </Typography>
                </CardContent>
                <CardActions style={{alignSelf:'center'}}>
                  <Button size="small" variant='contained' color="secondary" component={Link}to="/level">
                    Jugar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
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
                <CardActions style={{alignSelf:'center'}}>
                  <Button size="small" variant='contained' color="secondary">
                    Jugar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
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
                <CardActions style={{alignSelf:'center'}}>
                  <Button size="small" variant='contained' color="secondary">
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