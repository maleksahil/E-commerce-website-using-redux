import React from 'react';

const Register = ({openLogin}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transperant px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">Name</label>
            <input
              type="text"
              id="email"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

       

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <span>Already have an account?</span>
          <button className="ml-1 text-blue-600 hover:underline" onClick={openLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
