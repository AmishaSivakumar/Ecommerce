import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Products from "./Pages/Products"
import MoreDetails from "./Pages/MoreDetails"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Wishlist from "./Pages/Wishlist"
import Profile from "./Pages/Profile"
import Success from "./Pages/Success"
import AdminDashboard from "./Pages/AdminPanel/Dashboard"
import UserManagement from "./Pages/AdminPanel/UserManagement"
import ProductManagement from "./Pages/AdminPanel/ProductManagement"
import AdminLogin from "./Pages/AdminPanel/AdminLogin"
import SalesReport from "./Pages/AdminPanel/SalesReport"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/moredetails/:id" element={<MoreDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/productmanagement" element={<ProductManagement />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/salesreport" element={<SalesReport />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
