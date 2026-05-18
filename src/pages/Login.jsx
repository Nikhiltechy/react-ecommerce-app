import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth }
from "../context/AuthContext";

function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [formData,
    setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [error,
    setError] =
    useState("");

  const handleChange =
    (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit =
    (e) => {

    e.preventDefault();

    setError("");

    const result =
      login(
        formData.email,
        formData.password
      );

    if (
      !result.success
    ) {

      setError(
        result.message
      );

      return;
    }

    navigate(
      "/store"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to ShopEase
        </p>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-xl hover:opacity-90"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-5 text-gray-600">

          Don’t have an account?

          <Link
            to="/signup"
            className="text-blue-600 ml-2"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;