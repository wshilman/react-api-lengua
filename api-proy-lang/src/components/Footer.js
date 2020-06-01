import React from 'react';
import { Copyright } from "./Copyright.jsx";
import { makeStyles } from '@material-ui/core';


const useStyles= makeStyles({
  footer:{
    padding: '6px',
    marginTop: '40px',
    alignSelf: 'baseline'
  }
});


const Footer = () => {

  const classes = useStyles();

  return(

    <footer className={classes.footer}>
        <Copyright />
    </footer>

  );

}

export default Footer;