import React, { useState, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Navbar from "../components/Navbar.js";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import { useStyles } from "./styles.js";

const Level3 = () => {
  //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main>
        <Hero textLine="Nivel 3" />
        <br />

        <Container className={classes.cardGrid}>
          {/* NIVEL 3 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className={classes.card}
                style={{ backgroundColor: "#e57373" }}
              >
                <h2 style={{ textAlign: "center" }}> Completá las frases </h2>
                <p style={{ textAlign: "center", margin: "0" }}>
                  {" "}
                  Completa las frases con las palabras a la derecha
                </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card
                className={classes.card}
                style={{ backgroundColor: "#FFF59D" }}
              >
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={12} md={6}>
                    <p style={{ textAlign: "justify", margin: "4px" }}>
                      {" "}
                      En su cumpleaños, Ariel recibió muy - - - - - - - - su
                      regalo. <br />- "
                      <b>
                        Por lo - - - - - - debe ser un auto a control remoto
                      </b>
                      ", pensó. Pero después de sacudir un poco el regalo notó
                      que éste no era para nada - - - - - - -. <br />- "
                      <b>Debe ser un muñeco de peluche!</b>", volvió a pensar
                      Ariel. <br />- "<b>Por qué no lo abrís, Ari?</b>", le dijo
                      la mamá. "<b>Que todavía tenés que abrir otros regalos</b>
                      ". <br />
                      Ariel abrió la tapa y - - - - - - - - - - - vió que
                      adentro se encontraba un oso grande - - - - - - de peluche
                      como él tanto quería.
                    </p>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    style={{ backgroundColor: "#FFCC80" }}
                  >
                    1. CONTENTO 2. PESADO 3. RUIDOSO 4. SORPRENDIDO 5. MARRÓN
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

              <Button size="large" variant="contained" color="secondary">
                ANSWER
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
