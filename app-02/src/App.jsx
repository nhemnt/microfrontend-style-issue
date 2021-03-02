import React from "react";
import {  ThemeProvider, Typography } from "@material-ui/core";
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import { HashRouter } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { theme } from "./theme";
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'app-02',
  seed: 'app-02-root'
});


const useStyles = makeStyles({
  btn: {
      background: '#fff',
      padding: '10px 40px',
      borderRadius: '10px',
      fontSize: '14px',
      border: '1px solid #efefef',
      fontWeight: 600
  }
});



function App() {
  const classes = useStyles()
  return (
    <HashRouter>
     <StylesProvider generateClassName={generateClassName}>

    
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={null}>
            <AppBar >
                <Toolbar>
                    Toolbar
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className="p-3">
            <Grid container style={{ marginTop: '120px' }}>
          <Grid item>
              <Typography
                  paragraph
                  variant="h5">
                  Header
              </Typography>
              <Button className={classes.btn}>
                    <span>Replace CSV</span>
                </Button>
          </Grid>
      </Grid>
        </Container>
        </React.Suspense>
      </ThemeProvider>
      </StylesProvider>
    </HashRouter>
  );
}

export default App;
