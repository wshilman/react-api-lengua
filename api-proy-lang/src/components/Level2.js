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

  const [answer, setAnswer] = useState("Validar");

  const [correct1, setCorrect1] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [correct3, setCorrect3] = useState(false);
  const [correct4, setCorrect4] = useState(false);

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
    } else {
      setAnswer("Te quivocaste campeon");
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main>
        <Hero textLine="Nivel 2" />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className={classes.card}
                style={{ backgroundColor: "#DCE775" }}
              >
                <h2 style={{ textAlign: "center" }}> Elegí las correctas </h2>
                <p style={{ textAlign: "center", margin: "0" }}>
                  {" "}
                  Identifica las palabras escritas correctamente.
                </p>
                <p></p>
                <p style={{ textAlign: "center", margin: "0" }}>
                  ¿ Te Animas ?
                </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card
                className={classes.card}
                style={{ backgroundColor: "#FFA726" }}
              >
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={12} md={12}>
                    <RadioGroup aria-label="food" name="food1">
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0",
                          margin: "0",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <li>
                          <FormControlLabel
                            value="anvorguesa"
                            control={<Radio />}
                            label="anvorguesa"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="anburgoso"
                            control={<Radio />}
                            label="anburgoso"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="hamburguesa"
                            control={
                              <Radio onClick={clickHandler.bind(this, 1)} />
                            }
                            label="hamburguesa"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="hamburgüesa"
                            control={<Radio />}
                            label="hamburgüesa"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="talk" name="talk1">
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0",
                          margin: "0",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <li>
                          <FormControlLabel
                            value="havlar"
                            control={<Radio />}
                            label="havlar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="hablar"
                            control={
                              <Radio onClick={clickHandler.bind(this, 2)} />
                            }
                            label="hablar"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="hablár"
                            control={<Radio />}
                            label="hablár"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="avlar"
                            control={<Radio />}
                            label="avlar"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="science" name="science1">
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0",
                          margin: "0",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <li>
                          <FormControlLabel
                            value="ciéncia"
                            control={<Radio />}
                            label="ciéncia"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="ciensia"
                            control={<Radio />}
                            label="ciensia"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="sciéncia"
                            control={<Radio />}
                            label="sciéncia"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="ciencia"
                            control={
                              <Radio onClick={clickHandler.bind(this, 3)} />
                            }
                            label="ciencia"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="fast" name="fast1">
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0",
                          margin: "0",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <li>
                          <FormControlLabel
                            value="velocidad"
                            control={
                              <Radio onClick={clickHandler.bind(this, 4)} />
                            }
                            label="velocidad"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="belocidad"
                            control={<Radio />}
                            label="belocidad"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="velosidad"
                            control={<Radio />}
                            label="velosidad"
                          />
                        </li>
                        <li>
                          <FormControlLabel
                            value="velocidád"
                            control={<Radio />}
                            label="velocidád"
                          />
                        </li>
                      </ul>
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

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
                onClick={solve}
              >
                {answer}
              </Button>

              <Button
                size="large"
                variant="contained"
                color="secondary"
                component={Link}
                to="/level3"
              >
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
