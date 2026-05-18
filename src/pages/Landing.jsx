import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="text-center">

        <h1 className="text-6xl font-bold mb-5">
          ShopEase
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Premium Ecommerce Experience
        </p>

        <div className="flex justify-center gap-4">

          <Link
            to="/signup"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="border px-6 py-3 rounded-xl"
          >
            Login
          </Link>

          <Link
            to="/store"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Explore Store
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Landing;