import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { totalCartItems } = useCart();
  const { user, logout, isAuthenticated, } = useAuth()
 
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold">
          ShopEase
        </h1>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <Link to="/store">Home</Link>

         {/* Logged Out */}
        {!isAuthenticated && (
          <>

            <Link
              to="/login"
              className="hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-black text-white px-4 py-2 rounded-xl"
            >
              Sign Up
            </Link>

          </>
        )}

        {/* Logged In */}
        {isAuthenticated && (
          <>

            <p className="font-medium">
              Hello, {user.name}
            </p>

            <button
              onClick={logout}
              className="border px-4 py-2 rounded-xl hover:bg-gray-100"
            >
              Logout
            </button>

          </>
        )}

        <Link
          to="/cart"
          className="relative"
        >
          <FiShoppingCart size={24} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {totalCartItems}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;