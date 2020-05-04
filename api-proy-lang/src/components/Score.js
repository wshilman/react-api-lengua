import React from "react";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/paper";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import AvatarImg from "../src/images/logo_monster.png";
import { Copyright } from "./components/Copyright.jsx";
import { useStyles } from "./components/styles.js";

function Score() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar
            alt="avatar_monster"
            src={AvatarImg}
            className={classes.avatar}
          />

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Nombre"
              label="Nombre"
              name="Nombre"
              autoComplete="Nombre"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Apellido"
              label="Apellido"
              type="Apellido"
              id="Apellido"
              autoComplete="Apellido"
            />

            <Button
              type="Ingresar"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Jugar !!
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Score;
