import React, { Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

const FromHome = lazy(() => import("./componets/Home"));
const FromPage = lazy(() => import('./componets/FromPage'));
const FromList = lazy(() => import('./componets/List'))

const Loader = (<Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>)

const router = () => {
  return (
    <Suspense fallback={Loader}>
        <React.Fragment>
          <Switch>
            <Route exact path={"/"} component={FromHome} />
            <Route exact path={"/surveylist/page"} component={FromList} />
            <Route exact path={"/survey/:id"} component={FromPage} />
          </Switch>
        </React.Fragment>
    </Suspense>
  );
};

export default router;