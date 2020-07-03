import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { listUsers } from '../controllers/gamescoreAPI'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Background from "../images/background_image.jpg"
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


const useStyles= makeStyles({
  mainGrid:{
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundImage: 'url(' + Background + ')',
    height:'100%',
    justifyContent: "center"
  },
  table: {
    minWidth: 200
  } 
})


const Scoreboard = () => {

  const classes = useStyles()

  // States
  const [userData, setUserData] = useState([])

  // API call
  useEffect(() => {
    const fetchUserData = async () => {
      const userDataAPI = await listUsers()

      console.log(userDataAPI)

      if (Array.isArray(userDataAPI)) {
        userDataAPI.sort((a,b)=>b.score-a.score)
        setUserData(userDataAPI)
      }
      
    }
    fetchUserData()
  }, []) 

  // Handlers




  return (
    <Fragment>

      <CssBaseline />
      <Navbar />

      <main>
        <Hero textLine='Tabla de Puntajes'/>

        <Grid container className={classes.mainGrid} spacing={1}>

          <Grid item xs={6} sm={6} md={4} lg={4}>
          
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight:"bolder"}}>Nombre</TableCell>
                    <TableCell align="right" style={{fontWeight:"bolder"}}>Puntaje</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.firstName+" "+row.lastName}
                      </TableCell>
                      <TableCell align="right">{row.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>  

          </Grid>

        </Grid>

      </main>

      <Footer />
    </Fragment>
  )


}

export default Scoreboard