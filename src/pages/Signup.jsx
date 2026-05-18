import { useState } from "react";
import { Link, useNavigate }
from "react-router-dom";

import { useAuth }
from "../context/AuthContext";

function Signup() {

  const navigate =
    useNavigate();

  const { signup } =
    useAuth();

  const [formData,
    setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    // Validation
    if (
      !name ||
      !email ||
      !password
    ) {

      setError(
        "Please fill all fields"
      );

      return;
    }

    if (
      password !==
      confirmPassword
    ) {

      setError(
        "Passwords do not match"
      );

      return;
    }

    const result =
      signup(
        name,
        email,
        password
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
      "/login"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Join ShopEase
        </p>

        {error && (
          <p className="text-red-500 mb-4 text-center">
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
            type="text"
            name="name"
            placeholder="Full Name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={
              formData.confirmPassword
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
            Sign Up
          </button>

        </form>

        <p className="text-center mt-5 text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;