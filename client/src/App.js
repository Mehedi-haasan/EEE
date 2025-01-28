import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Share/Footer";
import Header from "./Share/Header";
import Registration from "./Components/Login/Registration";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/Login/ForgetPassword";
import Profile from "./Components/Profile/Profile";
import ProductDetails from './Components/Products/ProductDetails'
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Payment from "./Components/Payment/Payment";
import About from "./Components/About/About";
import Offer from "./Components/Offer/Offer";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import EditProfile from "./Components/Profile/EditProfile";
import ProductReq from "./Components/Products/ProductReq";
import AllProduct from "./Components/Products/AllProduct";
import Category from "./Components/Category/Category";
import Invoice from "./Components/Invoice/Invoice";
import Order from "./Components/Order/Order";
import Success from "./Components/PaymentSuccess/Success";
import Cancel from "./Components/PaymentSuccess/Cancel";
import Failed from "./Components/PaymentSuccess/Failed";
import FeedBack from "./Components/FeedBack/FeedBack";
import LiveChat from "./Components/LiveChat/LiveChat";



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success/:tran_id" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/payments/:id/:qty" element={<Payment />} />
        <Route path="/product" element={<Product />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category/:id/:name" element={<Category />} />
        <Route path="/edit/profile" element={<EditProfile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />
        <Route path="/product/feedback/:id" element={<FeedBack />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/liveChat" element={<LiveChat />} />
        <Route path="/productrequest" element={<ProductReq />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
