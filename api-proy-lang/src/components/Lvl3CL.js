import React, { useState, Fragment } from "react";
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

const Lvl3CL = () => {
  //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();

  var start = Date.now();
  var points = sessionStorage.getItem("SesStorPuntaje");

  const [answer, setAnswer] = React.useState("Validar");

  const [state, setState] = React.useState({
    checkedA: false, 
    checkedD: false, 
    checkedG: false, 
    checkedJ: false,
    checkedK: false, 
  });
  const [flagEndGame, setFlagEndGame] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const clickFunction = function () {
    if (
      !state.checkedA && 
      state.checkedD && 
      !state.checkedG && 
      !state.checkedJ &&
      !state.checkedK  
    ) {
      /* ESTO ES UN ASCO DE LINEAS PERO NO HAY UNA MANERA MAS CORTA DE HACERLO */
      document.getElementById("right1").style.backgroundColor = "#8BC34A";
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
  };

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{ backgroundColor: "#ccffff" }}>
        <Hero textLine="Nivel 3 - Comprensión Lectora" />
        <br />

        <Container className={classes.mainGrid}>
          <Card className={classes.card}>
            <Grid
              container
              style={{
                backgroundColor: "tomato",
                justifyContent: "space-around",
              }}
            >
              <img
                src={require("../images/PollueloCute.png")} alt="pollo"
                height="90"
                width="90"
                style={{ margin: "15px" }}
              />
              <div style={{ width: "90%" }}>
                <h2 style={{ textAlign: "center" }}> Comprensión Lectora </h2>
                <p style={{ textAlign: "center", margin: "0" }}>
                  Lee la siguiente historia y responde la preguntas de abajo.
                  <br />
                </p>
                <p style={{ textAlign: "center", margin: "0" }}>
                  ¿ Te Animás ?
                </p>
                <br />
              </div>
            </Grid>
          </Card>

          <br />

          <Card className={classes.card} style={{ backgroundColor: "#ff9380" }}>
            <Typography
              variant="h5"
              style={{ textAlign: "justify", margin: "8px" }}
            >
              Los polluelos recién salidos del cascaron adoptan como padre o
              madre lo primero que ven que se mueve. Oskar Heinroth (uno de los
              primeros estudiosos de la conducta de los animales) empezó
              trabajando con el ánsar común (ganso común). Descubrió que los
              polluelos nacidos de huevos incubados se apegaban al primer
              objeto móvil que veían durante las primeras horas de vida. Por
              ello seguían a una persona o un tractor, por ejemplo. A este
              fenómeno se le denomino de impregnación o de impresión.{" "}
            </Typography>
          </Card>
          <br />

          <Card className={classes.card} style={{ backgroundColor: "#FFCC80" }}>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ paddingLeft: "8px" }}
            >
              ¿Qué es lo CORRECTO del texto ? . Oskar Heinroth es:
            </Typography>
            <List style={{ paddingLeft: "8px" }}>
              <Typography>1) Un criador de polluelos.</Typography>
              <Typography>2) Un académico.</Typography>
              <Typography>3) Un negociante de aves.</Typography>
            </List>
          </Card>


          <Card className={classes.card} style={{ backgroundColor: "#FFF59D" }}>
            <Grid item xs={12} sm={12} md={6}>
              <form>
                <ul
                  className={classes.listas}
                  style={{ justifyContent: "left", paddingLeft: "8px" }}
                >
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA"/>
                      }
                      label="Respuesta 1"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{ justifyContent: "left", paddingLeft: "8px" }}>
                  <li id="right1">
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD"/>
                      }
                      label="Respuesta 1 y Respuesta 2"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{ justifyContent: "left", paddingLeft: "8px" }}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG"/>
                      }
                      label="Respuesta 2 y Respuesta 3"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{ justifyContent: "left", paddingLeft: "8px" }}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedJ} onChange={handleChange} name="checkedJ"/>
                      }
                      label="Respuesta 3"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{ justifyContent: "left", paddingLeft: "8px" }}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedk} onChange={handleChange} name="checkedK"/>
                      }
                      label="Ninguna de las respuestas"
                    />
                  </li>
                </ul>
              </form>
            </Grid>
          </Card>

          <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
            <Button size="large" variant="contained" color="secondary" component={Link} to="/Lvl2CL">
              Volver
            </Button>

            <Button size="large" variant="contained" color="secondary" onClick={clickFunction}>
              {answer}
            </Button>

            <Button size="large" variant="contained" color="secondary" component={Link} to="/menu">
              Ir al menu
            </Button>
          </Grid>
        </Container>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Lvl3CL;
