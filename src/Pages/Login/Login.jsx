import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //Sign In User
    signInUser(email, password)
    .then(result => {
        console.log(result.user);
    })
    .catch(error => {
        console.log(error);
    })
  };
  return (
   <div className="hero bg-base-200 min-h-screen flex items-center justify-center p-6">
  <div className="card bg-base-100 w-full max-w-md shadow-2xl border border-base-300">
    <div className="card-body gap-8 p-8 lg:p-10">
      
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Welcome Back
        </h1>
        <p className="text-sm text-base-content/60 mt-3 font-medium">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Social Login Section */}
      <div className="space-y-4">
        <button className="btn btn-outline flex items-center gap-3 w-full border-base-300 hover:bg-base-200 transition-all font-semibold shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
          Continue with Google
        </button>
      </div>

      <div className="divider text-[10px] text-base-content/40 uppercase font-bold tracking-widest">
        Or login with email
      </div>

      {/* Form Fields */}
      <form onSubmit={handleLogin} className="space-y-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold opacity-70">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered focus:input-primary transition-all w-full bg-base-200/30"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold opacity-70">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input input-bordered focus:input-primary transition-all w-full bg-base-200/30"
            required
          />
          <div className="text-right mt-2">
            <a href="#" className="text-xs link link-primary no-underline font-semibold hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-5 pt-2">
          <button className="btn btn-primary shadow-xl shadow-primary/20 text-white font-bold text-lg">
            Sign In
          </button>

          <p className="text-center text-sm font-medium">
            Don&apos;t have an account?
            <Link to="/register" className="text-primary font-extrabold ml-2 hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

);
};


export default Login;
