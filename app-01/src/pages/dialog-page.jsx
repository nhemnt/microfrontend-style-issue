
import Page from "../Page";
import React from "react";

const Dialog = React.lazy(() => import("app_02/App"));

const DialogPage = () => (
  <Page title="Dialog Demo">
    <React.Suspense fallback="Loading Dialog...">
      <Dialog />
    </React.Suspense>
  </Page>
);

export default DialogPage;
