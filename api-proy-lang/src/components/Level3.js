import React, { useState, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Navbar from "../components/Navbar.js";
import Hero from "./Hero";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useStyles } from "./styles.js";

const Level3 = () => {
  //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();

  var start = Date.now();

  var points = sessionStorage.getItem("SesStorPuntaje");

  const [answer, setAnswer] = React.useState("Validar");

  const [flagEndGame, setFlagEndGame] = useState(false);

  const wordFunction = (word, id) => {
    return function (e) {
      document.getElementById(id).innerText = word;
    }
  };

  const clickFunction = function () {
    const a = document.getElementById("h41").innerText;
    const b = document.getElementById("h42").innerText;
    const c = document.getElementById("h43").innerText;
    const d = document.getElementById("h44").innerText;

    if (
      a === "estudian" && 
      b === "fuimos" && 
      c === "ganaba" && 
      d === "juntaré" 
    ) {
      setAnswer("Correcto!");
      if (flagEndGame === false) {
        /*Sumamos los puntos actuales de la session mas los nuevos */
        points =
          parseInt(points) +
          Math.trunc(100 - Math.floor((Date.now() - start) / 1000));

        /*Asignamos los puntos calculados a la session*/
        sessionStorage.setItem("SesStorPuntaje", points);

        /*cambiamos el estado para que no sume muchas veces al apretar "Validar" */
        setFlagEndGame(!flagEndGame);
      }
    } else {
      setAnswer("Incorrecto");
    }
  }


  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{backgroundColor:"#ccffff"}}>
        <Hero textLine="Nivel 3" />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={12} md={4}>
              <Card className={classes.card} style={{backgroundColor:"tomato"}}>
                <h2 style={{textAlign:"center"}}> Completá las oraciones </h2>
                <p style={{textAlign:"center", margin:"0"}}> A tu derecha tenés cuatro oraciones en distintos tiempos 
                  verbales, completalas con las palabras que correspondan.
                </p>
                <br />
                <p style={{ textAlign: "center", margin: "0" }}>
                  ¿ Te Animás ?
                </p>
                <br />
              </Card>
            </Grid>

            {/* carta con el juego */}
            <Grid item xs={12} sm={12} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFF59D"}}>
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={7} md={7}>
                    <div className={classes.listas3}>
                      <div className={classes.divss}> PRESENTE INDICATIVO </div>
                      <p className={classes.pss}> Victor y Erika <p id="h41" className={classes.h4}>??????</p> inglés en otra escuela. </p>
                      <div className={classes.divss}> PRETÉRITO PERFECTO SIMPLE </div>
                      <p className={classes.pss}> Nosotros <p id="h42" className={classes.h4}>??????</p> a la playa la semana pasada. </p>
                      <div className={classes.divss}> PRETÉRITO IMPERFECTO </div>
                      <p className={classes.pss}> Sonia ahorraba toda la plata que <p id="h43" className={classes.h4}>??????</p> trabajando. </p>
                      <div className={classes.divss}> FUTURO SIMPLE </div>
                      <p className={classes.pss}> Me <p id="h44" className={classes.h4}>??????</p> con mis amigos luego de la pandemia. </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} style={{backgroundColor:"#FFCC80"}}>
                    <div className={classes.listas3}>
                      <ul className={classes.listas4} style={{margin:"12px"}}>
                        <li className={classes.words} onClick={wordFunction('estudian', 'h41')}>
                          estudian  
                        </li>
                        <li className={classes.words} onClick={wordFunction('estudiando', 'h41')}>
                          estudiando 
                        </li> 
                        <li className={classes.words} onClick={wordFunction('estudiaron', 'h41')}>
                          estudiaron 
                        </li> 
                      </ul>
                      <ul className={classes.listas4} style={{margin:"12px"}} >
                        <li className={classes.words} onClick={wordFunction('iríamos', 'h42')}>
                          iríamos 
                        </li>  
                        <li className={classes.words} onClick={wordFunction('fuimos', 'h42')}>
                          fuimos
                        </li>
                        <li className={classes.words} onClick={wordFunction('fueron', 'h42')}>
                          fueron 
                        </li>    
                      </ul>
                      <ul className={classes.listas4} style={{margin:"12px"}} >
                        <li className={classes.words} onClick={wordFunction('ganaba', 'h43')}>
                          ganaba 
                        </li>  
                        <li className={classes.words} onClick={wordFunction('gana', 'h43')}>
                          gana
                        </li>    
                        <li className={classes.words} onClick={wordFunction('ganaría', 'h43')}>
                          ganaría
                        </li>
                      </ul>
                      <ul  className={classes.listas4} style={{margin:"12px"}} >
                        <li className={classes.words} onClick={wordFunction('juntaría', 'h44')}>
                          juntaría  
                        </li>  
                        <li className={classes.words} onClick={wordFunction('junto', 'h44')}>
                          junto
                        </li>    
                        <li className={classes.words} onClick={wordFunction('juntaré', 'h44')}>
                          juntaré
                        </li>  
                      </ul>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
              <Button size="large" variant="contained" color="secondary" component={Link} to="/level2">
                Volver
              </Button>

              <Button size="large" variant="contained" color="secondary" onClick={clickFunction}>
                {answer}
              </Button>

              <Button size="large" variant="contained" color="secondary" component={Link} to="/menu">
                Ir al menu
              </Button>
            </Grid>
          </Grid>
        </Container>

      </main>
      <Footer />

    </Fragment>
  );
};

export default Level3;
