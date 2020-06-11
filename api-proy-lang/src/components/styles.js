import { makeStyles } from "@material-ui/core/styles";
import Background from "../images/background_image.jpg";
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
  avatar: {
    height: "50%",
    width: "50%",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3) 
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
  },


  

}));

export { useStyles };
