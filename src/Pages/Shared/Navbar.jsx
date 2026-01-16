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

  // Modern Navigation Link Styles
  const linkStyles = ({ isActive }) => 
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive 
        ? "bg-[#6366f1] text-white shadow-md" 
        : "text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#6366f1]"
    }`;

  const links = (
    <>
      <li><NavLink to="/" className={linkStyles}>Home</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/myApplications" className={linkStyles}>My Applications</NavLink></li>
          <li><NavLink to="/addJob" className={linkStyles}>Add Job</NavLink></li>
          <li><NavLink to="/myPostedJobs" className={linkStyles}>My Posted Jobs</NavLink></li>
          <li><NavLink to="/about" className={linkStyles}>About Us</NavLink></li>
          <li><NavLink to="/contact" className={linkStyles}>Contact Us</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white">
      <div className="navbar container mx-auto px-4 py-3">
        <div className="navbar-start">
          {/* Mobile Responsive Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#1a1a1a]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-xl z-[1] mt-3 w-64 p-3 shadow-2xl border border-[#f3f4f6]">
              {links}
            </ul>
          </div>
          <NavLink to="/" className="flex items-center gap-2">
            <div className="bg-[#6366f1] p-1.5 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">Job<span className="text-[#6366f1]">Portal</span></span>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-[#6366f1] transition-all">
                <div className="w-10 rounded-full border border-[#e5e7eb]">
                  <img 
                    alt="User Profile" 
                    src={user?.photoURL || "https://img.icons8.com/officel/80/user.png"} 
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-xl z-[1] mt-4 w-56 p-3 shadow-2xl border border-[#f3f4f6]">
                <div className="px-4 py-3 mb-2 bg-[#f9fafb] rounded-lg">
                    <p className="text-xs text-[#6b7280] uppercase font-bold tracking-wider">Signed in as</p>
                    <p className="font-bold text-[#1a1a1a] truncate">{user?.displayName || "User"}</p>
                </div>
                <li><NavLink to="/profile" className="py-2 hover:bg-[#f3f4f6] rounded-lg text-[#374151]">My Profile</NavLink></li>
                <div className="divider my-1 opacity-50"></div>
                <li><button onClick={handleSignOut} className="py-2 text-[#ef4444] hover:bg-[#fef2f2] rounded-lg font-medium">Logout</button></li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink className="px-5 py-2 text-sm font-semibold text-[#6366f1] hover:bg-[#f3f4f6] rounded-xl transition-all" to="/login">Login</NavLink>
              <NavLink className="px-5 py-2 text-sm font-semibold bg-[#6366f1] text-white hover:bg-[#4f46e5] rounded-xl shadow-lg shadow-indigo-100 transition-all" to="/register">Register</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;