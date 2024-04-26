"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!user.name || !user.email || !user.password) {
      setError("Please fill all fields!");
      return;
    } else {
      setError("");
    }
    try {
      const res = await axios.post("api/register", user);
      console.log("Registration successful", res.data);
      router.push("/login");
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setLoading(false);
      setUser({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue">
      <div className="login-form flex flex-col items-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="mb-10 text-3xl font-bold text-pink">📝 Register</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center space-y-4"
        >
          <label className="font-semibold">Enter Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-80 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
          />
          <label className="font-semibold">Enter Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-80 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
          />
          <label className="font-semibold">Enter password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-80 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
          />
          <button className="w-80 mt-4 px-4 py-2 bg-pink text-white rounded-lg hover:bg-purple transition-colors">
            {loading ? "Processing..." : "Register"}
          </button>
          <div>
            {error ? (
              <p className="text-sm font-semibold text-red-600">{error}</p>
            ) : (
              <p className="text-sm invisible">a</p>
            )}
            <div className="text-center">
              <p className="mt-2 text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-pink hover:text-blue-700 font-medium"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
