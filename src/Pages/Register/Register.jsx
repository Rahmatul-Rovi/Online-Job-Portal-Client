import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../../assets/lotties/Register.json";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center p-4">
      <div className="card bg-base-100 w-full max-w-5xl shadow-2xl border border-base-300 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          
          <div className="card-body w-full lg:w-1/2 gap-5 p-8 lg:p-12">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight">Create Account</h1>
              <p className="text-base text-base-content/60 mt-2">Join our job portal and start your career</p>
            </div>

            <button className="btn btn-outline btn-md flex items-center gap-3 w-full border-base-300 hover:bg-base-200 transition-all mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              <span className="font-medium">Sign up with Google</span>
            </button>

            <div className="divider text-xs text-base-content/40 uppercase font-bold">Or register with email</div>

            <div className="form-control w-full">
              <label className="label py-1"><span className="label-text font-semibold">Full Name</span></label>
              <input type="text" placeholder="Enter your name" name="name" className="input input-bordered focus:input-primary w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label py-1"><span className="label-text font-semibold">Email Address</span></label>
              <input type="email" placeholder="Enter your email" name="email" className="input input-bordered focus:input-primary w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label py-1"><span className="label-text font-semibold">Password</span></label>
              <input type="password" placeholder="Enter your password" name="password" className="input input-bordered focus:input-primary w-full" />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <button className="btn btn-primary shadow-lg shadow-primary/20">Create Account</button>
              <p className="text-center text-sm font-medium">
                Already have an account? <a className="link link-primary font-bold">Login here</a>
              </p>
            </div>
          </div>

          <div className="hidden lg:flex w-1/2 bg-base-200 h-full items-center justify-center p-10">
            <Lottie animationData={registerLottie} loop={true} className="w-full max-w-sm" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;