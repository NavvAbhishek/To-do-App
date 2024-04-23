import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue">
      <div className="login-form flex flex-col items-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="mb-10 text-3xl font-bold text-pink">📝 Register</h1>
        <form className="flex flex-col justify-center space-y-4">
          <label className="font-semibold">Enter Name:</label>
          <input
            type="text"
            className="w-80 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
          />
          <label className="font-semibold">Enter Email:</label>
          <input
            type="email"
            className="w-80 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
          />
          <label className="font-semibold">Enter password:</label>
          <input
            type="password"
            className="w-80 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
          />
          <button className="w-80 mt-4 px-4 py-2 bg-pink text-white rounded-lg hover:bg-purple transition-colors">
           Register
          </button>
          <div>
            <p className="mt-3 text-sm font-semibold text-red-600">
              Error message
            </p>
            <div className="text-center">
              <p className="mt-4 text-sm">
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
