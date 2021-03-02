
import React from "react";
import { Button } from '@material-ui/core';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
const Page = React.lazy(() => import("app_01/Page"));

const generateClassName = createGenerateClassName({
  productionPrefix: 'app-03',
  seed: 'app-03-root'
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>

    <React.Suspense fallback={null}>
    
      <Page title="Styled Components App">
        <Button>&#128133; Test Button</Button>
      </Page>
    </React.Suspense>
    </StylesProvider>
  );
}

export default App;
