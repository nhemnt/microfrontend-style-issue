import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import { HashRouter } from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import SideNav from "./SideNav";




const generateClassName = createGenerateClassName({
  productionPrefix: 'app-01',
  seed: 'app-01-root'
});




const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <HashRouter>
    <StylesProvider generateClassName={generateClassName}>
    <CssBaseline />
      <div className={classes.root}>
        <SideNav />
        <Routes />
      </div>
    </StylesProvider>

    </HashRouter>
  );
}

export default App;
