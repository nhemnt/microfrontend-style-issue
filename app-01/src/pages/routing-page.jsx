import Page from "../Page";
import React from "react";


const RoutedTabs = React.lazy(() => import("app_02/App"));

const RoutingPage = () => (
  <Page title="Routing Demo">
    <React.Suspense fallback="Loading Tabs...">
      <RoutedTabs />
    </React.Suspense>
  </Page>
);

export default RoutingPage;
