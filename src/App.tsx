import { Route, Routes } from "react-router"
import LayoutBase from "./layout_base"
import LayoutAuth from "./layout_auth"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <Routes>

      <Route element={<LayoutBase />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      <Route element={<LayoutAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

    </Routes>
  )
}

export default App
