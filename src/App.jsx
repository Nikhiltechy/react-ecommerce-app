import { BrowserRouter,Routes, Route } from "react-router-dom"
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layouts/MainLayout"
import Landing from "./pages/Landing";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Signup from "./pages/Signup";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return ( <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Landing/>} />
    <Route element = {<MainLayout />} >
    <Route path="/store" element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  } />
    <Route path="/cart" element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  } />
    <Route path="/product/:id" element={
    <ProtectedRoute>
      <ProductDetails />
    </ProtectedRoute>
  }
/>

    </Route>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />



  </Routes>

  </BrowserRouter>
  )
}

export default App