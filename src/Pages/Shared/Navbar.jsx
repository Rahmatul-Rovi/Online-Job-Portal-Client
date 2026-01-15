import React, { useContext } from "react"; // use er bodole useContext beshi stable
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  // Destructure user and signOut
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign Out Successful"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      
      {/* Role based logic: Applicant hole Application dekhabe */}
      {user && user.role === "applicant" && (
        <li><NavLink to="/myApplications">My Applications</NavLink></li>
      )}

      {/* Role based logic: Recruiter hole Add Job dekhabe */}
      {user && user.role === "recruiter" && (
        <li><NavLink to="/addJob">Add Job</NavLink></li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
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
        <a className="btn btn-ghost text-xl">JobPortal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <button onClick={handleSignOut} className="btn btn-secondary">Logout</button>
        ) : (
          <>
            <NavLink className="btn btn-outline btn-primary" to="/login">Login</NavLink>
            <NavLink className="btn btn-primary" to="/register">Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;