import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Background from "../images/background_image.jpg";
import { Box, Button } from "@material-ui/core";
import Navbar from "../components/Navbar.js";
import { Copyright } from "./Copyright.jsx";
import {Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundImage: "url(" + Background + ") ",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Level = () => {

  const classes = useStyles();

  const [answer, setAnswer] = useState("Validar");

  const [correct1, setCorrect1] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [correct3, setCorrect3] = useState(false);
  const [correct4, setCorrect4] = useState(false);
  const [correct5, setCorrect5] = useState(false);
  const [correct6, setCorrect6] = useState(false);

  const clickHandler = num => {

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
      case 5:
        setCorrect5(!correct5);
        break;
      case 6:
        setCorrect6(!correct6);
        break;
    
      default:
        break;
    }
  
  };
  
  const solve = () => {
    if((correct1 && correct2 && correct3 && correct4 && correct5 && correct6)===true) {
      setAnswer("Sos un experto!");
    }
    else{
      setAnswer("Te quivocaste campeon");
    }
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
            >
              VERBOS!
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid}>
          
          {/* NIVEL 3 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
                <h2 style={{textAlign:"center"}}> Identificá las acciones </h2>
                <p style={{textAlign:"center", margin:"0"}}> El verbo es la parte de la oración o categoría léxica que expresa una acción, movimiento, existencia, 
                  consecución, condición o estado del sujeto. Sintácticamente representa una predicación. 
                </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#64B5F6"}}>
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={12} md={6} style={{backgroundColor:"orange"}}> 
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><img src={require("../images/remar.png")} alt="remar" /></li>
                      <li><img src={require("../images/correr.png")} alt="correr"/></li>
                      <li><img src={require("../images/trepar.png")} alt="trepar" width="72px" height="72"/></li>
                    </ul>
                    <br />
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><img src={require("../images/saludar.png")} alt="saludar" /></li>
                      <li><img src={require("../images/nadar.png")} alt="nadar"/></li>
                      <li><img src={require("../images/esquiar.png")} alt="esquiar"/></li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} style={{backgroundColor:"#FFCC80"}}> 
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><FormControlLabel control={<Checkbox />} label="hablar"  /></li>
                      <li><FormControlLabel control={<Checkbox />} label="estudiar" /></li>
                      <li><FormControlLabel control={<Checkbox onClick={clickHandler.bind(this, 1)} />} label="nadar" /></li>
                    </ul>
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><FormControlLabel control={<Checkbox onClick={clickHandler.bind(this, 2)} />} label="saludar" /></li>
                      <li><FormControlLabel control={<Checkbox onClick={clickHandler.bind(this, 3)} />} label="remar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="cocinar" /></li>
                    </ul>
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><FormControlLabel control={<Checkbox />} label="construir" /></li>
                      <li><FormControlLabel control={<Checkbox onClick={clickHandler.bind(this, 4)} />} label="esquiar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="codificar" /></li>
                    </ul>
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><FormControlLabel control={<Checkbox onClick={clickHandler.bind(this, 5)} />} label="trepar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="dormir" /></li>
                      <li><FormControlLabel control={<Checkbox onClick={clickHandler.bind(this, 6)} />} label="correr" /></li>
                    </ul>

                  </Grid>
                </Grid>

              </Card>
            </Grid>

            {/*   BOTÓN PARA VOLVER A MENÚ   */}
            <Button size='large' variant='contained' color='secondary' component={Link}to="/menu"> 
              Volver a menú 
            </Button>
            <Button size='large' variant='contained' color='secondary' onClick={solve}> 
              {answer} 
            </Button>
            <Button size='large' variant='contained' color='secondary'> 
              Siguiente 
            </Button>
          </Grid>




        </Container>
      </main>


      {/* Footer */}
      <Box mt={5}>
        <Copyright />
      </Box>
      <br />
      {/* End footer */}
    </React.Fragment>
  );
}

export default Level;
