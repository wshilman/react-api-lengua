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


function Score() {
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
        
          <Grid item xs={12} sm={6} md={8}>
           
          </Grid>


        </Grid>
      </Container>
    </main>

    <Footer />
    
  </React.Fragment>





  );
}

export default Score;
