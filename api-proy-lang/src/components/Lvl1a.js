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


const Lvl1a = () => {
    //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();


  //NO SE PORQUE NO ANDA, DEBE SER MÁS COMPLEJO...ESTO DEBERÍA CAMBIAR EL CONTENIDO DEL TEXTO 
  const random = function (word, id) {
    //document.getElementById(id).innerText = word;
  }



  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{backgroundColor:"#ccffff"}}>

        <Hero textLine='Nivel 1 - adjetivos' />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
                <h2 style={{textAlign:"center"}}> Completá el cuento </h2>
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
                    <p style={{textAlign:"justify", margin:"5px"}}> En su cumpleaños, Ariel recibió muy <h4 id="h41" className={classes.h4}>??????</h4> su regalo. <br />
                      - "<b>Por lo <h4 id="h42" className={classes.h4}>??????</h4> debe ser un auto a control remoto</b>", pensó.
                      Pero después de sacudir un poco el regalo notó que éste no era para nada <h4 id="h43" className={classes.h4}>??????</h4>. <br /> 
                      - "<b>Debe ser un muñeco de peluche!</b>", volvió a pensar Ariel. <br />
                      - "<b>Por qué no lo abrís, Ari?</b>", le dijo la mamá. "<b>Que todavía tenés que abrir otros regalos</b>". <br />
                      Ariel abrió la tapa y <h4 id="h44" className={classes.h4}>??????</h4> vió 
                      que adentro se encontraba un oso grande <h4 id="h45" className={classes.h4}>??????</h4> de peluche como él tanto quería. 
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{margin:"auto"}}> 
                      <ul id="ul1" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("CONTENTO", "h41")}>
                          CONTENTO  
                        </li>
                        <li className={classes.words} onClick={random("ASUSTADO", "h41")}>
                          asustado 
                        </li> 
                      </ul>
                      <ul id="ul2" className={classes.listas2} style={{margin:"12px"}} >
                        <li className={classes.words} onClick={random("MELANCÓLICO", "h42")}>
                          melancólico 
                        </li>  
                        <li className={classes.words} onClick={random("PESADO", "h42")}>
                          PESADO
                        </li>  
                      </ul>
                      <ul id="ul3" className={classes.listas2} style={{margin:"12px"}} >
                        <li className={classes.words} onClick={random("TRANQUILOS", "h43")}>
                          tranquilos 
                        </li>  
                        <li className={classes.words} onClick={random("RUIDOSO", "h43")}>
                          RUIDOSO
                        </li>  
                      </ul>
                      <ul id="ul4" className={classes.listas2} style={{margin:"12px"}} >
                        <li className={classes.words} onClick={random("SORPRENDIDO", "h44")}>
                          SORPRENDIDO  
                        </li>  
                        <li className={classes.words} onClick={random("VELOZ", "h44")}>
                          veloz
                        </li>  
                      </ul>
                      <ul id="ul5" className={classes.listas2} style={{margin:"12px"}} >
                        <li className={classes.words} onClick={random("MARRÓN", "h45")}>
                          MARRÓN 
                        </li>  
                        <li className={classes.words} onClick={random("HIPERACTIVO", "h45")}>
                          hiperactivo
                        </li>  
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
                    
              <Button size='large' variant='contained' color='secondary' component={Link}to="/level2adj"> 
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

export default Lvl1a;