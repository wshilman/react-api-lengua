import React, { Fragment } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Card } from "@material-ui/core";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles.js";


const Game1 = () => {
  //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();

  var start = Date.now();

  const [answer, setAnswer] = React.useState("Validar");

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: false,
    game01End: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const clickFunction = function () {
    if (
      !state.checkedA &&
      !state.checkedB &&
      state.checkedC &&
      state.checkedD &&
      state.checkedE &&
      !state.checkedF &&
      !state.checkedG &&
      state.checkedH &&
      !state.checkedI &&
      state.checkedJ &&
      !state.checkedK &&
      state.checkedL 
    ) {
      /* ESTO ES UN ASCO DE LINEAS PERO NO HAY UNA MANERA MAS CORTA DE HACERLO */
      document.getElementById("right1").style.backgroundColor = "#8BC34A";
      document.getElementById("right2").style.backgroundColor = "#8BC34A";
      document.getElementById("right3").style.backgroundColor = "#8BC34A";
      document.getElementById("right4").style.backgroundColor = "#8BC34A";
      document.getElementById("right5").style.backgroundColor = "#8BC34A";
      document.getElementById("right6").style.backgroundColor = "#8BC34A";
      setAnswer("Correcto!");
      sessionStorage.setItem(
        "SesStorPuntaje",
        Math.trunc(100 - Math.floor((Date.now() - start) / 1000))
      );
    } else {
      setAnswer("Incorrecto");
    }
	};
	

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{backgroundColor:"#ccffff"}}>
        <Hero textLine="Nivel 1" />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
                <h2 style={{textAlign:"center"}}>
                  Identificá las acciones
                </h2>
                <p style={{textAlign:"center", margin:"0"}}>
                  Identificá las imágenes y marcá las acciones.
                </p>
                <p style={{textAlign:"center", margin:"0"}}>
                  ¿ Te Animás ? 
                </p>
                <br />
              </Card>
            </Grid>

            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFCC80"}}>
                <Grid container justify="center" alignItems="stretch">
									<Grid item xs={12} sm={12} md={6} style={{backgroundColor:"orange"}}>
                    <ul className={classes.listas}>
                      <li>
                        <img src={require("../images/remar.png")} alt="remar" />
                      </li>
                      <li>
                        <img src={require("../images/correr.png")} alt="correr"/>
                      </li>
                      <li>
                        <img src={require("../images/trepar.png")} alt="trepar" width="72px" height="72"/>
                      </li>
                    </ul>
                    <br />
                    <ul className={classes.listas}>
                      <li>
                        <img src={require("../images/saludar.png")} alt="saludar"/>
                      </li>
                      <li>
                        <img src={require("../images/nadar.png")} alt="nadar" />
                      </li>
                      <li>
                        <img src={require("../images/esquiar.png")} alt="esquiar"/>
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <form>
                      <ul className={classes.listas}>
                        <li>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                              />
                            }
                            label="hablar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                              />
                            }
                            label="estudiar"
                          />
                        </li>
                        <li id="right1">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedC}
                                onChange={handleChange}
                                name="checkedC"
                              />
                            }
                            label="nadar"
                          />
                        </li>
                      </ul>
                      <ul className={classes.listas}>
                        <li id="right2">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedD}
                                onChange={handleChange}
                                name="checkedD"
                              />
                            }
                            label="saludar"
                          />
                        </li>
                        <li id="right3">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedE}
                                onChange={handleChange}
                                name="checkedE"
                              />
                            }
                            label="remar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedF}
                                onChange={handleChange}
                                name="checkedF"
                              />
                            }
                            label="cocinar"
                          />
                        </li>
                      </ul>
                      <ul className={classes.listas}>
                        <li>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedG}
                                onChange={handleChange}
                                name="checkedG"
                              />
                            }
                            label="construir"
                          />
                        </li>
                        <li id="right4">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedH}
                                onChange={handleChange}
                                name="checkedH"
                              />
                            }
                            label="esquiar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedI}
                                onChange={handleChange}
                                name="checkedI"
                              />
                            }
                            label="saltar"
                          />
                        </li>
                      </ul>
                      <ul className={classes.listas}>
                        <li id="right5">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedJ}
                                onChange={handleChange}
                                name="checkedJ"
                              />
                            }
                            label="trepar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedK}
                                onChange={handleChange}
                                name="checkedK"
                              />
                            }
                            label="dormir"
                          />
                        </li>
                        <li id="right6">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedL}
                                onChange={handleChange}
                                name="checkedL"
                              />
                            }
                            label="correr"
                          />
                        </li>
                      </ul>
                    </form>
                  </Grid>
									<FormHelperText>Pssst.. El tiempo cuenta</FormHelperText>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
              <Button size="large" variant="contained" color="secondary" component={Link} to="/menu">
                Volver
              </Button>

              <Button size="large" variant="contained" color="secondary" onClick={clickFunction}>
                {answer}
              </Button>

              <Button size="large" variant="contained" color="secondary" component={Link} to="/level2">
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

export default Game1;
