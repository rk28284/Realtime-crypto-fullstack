import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const Register = () => {

const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://realtime-crypto-backend.onrender.com/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Registration successful!");
        setFormData({ username: "", email: "", password: "" });
      } else {
        const data = await response.json();
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };



  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <label className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-6 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}


