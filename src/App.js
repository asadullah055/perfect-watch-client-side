import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
// import Navigation from "./Pages/Shared/Navigation/Navigation";
import AllWatch from "./Pages/AllWatch/AllWatch";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/allWatch">
              <AllWatch />
            </Route>
            <PrivetRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
