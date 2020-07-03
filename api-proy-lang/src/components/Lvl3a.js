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


const Lvl3a = () => {
    //TODOS LOS ESTILOS ESTÁN ACÁ...
  const classes = useStyles()

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
    const h = document.getElementById("h48").innerText; 
    const i = document.getElementById("h49").innerText; 

    if (
      a === "chicos" && 
      b === "entusiasmada" && 
      c === "limpia" && 
      d === "puntuales" && 
      e === "triste" && 
      f === "enojados" && 
      g === "feliz" && 
      h === "tranquilos" && 
      i === "gran" 
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

        <Hero textLine='Nivel 3 - adjetivos' />
        <br />

        <Container className={classes.cardGrid}>
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"tomato"}}>
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
                    <p style={{textAlign:"justify", margin:"5px"}}> Un día todos los animales más <p id="h41" className={classes.h4}>??????</p> del 
                      bosque decidieron  hacer una fiesta. <br />
                      - "<b>Yo invito a mi casa a los que no vuelan</b>", dijo la araña muy <p id="h42" className={classes.h4}>??????</p>. <br />
                      Todos aceptaron sin ningún tipo de problema. Aprovechando sus ocho patas, la araña escribió todas las cartas 
                      de invitación. Además dejó su casa <p id="h43" className={classes.h4}>??????</p> y arreglada. 
                      La araña sabía que todos los invitados eran muy <p id="h44" className={classes.h4}>??????</p>, por eso cuando era la hora y 
                      ningún invitado apareció, ella se puso muy <p id="h45" className={classes.h4}>??????</p>. <br /> 
                      - "<b>Nadie quiere venir a mi casa</b>", se dijo a sí misma. <br />
                      Entonces decidió salir para averiguar que había pasado y encontró que sus invitados esperaban <p id="h46" className={classes.h4}>??????</p> en 
                      una larga fila afuera de su puerta. Al lado de la puerta había un gran cartel que decía "Antes de entrar límpiese sus pies". 
                      La araña se puso <p id="h47" className={classes.h4}>??????</p> al ver que todos los invitados estaban esperando muy <p id="h48" className={classes.h4}>??????</p> al cienpiés para que 
                      termine de limpiarse cada uno de sus pies. 
                      El cienpiés terminó y todos los demás pudieron entrar y disfrutar de la <p id="h49" className={classes.h4}>??????</p> fiesta de la araña. 
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{margin:"auto"}}> 
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("chicos", "h41")}>
                        chicos
                      </li>
                      <li className={classes.words} onClick={wordFunction("sorprender", "h41")}>
                        sorprender 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("entusiasmada", "h42")}>
                        entusiasmada  
                      </li>
                      <li className={classes.words} onClick={wordFunction("achicar", "h42")}>
                        achicar 
                      </li>
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("limpia", "h43")}>
                        limpia  
                      </li>
                      <li className={classes.words} onClick={wordFunction("enojado", "h43")}>
                        enojado  
                      </li>
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("confusos", "h44")}>
                        confusos  
                      </li>
                      <li className={classes.words} onClick={wordFunction("puntuales", "h44")}>
                        puntuales 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("triste", "h45")}>
                        triste 
                      </li> 
                      <li className={classes.words} onClick={wordFunction("mareado", "h45")}>
                        mareado 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("punzante", "h46")}>
                        punzante
                      </li>
                      <li className={classes.words} onClick={wordFunction("enojados", "h46")}>
                        enojados 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("capaces", "h47")}>
                        capaces  
                      </li> 
                      <li className={classes.words} onClick={wordFunction("feliz", "h47")}>
                        feliz  
                      </li>
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("tranquilos", "h48")}>
                        tranquilos  
                      </li>
                      <li className={classes.words} onClick={wordFunction("comer", "h48")}>
                        comer 
                      </li> 
                    </ul>
                    <ul className={classes.listas2} style={{margin:"12px"}}>
                      <li className={classes.words} onClick={wordFunction("gran", "h49")}>
                        gran 
                      </li> 
                      <li className={classes.words} onClick={wordFunction("altísima", "h49")}>
                        altísima 
                      </li> 
                    </ul>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>
              <Button size='large' variant='contained' color='secondary' component={Link}to="/level2adj"> 
                Volver 
              </Button>

              <Button size='large' variant='contained' color='secondary' onClick={clickFunction}> 
                {answer} 
              </Button> 

              <Button size="large" variant="contained" color="secondary" component={Link} to="/menu">
                Ir al menu
              </Button>
            </Grid>


          </Grid>
        </Container>
      </main>

    <Footer />

    </Fragment>
  );
}

export default Lvl3a;
