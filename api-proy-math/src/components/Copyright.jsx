import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/bogado29/react-api">
        Child's Play
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export { Copyright };
