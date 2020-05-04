import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import lightGreen from '@material-ui/core/colors/lightGreen';
import AvatarImg from "../images/logo_monster.png";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  lightGreen: {
    color: theme.palette.getContrastText(lightGreen[300]),
    backgroundColor: lightGreen[300],
  },
  root2: {
    backgroundColor: '#64B5F6',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar width="100%" classes={{root: classes.root2}}> 
            <Avatar src={AvatarImg}/>

            <Typography align="center" variant="h6" className={classes.title}>
              <h2> MENÚ </h2>
            </Typography>

            <Button className={classes.lightGreen}> 
              PUNTOS?? 
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}