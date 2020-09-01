import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import FarmersMarkets from "./pages/FarmersMarkets";
import Facts from "./pages/Facts";
import User from "./pages/User";
import NoMatch from "./pages/NoMatch";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

const App = () => {
  // const { isLoading, error } = useAuth0();

  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/farmers-markets">
            <FarmersMarkets />
          </Route>

          <Route exact path="/facts">
            <Facts />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
