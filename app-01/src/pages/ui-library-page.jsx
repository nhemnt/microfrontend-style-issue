import Page from "../Page";
import React from "react";


const App = React.lazy(() => import("app_03/App"));

const UiLibraryPage = () => (
  <Page title="UI Library Demo">
    <React.Suspense fallback="Loading Styled Button...">
      <App/>
    </React.Suspense>
  </Page>
);

export default UiLibraryPage;
