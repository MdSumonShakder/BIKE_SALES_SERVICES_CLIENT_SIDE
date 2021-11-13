import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Notfound from "./Pages/NotFound/Notfound";
import Navigation from "./Pages/Shared/Header/Navigation";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Reviews from './Pages/Home/Reviews/Reviews';
import Gallery from "./Pages/Home/Gallery/Gallery";
import Order from './Pages/Order/Order';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explores from './Pages/Explore/Explores/Explores';
import AddServices from "./Pages/AddServices/AddServices";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";






function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route exact path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route exact path="/explore">
              <Explores></Explores>
            </Route>
            <Route exact path="/addServices">
              <AddServices></AddServices>
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/order/:key">
              <Order></Order>
            </PrivateRoute>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
