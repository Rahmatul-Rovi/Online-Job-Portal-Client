import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign Out Successful"))
      .catch(error => console.log(error));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/myApplications">My Applications</NavLink></li>
          <li><NavLink to="/addJob">Add Job</NavLink></li>
          <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        {/* Mobile Responsive Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold">JobPortal</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        {user ? (
          <div className="dropdown dropdown-end">
            {/* User Profile Image */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img 
                  alt="User Profile" 
                  src={user?.photoURL || "https://img.icons8.com/officel/80/user.png"} 
                />
              </div>
            </div>
            {/* Dropdown Menu on Click */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li className="px-4 py-2 font-semibold text-primary">{user?.displayName || "User"}</li>
              <div className="divider my-0"></div>
              <li><NavLink to="/profile">My Profile</NavLink></li>
              <li><button onClick={handleSignOut} className="text-red-500">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <NavLink className="btn btn-outline btn-primary btn-sm md:btn-md" to="/login">Login</NavLink>
            <NavLink className="btn btn-primary btn-sm md:btn-md" to="/register">Register</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;