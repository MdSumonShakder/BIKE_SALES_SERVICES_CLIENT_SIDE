import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Pay from "./Pages/Dashboard/Pay/Pay";
import Review from "./Pages/Dashboard/ReviewBox/Review";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AddServices from "./Pages/Dashboard/AddServices/AddServices";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navigation></Navigation>
          <Routes>
            <Route exact path="/" element={ <Home/>}>
            </Route>
            <Route path="/home" element={<Home/>}>
            </Route>
            <Route exact path="/login" element={ <Login/>}>
            </Route>
            <Route exact path="/register" element={<Register/>}>
            </Route>
            <Route exact path="/reviews" element={<Reviews/>}>
            </Route>
            <Route exact path="/gallery" element={<Gallery/>}>
            </Route>
            <Route exact path="/explore" element={<Explores/>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
             <Dashboard/>
            </PrivateRoute>}>
            <Route path={`/dashboard/pay`} 
            element={<Pay/>}>
                    </Route>
                    <Route path={`/dashboard/review`} element={<Review/>}>
                    </Route>
                    <Route path={`/dashboard/myOrders`} element={<MyOrders/>}>
                    </Route>
                    <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                        <MakeAdmin/>
                    </AdminRoute>}>
                    </Route>
                    <Route path={`/dashboard/addServices`} element={<AdminRoute>
                        <AddServices/>
                    </AdminRoute>}>
                        
                    </Route>
            </Route>
            <Route  path="/order/:key" element={<PrivateRoute>
            <Order/>
            </PrivateRoute>}>  
            </Route>
            <Route path="*" element={<Notfound/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;








