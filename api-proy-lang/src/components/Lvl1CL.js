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
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const Lvl1CL = () => {
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
        <Hero textLine="Nivel 1 - Comprensión Lectora" />
        <br />

        <Container className={classes.mainGrid}>
          <Card className={classes.card}>
            <Grid container style={{backgroundColor:"#AED581", justifyContent:"space-around"}}>
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

          <Card className={classes.card} style={{backgroundColor:"#C5E1A5"}}>
            <Typography variant="h5" style={{textAlign:"justify", margin:"8px"}}>
              Todo perro ofrece a su amo comprensión y aprecio; sin embargo, el
              animal puede también memorizar algunos comportamientos
              específicos. Porque el perro desea quedar bien con su amo,
              aprenderá todo lo que este quisiera enseñarle. El aprendizaje
              canino se da por acumulación de experiencias, son sus
              consiguientes premios o castigos. Por ejemplo, cuando se le coloca
              una correa por primera vez, el perro queda sorprendido porque no
              sabe de qué se trata. Habrá que convencerlo de que la idea es
              caminar juntos. Cuando entienda este propósito, él mismo buscará
              la correa para que el amo lo saque a pasear. Entre más pronto el
              amo eduque a su cachorro, mejores resultados logrará y se ganará
              el respeto del animalito.
            </Typography>
          </Card>

          <p></p>

          <Card className={classes.card} style={{ backgroundColor: "#FFCC80" }}>
            <Typography variant="h6" className={classes.title} style={{paddingLeft: "8px"}}>
              ¿Que es lo incorrecto del texto?
            </Typography>
            <List style={{paddingLeft: "8px"}}>
              <Typography>
                1) El perro puede aprender todo conocimiento que su amo le
                ofrezca.
              </Typography>
              <Typography>
                2) El aprendizaje del can, se da por castigos y premios.
              </Typography>
              <Typography>
                3) Sin duda, el perro es el mas leal de todos los animales.
              </Typography>
            </List>
          </Card>

          <p></p>

          <Card
            className={classes.card}
            style={{ backgroundColor:"#FFF59D" }}
          >
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
                      label="Respuesta 1  y Respuesta 2"
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
                      label="Respuesta 2  y Respuesta 3"
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
                      label="Respuesta 1"
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
                      label="Respuesta 3"
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
                          name="checkedK" /*Aca tengo que hacer algo */
                        />
                      }
                      label="Todas las respuestas"
                    />
                  </li>
                </ul>
              </form>
            </Grid>
          </Card>

          <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              component={Link}
              to="/menu"
            >
              Volver
            </Button>

            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={clickFunction}
            >
              {answer}
            </Button>

            <Button
              size="large"
              variant="contained"
              color="secondary"
              component={Link}
              to="/Lvl2CL"
            >
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
