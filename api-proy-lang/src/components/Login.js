import React from "react";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/paper";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import AvatarImg from "../images/logo_monster.png";
import { Copyright } from "../components/Copyright.jsx";
import { useStyles } from "../components/styles.js";
import { Link } from "react-router-dom";

function Login() {
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const [state, setState] = React.useState({
    stateNombre: "",
    stateApellido: "",
  });

  //Borra todos los datos de sessionStorage
  sessionStorage.clear();

  // Save data to sessionStorage
  sessionStorage.setItem("SesStorNombre", state.stateNombre);
  sessionStorage.setItem("SesStorApellido", state.stateApellido);
  sessionStorage.setItem("SesStorPuntaje", "0");
  //alert(str);

  const findUserData = async () => {
    let user = {
      firstName: "state.stateNombre",
      lastName: "state.stateNombre",
    };

    const userDataAPI = await findUser(user);

    console.log(userDataAPI);

    if (Array.isArray(userDataAPI) && userDataAPI.length) {
      console.log("El nombre ya existe");
    }
  };

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
              name="stateNombre"
              autoComplete="Nombre"
              autoFocus
              value={state.stateNombre}
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="stateApellido"
              label="Apellido"
              type="Apellido"
              id="Apellido"
              autoComplete="Apellido"
              value={state.stateApellido}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={findUserData}
              className={classes.submit}
              component={Link}
              to="/menu"
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

export default Login;
