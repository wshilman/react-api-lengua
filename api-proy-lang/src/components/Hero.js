import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';


const useStyles= makeStyles({
  heroContent:{
    padding: '5px',
  }
});

const Hero = ({textLine}) => {

  const classes = useStyles();

  return(

    <header style={{padding:"10px"}}>

      <Typography className={classes.heroContent} variant="h3" align="center">
        {textLine}
      </Typography>

    </header>

  );
}

export default Hero;