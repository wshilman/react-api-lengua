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


  //NO SE PORQUE NO ANDA, DEBE SER MÁS COMPLEJO...ESTO DEBERÍA CAMBIAR EL CONTENIDO DEL TEXTO 
  const random = function (word, id) {
    //document.getElementById(id).innerText = word;
  }



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
                    <p style={{textAlign:"justify", margin:"5px"}}> Un día todos los animales más <h4 id="h41" className={classes.h4}>??????</h4> del 
                      bosque decidieron  hacer una fiesta. <br />
                      - "<b>Yo invito a mi casa a los que no vuelan</b>", dijo la araña muy <h4 id="h42" className={classes.h4}>??????</h4>. <br />
                      Todos aceptaron sin ningún tipo de problema. Aprovechando sus ocho patas, la araña escribió todas las cartas 
                      de invitación. Además dejó su casa <h4 id="h43" className={classes.h4}>??????</h4> y arreglada. 
                      La araña sabía que todos los invitados eran muy <h4 id="h44" className={classes.h4}>??????</h4>, por eso cuando era la hora y 
                      ningún invitado apareció, ella se puso muy <h4 id="h45" className={classes.h4}>??????</h4>. <br /> 
                      - "<b>Nadie quiere venir a mi casa</b>", se dijo a sí misma. <br />
                      Entonces decidió salir para averiguar que había pasado y encontró que sus invitados esperaban <h4 id="h46" className={classes.h4}>??????</h4> en 
                      una larga fila afuera de su puerta. Al lado de la puerta había un gran cartel que decía "Antes de entrar límpiese sus pies". 
                      La araña se puso <h4 id="h47" className={classes.h4}>??????</h4> al ver que todos los invitados estaban esperando muy <h4 id="h48" className={classes.h4}>??????</h4> al cienpiés para que 
                      termine de limpiarse cada uno de sus pies. 
                      El cienpiés terminó y todos los demás pudieron entrar y disfrutar de la <h4 id="h49" className={classes.h4}>??????</h4> fiesta de la araña. 
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{margin:"auto"}}> 
                  {/* TODO ESTO SE PODRÍA AHORRAR CON UNA FUNCIÓN MAP, PERO ESTÁ BIEN ASÍ, TRANQUI */}
                      <ul id="ul1" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("TRISTE", "h41")}>
                          TRISTE
                        </li>
                        <li className={classes.words} onClick={random("ACHICAR", "h41")}>
                          achicar 
                        </li> 
                      </ul>
                      <ul id="ul2" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("SORPRENDER", "h42")}>
                          sorprender  
                        </li>
                        <li className={classes.words} onClick={random("GRAN", "h42")}>
                          GRAN 
                        </li>
                      </ul>
                      <ul id="ul3" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("FELIZ", "h43")}>
                          FELIZ  
                        </li>
                        <li className={classes.words} onClick={random("ENOJAR", "h43")}>
                          enojar  
                        </li>
                      </ul>
                      <ul id="ul4" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("CONFUSOS", "h44")}>
                          confusos  
                        </li>
                        <li className={classes.words} onClick={random("PUNTUALES", "h44")}>
                          PUNTUALES 
                        </li> 
                      </ul>
                      <ul id="ul5" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("LIMPIA", "h45")}>
                          LIMPIA 
                        </li> 
                        <li className={classes.words} onClick={random("MAREADO", "h45")}>
                          mareado 
                        </li> 
                      </ul>
                      <ul id="ul6" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("PUNZANTE", "h46")}>
                          punzante
                        </li>
                        <li className={classes.words} onClick={random("CHICOS", "h46")}>
                          CHICOS 
                        </li> 
                      </ul>
                      <ul id="ul7" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("CAPACES", "h47")}>
                          capaces  
                        </li>
                        <li className={classes.words} onClick={random("ENOJADOS", "h47")}>
                          ENOJADOS  
                        </li>
                      </ul>
                      <ul id="ul8" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("TRANQUILOS", "h48")}>
                          TRANQUILOS  
                        </li>
                        <li className={classes.words} onClick={random("COMER", "h48")}>
                          comer 
                        </li> 
                      </ul>
                      <ul id="ul9" className={classes.listas2} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={random("BIEN", "h49")}>
                          bien 
                        </li> 
                        <li className={classes.words} onClick={random("ENTUSIASMADA", "h49")}>
                          ENTUSIASMADA 
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
