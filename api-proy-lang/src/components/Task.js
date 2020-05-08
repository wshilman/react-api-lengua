import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Box, Button } from "@material-ui/core";
import Navbar from "../components/Navbar.js";
import { Copyright } from "./Copyright.jsx";

const useStyles = makeStyles((theme) => ({
  
}));

const Task = props => {

  const [buttonState, setButtonState] = useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setButtonState(true);
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
            color="textPrimary"
            gutterBottom
          >
            Completar las palabras
          </Typography>
        </Container>
      </div>
      {/* End hero unit */}
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
           

           <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              disabled={buttonState}
              onClick={handleClick}
            >
              Error
            </Button>
           
              
          
                
              
            
          </Grid>
        </Grid>
      </Container>
    </main>
    {/* Footer */}
    <Box mt={5}>
      <Copyright />
    </Box>
    {/* End footer */}
  </React.Fragment>
  );
}

export default Task;
