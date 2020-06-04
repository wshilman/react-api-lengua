import React, { Fragment } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Card } from '@material-ui/core';
import Hero from './Hero';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Background from "../images/background_image.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles= makeStyles({
  mainGrid:{
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundImage: "url(" + Background + ") ",
    height:'100%'
  },
  navButtons:{
    display: 'flex',
    justifyContent:'space-around',
    marginTop:'40px'
  },
  textCard:{
    backgroundColor:'#AED581',
    height:'100%',
    textAlign:'center'
  },
  choicesCard:{
    backgroundColor:'#FFA726',
    borderRadius:'4px',
    justifyContent:'center',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  imgCard:{
    backgroundColor:'white',
    display: 'flex',
    justifyContent:'space-around',
  }
});


const Game1 = () => {

  const classes = useStyles();

  const [answer, setAnswer] = React.useState('Validar')

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
    checkedL: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const clickFunction = function () {
    if(!state.checkedA&&
      !state.checkedB&&
      state.checkedC&&
      state.checkedD&&
      state.checkedE&&
      !state.checkedF&&
      !state.checkedG&&
      state.checkedH&&
      !state.checkedI&&
      state.checkedJ&&
      !state.checkedK&&
      state.checkedL){

      setAnswer('Correcto!')

    } else {

      setAnswer('Incorrecto')

    }
    
  }



  return (

    <Fragment>
      <CssBaseline />

      <Navbar />

      <Hero textLine='Nivel 1' />

      <main>

      <Grid container className={classes.mainGrid} spacing={1}>
        
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.textCard}>
            <p>Esto es un texto largo y no se q wua escribir lalalala</p>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>

          <Card className={classes.imgCard}>

            <img src={require("../images/remar.png")} alt="remar" />
            <img src={require("../images/correr.png")} alt="correr"/>
            <img src={require("../images/trepar.png")} alt="trepar" width="72px" height="72"/>
            <img src={require("../images/saludar.png")} alt="saludar" />
            <img src={require("../images/nadar.png")} alt="nadar"/>
            <img src={require("../images/esquiar.png")} alt="esquiar"/>

          </Card>
            
          <FormGroup row className={classes.choicesCard}>
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="hablar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
              label="estudiar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
              label="nadar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
              label="saludar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
              label="remar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
              label="cocinar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
              label="construir"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedH} onChange={handleChange} name="checkedH" />}
              label="esquiar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedI} onChange={handleChange} name="checkedI" />}
              label="saltar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedJ} onChange={handleChange} name="checkedJ" />}
              label="trepar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedK} onChange={handleChange} name="checkedK" />}
              label="dormir"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedL} onChange={handleChange} name="checkedL" />}
              label="correr"
            />
        
          </FormGroup>  
          
        </Grid>

        <Grid item xs={12} sm={12} md={12} className={classes.navButtons}>

            <Button size='large' variant='contained' color='secondary' component={Link}to="/menu"> 
              Volver 
            </Button>

            <Button size='large' variant='contained' color='secondary' onClick={clickFunction}> 
              {answer} 
            </Button>
                
            <Button size='large' variant='contained' color='secondary' component={Link}to="/level2"> 
              Siguiente 
            </Button>
              
        </Grid>
      
        
      </Grid>
    
      </main>

      <Footer />

    </Fragment>
    
  );
}

export default Game1;