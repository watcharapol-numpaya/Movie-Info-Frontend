import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
  };
  const renderSignUpPage = () => {
    return (
      <div className="xl:container mx-auto  ">
        <div className="flex items-center justify-center sm:min-h-screen bg-gray-100  ">
          <div className="bg-white rounded-lg shadow-md p-8 sm:w-96 w-full sm:h-full h-screen">
            <div className="w-full flex justify-center pb-6">
              <span className="tracking-widest0.25 font-bold text-lg text-yellow-400">
                MOVIEINFO
              </span>
            </div>
            <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
            <form className="space-y-4" onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-yellow-500 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderSignUpPage()}</div>;
};

export default SignUpPage;
