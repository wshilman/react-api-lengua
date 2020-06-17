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


const Lvl2a = () => {
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
                    <p style={{textAlign:"justify", margin:"5px"}}> Un día todos los animales más chicos del bosque decidieron 
                      hacer una fiesta. <br />
                      - "<b>Yo invito a mi casa a los que no vuelan</b>", dijo la araña muy entusiasmada. <br />
                      Todos aceptaron sin ningún tipo de problema. Aprovechando sus ocho patas, la araña escribió todas las cartas 
                      de invitación. Además dejó su casa limpia y arreglada. La araña sabía que todos los invitados eran muy 
                      puntuales, por eso cuando era la hora y ningún invitado apareció, ella se puso muy triste. <br /> 
                      - "<b>Nadie quiere venir a mi casa</b>", se dijo a sí misma. <br />
                      Entonces decidió salir para averiguar que había pasado y encontró que sus invitados esperaban enojados en 
                      una larga fila afuera de su puerta. Al lado de la puerta había un gran cartel que decía "Antes de entrar límpiese sus pies". 
                      La araña se puso feliz al ver que todos los invitados estaban esperando al cienpiés tranquilamente para que 
                      termine de limpiarse cada uno de sus pies. 
                      El cienpiés terminó y todos los demás pudieron entrar y disfrutar de la genial fiesta de la araña. 
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{margin:"auto"}}> 
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> ENTUSIASMADA </p> 
                      <p className={classes.words} draggable="true"> TRISTE </p> 
                      <p className={classes.words} draggable="true"> SORPRENDIDO </p> 
                    </ul>
                    <br />
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> CHICOS </p> 
                      <p className={classes.words} draggable="true"> GRAN </p> 
                      <p className={classes.words} draggable="true"> GENIAL </p> 
                    </ul>
                    <br />
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> FELIZ </p> 
                      <p className={classes.words} draggable="true"> LIMPIA </p> 
                      <p className={classes.words} draggable="true"> ENOJADOS </p> 
                    </ul>
                    <br />
                    <ul className={classes.listas}>
                      <p className={classes.words} draggable="true"> TRANQUILAMENTE </p> 
                      <p className={classes.words} draggable="true"> PUNTUALES </p> 
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

export default Lvl2a;
