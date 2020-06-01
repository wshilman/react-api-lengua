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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Level = () => {
  const classes = useStyles();



  return (
    <React.Fragment>
      <CssBaseline />
      <main>
       
        <Container className={classes.cardGrid}>
          
          {/* NIVEL 3 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#AED581"}}>
                <h2 style={{textAlign:"center"}}> Identificá las acciones </h2>
                <p style={{textAlign:"center", margin:"0"}}> A tu derecha tenés seis imágenes de personas haciendo alguna acción. 
                Identificalas y hacé click en las que vos pensas que son kecsho arreglate..... alguien que redacte esto mejor... 
                </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFCC80"}}>
                {/*<Grid container justify="center" alignItems="stretch">*/}
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
                  <Grid item xs={12} sm={12} md={6}> 
                  <form>
                    
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><FormControlLabel control={<Checkbox />} label="hablar"  /></li>
                      <li><FormControlLabel control={<Checkbox />} label="estudiar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="nadar" /></li>
                    </ul>
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><FormControlLabel control={<Checkbox />} label="saludar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="remar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="cocinar" /></li>
                    </ul>
                    <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-around"}}>
                      <li><FormControlLabel control={<Checkbox />} label="construir" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="esquiar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="codificar" /></li>
                    
                    
                      <li><FormControlLabel value control={<Checkbox />} label="trepar" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="dormir" /></li>
                      <li><FormControlLabel control={<Checkbox />} label="correr" /></li>
                    </ul>
                    </form>

                  </Grid>
                

              </Card>
            
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-between"}}>
                <li><Button size='large' variant='contained' color='secondary' component={Link}to="/menu"> 
                  Volver 
                </Button></li>

                <li><Button size='large' variant='contained' color='secondary'> 
                  Answer 
                </Button></li>
                
                <li><Button size='large' variant='contained' color='secondary' component={Link}to="/level2"> 
                  Siguiente 
                </Button></li>
              </ul>
            </Grid>


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
