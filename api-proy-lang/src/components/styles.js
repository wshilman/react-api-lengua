import { makeStyles } from "@material-ui/core/styles";
import Background from "../images/background_image.jpg";
import { pink, lightGreen } from '@material-ui/core/colors';

/*
Archivo de estilos
*/

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  radioLeft: {
    textalign: "left",
  },
  avatar: {
    height: "50%",
    width: "50%",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    backgroundImage: "url(" + Background + ") ",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  appbar: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 100,
    maxWidth: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  mainGrid: {
    paddingTop: "80px",
    paddingBottom: "80px",
    backgroundImage: "url(" + Background + ") ",
    height: "100%",
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
  },
  textCard: {
    backgroundColor: "#AED581",
    height: "100%",
    textAlign: "center",
  },
  choicesCard: {
    backgroundColor: "#FFA726",
    borderRadius: "4px",
    justifyContent: "center",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  imgCard: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
  },
  root3: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pinkhover: {
    height: "100%",
    color: theme.palette.getContrastText(lightGreen[300]),
    backgroundColor: pink[200],
    "&:hover": {
      backgroundColor: lightGreen[300],
    },
  },
  root2: {
    backgroundColor: "#64B5F6",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  words: {
    padding: ".2rem",
    display: "inline-block",
    fontWeight: "bold",
    backgroundColor: "#FF9800",
    borderRadius: "5px",
    cursor: "pointer",
    height: "25px",
    '&:hover': {
      backgroundColor: pink[300],
    },
  },
  listas: {
    listStyle: "none", 
    padding: "0", 
    margin: "0", 
    display: "flex", 
    justifyContent: "space-around",
  },
  listas2: {
    listStyle: "none", 
    padding: "0", 
    margin: "0", 
    display: "flex", 
    justifyContent: "space-around",
    '&:hover': {
      backgroundColor: "#FFF59D",
    },
  },
  listas3: { 
    padding: "8px",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  listas4: { 
    listStyle: "none", 
    padding: "0", 
    margin: "0", 
    display: "flex", 
    justifyContent: "space-between",
    '&:hover': {
      backgroundColor: "#FFF59D",
    },
  },
  board: {
    background: "linear-gradient(#FFF59D, #FFCC80)",
    width: "110px",
    height: "25px",
    borderRadius: "5px",
    display: "inline-block",
    marginLeft: "3px",
    '&:hover': {
      background: "#FFCC80",
    },
  },
  board2: {
    width: "100%",
    backgroundColor: "#FFCC80",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  h4: {
    display: "inline-block",
    height: "25px",
    padding: "0",
    margin: "0",
    background: "linear-gradient(#ffd480, #ff99cc)",
    borderRadius: "5px",
  },
  divss: {
    textAlign: "center",
    margin: "3px",
    backgroundColor: "#ffd480",
    fontWeight: "bold",
  },
  pss: {
    margin: "8px",
  },



}));

export { useStyles };
