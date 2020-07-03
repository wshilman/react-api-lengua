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

const Lvl2CL = () => {
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
      state.checkedA &&
      !state.checkedD &&
      !state.checkedG &&
      !state.checkedJ &&
      !state.checkedK 
    ) {
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
        <Hero textLine="Nivel 2 - Comprensión Lectora" />
        <br />

        <Container className={classes.mainGrid}>
          <Card className={classes.card}>
            <Grid container style={{backgroundColor:"#FFF176", justifyContent:"space-around"}}>
              <img src={require("../images/CocoCute.jpg")} alt="coco" height="90" width="90" style={{ margin: "15px" }}/>
              <div style={{ width: "90%" }}>
                <h2 style={{ textAlign: "center" }}> 
                  Comprensión Lectora 
                </h2>
                <p style={{ textAlign: "center", margin: "0" }}>
                  Leé la siguiente historia y respondé la preguntas de abajo.
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

          <Card className={classes.card} style={{ backgroundColor: "#FFF59D" }}>
            <Typography variant="h5" style={{ textAlign: "justify", margin: "8px" }}>
              Para los zoólogos, el caimán, el cocodrilo y el aligátor son
              diferentes, pero también muy parecidos entre sí. El cocodrilo
              tiene los dientes formados en hileras; puede medir ocho metros,
              como el del Orinoco; además emite gruñidos. El caimán tiene unas
              placas oseas (de huesos) en el vientre (la panza), es el más feroz
              de todos y mide hasta metro y medio de largo. Por su parte, el
              aligátor ruge. Su tamaño varía entre uno y seis metros de largo.
              Todos tienen un diente de eclosión en la punta del hocico, con el
              que rompen la dura cascara del huevo para nacer.{" "}
            </Typography>
          </Card>
          <br />

          <Card className={classes.card} style={{backgroundColor:"#FFCC80"}}>
            <Typography variant="h6" className={classes.title} style={{paddingLeft:"8px"}}>
              ¿Que es lo CORRECTO del texto?
            </Typography>
            <List style={{paddingLeft:"8px"}}>
              <Typography>
                1) Los dientes del cocodrilo pueden medir ocho centímetros.
              </Typography>
              <Typography>
                2) El aligátor tiene placas oseas en el vientre.
              </Typography>
              <Typography>
                3) El cocodrilo habita principalmente en el Rio de la Plata.
              </Typography>
            </List>
          </Card>

          <Card className={classes.card} style={{backgroundColor:"#FFF59D"}}>
            <Grid item xs={12} sm={12} md={6}>
              <form>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li id="right1">
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA"/>
                      }
                      label="Respuesta 2"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD"/>
                      }
                      label="Respuesta 1 y Respuesta 2"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG"/>
                      }
                      label="Respuesta 3 y Respuesta 1"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedJ} onChange={handleChange} name="checkedJ"/>
                      }
                      label="Respuesta 3"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
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
            <Button size="large" variant="contained" color="secondary" component={Link} to="/Lvl1CL">
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
