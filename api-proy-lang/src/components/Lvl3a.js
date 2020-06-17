import React, { useState, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Navbar from "./Navbar.js";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import { useStyles } from "./styles.js";


const Lvl3a = () => {
    //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{backgroundColor:"#ccffff"}}>

        <Hero textLine='Nivel 2 - adjetivos' />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#DCE775"}}>
                <h2 style={{textAlign:"center"}}> Completá las frases </h2>
                <p style={{textAlign:"center", margin:"0"}}> A tu derecha tenés uun montón de palabras....
                alguien que redacte esto mejor... 
                </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFCC80"}}>
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={12} md={6} style={{backgroundColor:"#FFF59D"}}> 
                    <p style={{textAlign:"justify", margin:"5px"}}> 


                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{margin:"auto"}}> 
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> bla  </p> 
                      <p className={classes.words} draggable="true"> bla </p> 
                      <p className={classes.words} draggable="true"> bla </p> 
                    </ul>
                    <br />
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> bla </p> 
                      <p className={classes.words} draggable="true"> bla </p> 
                      <p className={classes.words} draggable="true"> bla </p> 
                    </ul>
                    <br />
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> bla </p> 
                      <p className={classes.words} draggable="true"> bla </p> 
                      <p className={classes.words} draggable="true"> bla </p> 
                    </ul>
                    <br />
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> bla </p> 
                      <p className={classes.words} draggable="true"> bla </p> 
                    </ul>
                  </Grid>
                </Grid>

              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
              <Button size='large' variant='contained' color='secondary' component={Link}to="/menu"> 
                Volver 
              </Button>

              <Button size='large' variant='contained' color='secondary'> 
                answer 
              </Button>
                    
              <Button size='large' variant='contained' color='secondary' component={Link}to="/level3adj"> 
                Siguiente 
              </Button>   
            </Grid>


          </Grid>
        </Container>
      </main>

    <Footer />

    </Fragment>
  );
}

export default Lvl3a;
