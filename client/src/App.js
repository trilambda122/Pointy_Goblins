import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import STRNavbar from "./components/layout/STRNavbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Team from "./pages/Team";
import Favorites from "./pages/Favorites";
import "./App.css";
import { ProvideAuth, useAuth } from "./utils/authContext";
import ListingContext from "./utils/ListingContext";

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => (auth.user ? children : <Redirect to={{ pathname: "/signin", state: { from: location } }} />)}
    />
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const [city, setCity] = useState("");
  const [listings, setListings] = useState([]);

  return (
    <ProvideAuth>
      <ListingContext.Provider value={{ city, listings, setCity, setListings }}>
        <Router>
          <STRNavbar />
          <Container className="p-0" fluid={"true"}>
            <Switch>
              <Route exact path="/signin" render={() => <Signin />} />
              <Route exact path="/" render={() => <Signup />} />
              <PrivateRoute exact path="/landing">
                <Landing />
              </PrivateRoute>
              <PrivateRoute exact path="/api/:city">
                <h1>Hi there</h1>
              </PrivateRoute>
              <PrivateRoute exact path="/search">
                <Search />
              </PrivateRoute>
              <PrivateRoute exact path="/favorites">
                <Favorites />
              </PrivateRoute>
              <PrivateRoute exact path="/team">
                <Team />
              </PrivateRoute>
            </Switch>
          </Container>
        </Router>
      </ListingContext.Provider>
    </ProvideAuth>
  );
}

export default App;
