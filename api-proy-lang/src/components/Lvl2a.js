import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Navbar from "./Navbar.js";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import { useStyles } from "./styles.js";


const Lvl2a = () => {
    //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles();

  var start = Date.now();

  const [answer, setAnswer] = React.useState("Validar");

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
    const e = document.getElementById("h45").innerText; 
    const f = document.getElementById("h46").innerText; 
    const g = document.getElementById("h47").innerText; 
    
    if (
      a === "carnívoro" && 
      b === "adaptable" && 
      c === "largo" && 
      d === "ágil" && 
      e === "silencioso" && 
      f === "depredador" && 
      g === "solitario" 
    ) {
      setAnswer("Correcto!");
      sessionStorage.setItem(
        "SesStorPuntaje",
        Math.trunc(100 - Math.floor((Date.now() - start) / 1000))
      );
    } else {
      setAnswer("Incorrecto");
    }
  }


  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <main style={{backgroundColor:"#ccffff"}}>

        <Hero textLine='Nivel 2 - adjetivos' />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#DCE775"}}>
                <h2 style={{textAlign:"center"}}> Completá el cuento </h2>
                  <p style={{textAlign:"center", margin:"0"}}> A tu derecha tenés un cuneto al que le faltan algunas 
                    palabras, completá el cuento con las palabras que correspondan. 
                  </p>
                  <br />
                  <p style={{ textAlign: "center", margin: "0" }}>
                    ¿ Te Animás ?
                  </p>
                <br />
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFCC80"}}>
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={12} md={6} style={{backgroundColor:"#FFF59D"}}> 
                    <p style={{textAlign:"justify", margin:"5px"}}> 
                    El puma es un animal <p id="h41" className={classes.h4}>??????</p> que vive en especialmente en los bosques 
                    o montañas de América, aunque es muy <p id="h42" className={classes.h4}>??????</p> y puede vivir en varias 
                    zonas diferentes. <br />
                    Pertenece a la familia de los félidos y puede ser tan <p id="h43" className={classes.h4}>??????</p> como 
                    dos metros, sin incluir su cola. Es muy <p id="h44" className={classes.h4}>??????</p> para trepar árboles 
                    y se refugia en ellos cuando se ve en peligro. <br />
                    Este es un felino muy <p id="h45" className={classes.h4}>??????</p>, se desplaza furtivamente y es el terror 
                    de los demás animales. Aunque es un gran <p id="h46" className={classes.h4}>??????</p>, no siempre es la 
                    especie dominante en su área. Se trata de un felino <p id="h47" className={classes.h4}>??????</p> que evita 
                    el contacto con las personas.  
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{margin:"auto"}}> 
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("carnívoro", "h41")}>
                        carnívoro
                      </li>
                      <li className={classes.words} onClick={wordFunction("chiquito", "h41")}>
                        chiquito 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("nadador", "h42")}>
                        nadador  
                      </li>
                      <li className={classes.words} onClick={wordFunction("adaptable", "h42")}>
                        adaptable 
                      </li>
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("largo", "h43")}>
                        largo  
                      </li>
                      <li className={classes.words} onClick={wordFunction("gordo", "h43")}>
                        gordo  
                      </li>
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("ágil", "h44")}>
                        ágil  
                      </li>
                      <li className={classes.words} onClick={wordFunction("torpe", "h44")}>
                        torpe 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("silencioso", "h45")}>
                        silencioso 
                      </li> 
                      <li className={classes.words} onClick={wordFunction("maullador", "h45")}>
                        maullador 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("artista", "h46")}>
                        artista 
                      </li>
                      <li className={classes.words} onClick={wordFunction("depredador", "h46")}>
                        depredador 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("tierno", "h47")}>
                        tierno  
                      </li>
                      <li className={classes.words} onClick={wordFunction("solitario", "h47")}>
                        solitario  
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
              <Button size='large' variant='contained' color='secondary' component={Link}to="/level1adj"> 
                Volver 
              </Button>

              <Button size='large' variant='contained' color='secondary' onClick={clickFunction}> 
                {answer} 
              </Button>

              <Button size='large' variant='contained' color='secondary' component={Link}to="/level3adj"> 
                Siguiente 
              </Button>  
            </Grid>

          </Grid>
        </Container>
      </main>

    <Footer />

    </Fragment>
  );
}

export default Lvl2a;

