import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation("/");
      // You can handle successful login here, e.g., redirect to another page
      toast.success("Login successful!");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop-blur saturate-[180%] border-slate-300 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-5 w-[30vw] h-[40vh] bg bg-purpal-4">
        <h2 className="text-3xl">Welcome back,</h2>
        <form
          className="flex flex-col gap-2 items-center"
          onSubmit={handleLogin}
        >
          {!loading && (
            <>
              <div className="gap-4">
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  name="email"
                  className="bg-purpal-3 w-[18vw] h-9 rounded-md border-none outline-none text-white placeholder:text-center"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="your password"
                  name="password"
                  className="bg-purpal-3 w-[18vw] h-9 rounded-md border-none outline-none text-white placeholder:text-center"
                />
              </div>
              <button
                className="bg-[#5183fe] text-white w-[18vw] py-1 rounded-md border-none"
                disabled={loading}
              >
                {loading ? "Logging In..." : "Sign In"}
              </button>
              <div>
                <h1 className="text-lg text-gray-400">
                  New User?{" "}
                  <Link to="/signup" className="text-blue-400">
                    Signup
                  </Link>
                </h1>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
