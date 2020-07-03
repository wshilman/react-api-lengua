import React, { Fragment, useEffect, useState } from 'react'
import { listUsers } from '../controllers/gamescoreAPI'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useStyles } from "./styles.js";



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

      <main style={{backgroundColor:"#ccffff"}}>
        <Hero textLine='Tabla de Puntajes'/>
        <br />

        <Grid container className={classes.mainGrid2} style={{justifyContent:"center"}} spacing={1}>

          <Grid item xs={8} sm={8} md={6} lg={6}>
          
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow style={{backgroundColor:"#FFCA28"}}>
                    <TableCell align="center" style={{fontWeight:"bolder", fontSize:"larger"}}>NOMBRE</TableCell>
                    <TableCell align="center" style={{fontWeight:"bolder", fontSize:"larger"}}>PUNTAJE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell style={{backgroundColor:"#FFE082"}} component="th" scope="row">
                        {row.firstName+" "+row.lastName}
                      </TableCell>
                      <TableCell style={{backgroundColor:"#FFE082"}} align="right">
                        {row.score}
                      </TableCell>
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