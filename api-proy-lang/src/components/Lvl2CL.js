import React, { Fragment } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Card } from "@material-ui/core";
import Hero from "./Hero";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles.js";
import List from "@material-ui/core/List";

const Lvl2CL = () => {
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
        <Hero textLine="Nivel 2 - Comprensión Lectora" />
        <br />

        <Container className={classes.mainGrid}>
          <Card className={classes.card}>
            <Grid container style={{backgroundColor:"#FFF176", justifyContent:"space-around"}}>
              <img src={require("../images/doge1total.jpg")} height="90" width="90" style={{margin:"15px"}}/>
              <div style={{width:"90%"}}>
                <h2 style={{textAlign:"center"}}> Comprensión Lectora </h2>
                <p style={{textAlign:"center", margin:"0"}}>
                  Lee la siguiente historia y responde la preguntas de abajo.
                  <br />
                </p>
                <p style={{textAlign:"center", margin:"0"}}>¿ Te Animás ?</p>
                <br />
              </div>
            </Grid>
          </Card>

          <br />

          <Card className={classes.card} style={{backgroundColor:"#FFF59D"}}>
            <Typography variant="h5" style={{textAlign:"justify", margin:"8px"}}>
              LA IMAGEN DE ARRIBA DESPUES SE CAMBIA ASI QUEDA ACORDE AL TEXTO
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
              texto texto texto texto texto texto texto texto texto texto texto texto 
            </Typography>
          </Card>

          <p></p>

          <Card className={classes.card} style={{backgroundColor:"#FFCC80"}}>
            <Typography variant="h6" className={classes.title} style={{paddingLeft: "8px"}}>
              ¿Que es lo incorrecto del texto?
            </Typography>
            <List style={{paddingLeft: "8px"}}>
              <Typography>
                1) opcion uno
              </Typography>
              <Typography>
                2) opcion dos
              </Typography>
              <Typography>
                3) opcion tres
              </Typography>
            </List>
          </Card>

          <p></p>

          <Card className={classes.card} style={{backgroundColor:"#FFF59D"}}>
            <Grid item xs={12} sm={12} md={6}>
              <form>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedA}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="respuesta A"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li id="right2">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedD}
                          onChange={handleChange}
                          name="checkedD"
                        />
                      }
                      label="respuesta B"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedG}
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="respuesta C"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li id="right5">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedJ}
                          onChange={handleChange}
                          name="checkedJ"
                        />
                      }
                      label="respuesta D"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li id="right5">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedJ}
                          onChange={handleChange}
                          name="checkedK"
                        />
                      }
                      label="respuesta E"
                    />
                  </li>
                </ul>
              </form>
            </Grid>
          </Card>

          <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
            <Button size="large" variant="contained" color="secondary" component={Link} to="/menu">
              Volver
            </Button>

            <Button size="large" variant="contained" color="secondary" onClick={clickFunction}>
              {answer}
            </Button>

            <Button size="large" variant="contained" color="secondary" component={Link} to="/Lvl3CL">
              Siguiente
            </Button>
          </Grid>
        </Container>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Lvl2CL;
