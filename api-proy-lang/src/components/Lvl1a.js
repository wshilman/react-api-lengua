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


const Lvl1a = () => {
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

    if (
      a === "contento" && 
      b === "pesado" && 
      c === "ruidoso" && 
      d === "sorprendido" && 
      e === "marrón"
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

        <Hero textLine='Nivel 1 - adjetivos' />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
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
                    <p style={{textAlign:"justify", margin:"5px"}}> En su cumpleaños, Ariel recibió muy <p id="h41" className={classes.h4}>??????</p> su regalo. <br />
                      - "<b>Por lo <p id="h42" className={classes.h4}>??????</p> debe ser un auto a control remoto</b>", pensó.
                      Pero después de sacudir un poco el regalo notó que éste no era para nada <p id="h43" className={classes.h4}>??????</p>. <br /> 
                      - "<b>Debe ser un muñeco de peluche!</b>", volvió a pensar Ariel. <br />
                      - "<b>Por qué no lo abrís, Ari?</b>", le dijo la mamá. "<b>Que todavía tenés que abrir otros regalos</b>". <br />
                      Ariel abrió la tapa y <p id="h44" className={classes.h4}>??????</p> vió 
                      que adentro se encontraba un oso grande <p id="h45" className={classes.h4}>??????</p> de peluche como él tanto quería. 
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{margin:"auto"}}> 
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction('contento', 'h41')}>
                        contento  
                      </li>
                      <li className={classes.words} onClick={wordFunction('asustado', 'h41')}>
                        asustado 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}} >
                      <li className={classes.words} onClick={wordFunction('melancólico', 'h42')}>
                        melancólico 
                      </li>  
                      <li className={classes.words} onClick={wordFunction('pesado', 'h42')}>
                        pesado
                      </li>  
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}} >
                      <li className={classes.words} onClick={wordFunction('tranquilos', 'h43')}>
                        tranquilos 
                      </li>  
                      <li className={classes.words} onClick={wordFunction('ruidoso', 'h43')}>
                        ruidoso
                      </li>  
                    </ul>
                    <ul  className={classes.listas2} style={{margin:"12px"}} >
                      <li className={classes.words} onClick={wordFunction('sorprendido', 'h44')}>
                        sorprendido  
                      </li>  
                      <li className={classes.words} onClick={wordFunction('veloz', 'h44')}>
                        veloz
                      </li>  
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}} >
                      <li className={classes.words} onClick={wordFunction('marrón', 'h45')}>
                        marrón 
                      </li>  
                      <li className={classes.words} onClick={wordFunction('hiperactivo', 'h45')}>
                        hiperactivo
                      </li>  
                    </ul>
                  </Grid>
                </Grid>

              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
              <Button size='large' variant='contained' color='secondary' component={Link}to="/menu"> 
                Volver 
              </Button>

              <Button size='large' variant='contained' color='secondary' onClick={clickFunction}> 
                {answer}
              </Button>
                    
              <Button size='large' variant='contained' color='secondary' component={Link}to="/level2adj"> 
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

export default Lvl1a;