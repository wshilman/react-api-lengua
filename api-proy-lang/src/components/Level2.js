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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from "./styles.js";

const Level2 = () => {
  //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();

  var start = Date.now();
  var points = sessionStorage.getItem("SesStorPuntaje");

  const [answer, setAnswer] = useState("Validar");

  const [correct1, setCorrect1] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [correct3, setCorrect3] = useState(false);
  const [correct4, setCorrect4] = useState(false);
  const [flagEndGame, setFlagEndGame] = useState(false);

  const clickHandler = (num) => {
    switch (num) {
      case 1:
        setCorrect1(!correct1);
        break;
      case 2:
        setCorrect2(!correct2);
        break;
      case 3:
        setCorrect3(!correct3);
        break;
      case 4:
        setCorrect4(!correct4);
        break;
      default:
        break;
    }
  };

  const solve = () => {
    if ((correct1 && correct2 && correct3 && correct4) === true) {
      setAnswer("Sos un experto!");

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
      setAnswer("Te quivocaste campeon");
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{backgroundColor:"#ccffff"}}>
        <Hero textLine="Nivel 2" />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={12} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#DCE775"}}>
                <h2 style={{textAlign:"center"}}> 
                  Elegí las correctas 
                </h2>
                <p style={{textAlign:"center", margin:"0"}}>
                  Identificá las palabras escritas correctamente.
                </p>
                <br />
                <p style={{textAlign:"center", margin:"0"}}>
                  ¿ Te Animás ?
                </p>
                <br />
              </Card>
            </Grid>

            {/* carta con el juego */}
            <Grid item xs={12} sm={12} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFF59D"}}>
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={3} md={3}>
                    <div className={classes.listas3}>
                      <div>1- Hablar con otra persona </div>
                      <div>2- Realizar algo </div>
                      <div>3- Tener algo a cambio de plata </div>
                      <div>4- Ir más rápido </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={9} style={{backgroundColor:"#FFCC80"}}>
                    <RadioGroup aria-label="food" name="food1">
                      <ul className={classes.listas}>
                        <li>
                          <FormControlLabel
                            value="comversar"
                            control={<Radio />}
                            label="comversar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="conversar"
                            control={<Radio onClick={clickHandler.bind(this, 1)} />}
                            label="conversar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="conbersar"
                            control={<Radio />}
                            label="conbersar"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="talk" name="talk1">
                      <ul className={classes.listas}>
                        <li>
                          <FormControlLabel
                            value="haser"
                            control={<Radio />}
                            label="haser"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="hacer"
                            control={<Radio onClick={clickHandler.bind(this, 2)} />}
                            label="hacer"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="hacér"
                            control={<Radio />}
                            label="hacér"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="acer"
                            control={<Radio />}
                            label="acer"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="science" name="science1">
                      <ul className={classes.listas}>
                        <li>
                          <FormControlLabel
                            value="conprar"
                            control={<Radio />}
                            label="conprar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="comprár"
                            control={<Radio />}
                            label="comprár"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="komprar"
                            control={<Radio />}
                            label="komprar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="comprar"
                            control={<Radio onClick={clickHandler.bind(this, 3)} />}
                            label="comprar"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="fast" name="fast1">
                      <ul className={classes.listas}>
                        <li>
                          <FormControlLabel
                            value="acelerar"
                            control={<Radio onClick={clickHandler.bind(this, 4)} />}
                            label="acelerar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="aselerar"
                            control={<Radio />}
                            label="aselerar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="hacelerar"
                            control={<Radio />}
                            label="hacelerar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="acelerár"
                            control={<Radio />}
                            label="acelerár"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
              <Button size="large" variant="contained" color="secondary" component={Link} to="/game1">
                Volver
              </Button>

              <Button size="large" variant="contained" color="secondary" onClick={solve}>
                {answer}
              </Button>

              <Button size="large" variant="contained" color="secondary" component={Link} to="/level3">
                Siguiente
              </Button>
            </Grid>
          </Grid>
        </Container>

      </main>
      <Footer />
      
    </Fragment>
  );
};

export default Level2;
