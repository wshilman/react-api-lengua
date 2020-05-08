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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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


const Level2 = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
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
              component="h2"
              variant="h3"
              align="center"
            >
              NIVEL 2
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid}>
          
          {/* NIVEL 3 */}
          <Grid container justify="center" spacing={4}>
            {/* carta con información */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{backgroundColor:"#DCE775"}}>
                <h2 style={{textAlign:"center"}}> Elegí las correctas </h2>
                <p style={{textAlign:"center", margin:"0"}}> A tu derecha tenés uun montón de palabras....
                alguien que redacte esto mejor... 
                </p>
              </Card>
            </Grid>
            {/* carta con el juego */}
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card} style={{backgroundColor:"#FFA726"}}>
                <Grid container justify="center" alignItems="stretch">
                  <Grid item xs={12} sm={12} md={12}> 
                    <RadioGroup aria-label="food" name="food1" value={value} onChange={handleChange}>
                        <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-between"}}>
                            <li><FormControlLabel value="anvorguesa" control={<Radio />} label="anvorguesa"  /></li>
                            <li><FormControlLabel value="hamburguesa" control={<Radio />} label="hamburguesa"  /></li>
                            <li><FormControlLabel value="hamburgüesa" control={<Radio />} label="hamburgüesa"  /></li>
                        </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="talk" name="talk1" value={value} onChange={handleChange}>
                        <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-between"}}>
                            <li><FormControlLabel value="havlar" control={<Radio />} label="havlar"  /></li>
                            <li><FormControlLabel value="ablar" control={<Radio />} label="ablar"  /></li>
                            <li><FormControlLabel value="hablar" control={<Radio />} label="hablar"  /></li>
                            <li><FormControlLabel value="hablár" control={<Radio />} label="hablár"  /></li>
                            <li><FormControlLabel value="avlar" control={<Radio />} label="avlar"  /></li>
                        </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="science" name="science1" value={value} onChange={handleChange}>
                        <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-between"}}>
                            <li><FormControlLabel value="ciéncia" control={<Radio />} label="ciéncia"  /></li>
                            <li><FormControlLabel value="ciensia" control={<Radio />} label="ciensia"  /></li>
                            <li><FormControlLabel value="sciéncia" control={<Radio />} label="sciéncia"  /></li>
                            <li><FormControlLabel value="ciencia" control={<Radio />} label="ciencia"  /></li>
                        </ul>
                    </RadioGroup>
                    <RadioGroup aria-label="fast" name="fast1" value={value} onChange={handleChange}>
                        <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-between"}}>
                            <li><FormControlLabel value="velocidad" control={<Radio />} label="velocidad"  /></li>
                            <li><FormControlLabel value="belocidad" control={<Radio />} label="belocidad"  /></li>
                            <li><FormControlLabel value="velosidad" control={<Radio />} label="velosidad"  /></li>
                            <li><FormControlLabel value="velocidád" control={<Radio />} label="velocidád"  /></li>
                        </ul>
                    </RadioGroup>
                  </Grid>
                </Grid>

              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <ul style={{listStyle:"none", padding:"0", margin:"0", display:"flex", justifyContent:"space-between"}}>
                <li><Button size='large' variant='contained' color='secondary' component={Link}to="/menu"> 
                  Volver 
                </Button></li>

                <li><Button size='large' variant='contained' color='secondary' > 
                  ANSWER
                </Button></li>
                
                <li><Button size='large' variant='contained' color='secondary' component={Link}to="/level3"> 
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

export default Level2;
