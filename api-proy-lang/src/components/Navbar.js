import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import AvatarImg from "../images/logo_monster.png";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useStyles } from "./styles.js";


export default function ButtonAppBar() {
  const classes = useStyles();

  const nombreFromSession = sessionStorage.getItem("SesStorNombre");
  const apellidoFromSession = sessionStorage.getItem("SesStorApellido");
  const puntajeFromSession = sessionStorage.getItem("SesStorPuntaje");

  return (
    <div className={classes.root3}>
      <Toolbar width="100%" classes={{ root: classes.root2 }} align="center">
        <Avatar src={AvatarImg} />
        <div>{apellidoFromSession}</div>
        <div>-</div>
        <div>{nombreFromSession}</div>
        <Typography variant="h6" className={classes.title}>
          Apalabrando ! 
        </Typography>
        <Button className={classes.pinkhover} component={Link} to="/scoreboard">
          <p style={{color:"white", fontWeight:"bold"}}> 
            PUNTOS:
          </p>
          <div style={{fontWeight:"bold"}}> {puntajeFromSession} </div>
        </Button>
      </Toolbar>
    </div>
  );
}
