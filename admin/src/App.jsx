import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Share/Header.jsx'
import Dashboard from "./Components/Dashboard/DashboardGraph.jsx";
import CreactProduct from "./Components/ProductCreate/CreactProduct.jsx";
import Product from './Components/Products/Products.jsx';
import Container from "./Container.jsx";
import SingleOrder from "./Components/SingleOrder/SingleOrder.jsx";
import Order from "./Components/Order/Order.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Login from "./Components/Login/Login.jsx";
import { useState, useEffect } from "react";
import Registration from "./Components/Login/Registration.jsx";
import Sell from "./Components/Sell/Sell.jsx";
import Success from "./Components/Socket/Success.jsx";
import Notification from "./Components/Notification/Notification.jsx";
import Company from "./Components/Company/Company.jsx";
import Category from "./Components/Category/Category.jsx";



const DashboardContainer = ({ isLoggedOut }) => {
  return (
    <Container isLoggedOut={isLoggedOut}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/success" element={<Success />} />
        <Route path="/create" element={<CreactProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user/order" element={<SingleOrder />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/order" element={<Order />} />
        <Route path="/company/info" element={<Company />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Container>
  )
}


const AuthContainer = ({ auth }) => {
  return (
    <Routes>
      <Route path="/" element={<Login auth={auth} />} />
    </Routes>
  )
}


function App() {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== "null") {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [])


  return (
    <BrowserRouter>
      <Header auth={auth} />
      {auth ? <DashboardContainer isLoggedOut={() => { setAuth(false) }} /> : <AuthContainer auth={() => setAuth(true)} />}
    </BrowserRouter>
  );
}

export default App;
