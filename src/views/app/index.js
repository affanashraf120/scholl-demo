import React, { Component, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";

//Custom pages added
import Students from "./customPages/Students";
import Teachers from "./customPages/Teachers";
import Parents from "./customPages/Parents";
import Dashboard from "./customPages/Dashboard";

// const Dashboards = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ "./dashboards")
// );
// const Pages = React.lazy(() =>
//   import(/* webpackChunkName: "pages" */ "./pages")
// );
// const Applications = React.lazy(() =>
//   import(/* webpackChunkName: "applications" */ "./applications")
// );
// const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ "./ui"));
// const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ "./menu"));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ "./blank-page")
);
const DataList = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './pages/product/data-list')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/dashboard`}
              />
              <Route
                path={`${match.url}/dashboard`}
                render={(props) => <Dashboard {...props} />}
              />
              <Route
                path={`${match.url}/students`}
                render={(props) => <DataList {...props} />}
              />
              <Route
                path={`${match.url}/teachers`}
                render={(props) => <DataList {...props} />}
              />
              <Route
                path={`${match.url}/parents`}
                render={(props) => <DataList {...props} />}
              />
              <Route
                path={`${match.url}/courses`}
                render={(props) => <DataList {...props} />}
              />
              <Route
                path={`${match.url}/classes`}
                render={(props) => <BlankPage {...props} />}
              />
              <Route
                path={`${match.url}/attendence`}
                render={(props) => <BlankPage {...props} />}
              />
              <Route
                path={`${match.url}/settings`}
                render={(props) => <BlankPage {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
