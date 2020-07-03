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

const Lvl1CL = () => {
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
      !state.checkedD &&
      !state.checkedG &&
      state.checkedJ &&
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

      <main style={{backgroundColor:"#ccffff"}}>
        <Hero textLine="Nivel 1 - Comprensión Lectora" />
        <br />

        <Container className={classes.mainGrid}>
          <Card className={classes.card}>
            <Grid container style={{ backgroundColor: "#AED581", justifyContent: "space-around"}}>
              <img src={require("../images/doge1total.jpg")} alt="perro" height="90" width="90" style={{ margin: "15px" }}/>
              <div style={{width:"90%"}}>
                <h2 style={{textAlign:"center"}}> Comprensión Lectora </h2>
                <p style={{textAlign:"center", margin:"0"}}>
                  Leé la siguiente historia y respondé la preguntas de abajo.
                  <br />
                </p>
                <p style={{textAlign:"center", margin:"0"}}>
                  ¿ Te Animás ?
                </p>
                <br />
              </div>
            </Grid>
          </Card>

          <br />

          <Card className={classes.card} style={{backgroundColor:"#C5E1A5"}}>
            <Typography variant="h5" style={{textAlign:"justify", margin:"8px"}}>
              Todo perro ofrece a su amo comprensión y aprecio; sin embargo, el
              animal puede también memorizar algunos comportamientos
              específicos. Porque el perro desea quedar bien con su amo,
              aprenderá todo lo que este quisiera enseñarle. El aprendizaje
              canino se da por acumulación de experiencias, son sus
              consiguientes premios y no castigos. Por ejemplo, cuando se le coloca
              una correa por primera vez, el perro queda sorprendido porque no
              sabe de qué se trata. Habrá que convencerlo de que la idea es
              caminar juntos. Cuando entienda este propósito, él mismo buscará
              la correa para que el amo lo saque a pasear. Entre más pronto el
              amo eduque a su cachorro, mejores resultados logrará y se ganará
              el respeto del animalito.
            </Typography>
          </Card>
          <br />
          
          <Card className={classes.card} style={{backgroundColor:"#FFCC80"}}>
            <Typography variant="h6" className={classes.title} style={{paddingLeft:"8px"}}>
              ¿Qué es lo INCORRECTO del texto?
            </Typography>
            <List style={{paddingLeft:"8px"}}>
              <Typography>
                1) El perro puede aprender todo conocimiento que su amo le
                ofrezca.
              </Typography>
              <Typography>
                2) Los perros aprenden con violencia.
              </Typography>
              <Typography>
                3) El perro es el mas leal de todos los animales.
              </Typography>
            </List>
          </Card>

          <Card className={classes.card} style={{backgroundColor:"#FFF59D"}}>
            <Grid item xs={12} sm={12} md={6}>
              <form>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA"/>
                      }
                      label="Respuesta 1  y Respuesta 2"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD"/>
                      }
                      label="Respuesta 1  y Respuesta 3"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG"/>
                      }
                      label="Respuesta 3"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li id="right1">
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedJ} onChange={handleChange} name="checkedJ"/>
                      }
                      label="Respuesta 2"
                    />
                  </li>
                </ul>
                <ul className={classes.listas} style={{justifyContent:"left", paddingLeft:"8px"}}>
                  <li>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedk} onChange={handleChange} name="checkedK"/>
                      }
                      label="Todas las respuestas"
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

            <Button size="large" variant="contained" color="secondary" component={Link} to="/Lvl2CL">
              Siguiente
            </Button>
          </Grid>
        </Container>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Lvl1CL;
