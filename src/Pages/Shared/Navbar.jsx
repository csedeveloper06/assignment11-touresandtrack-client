import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <ul className="lg:flex lg:gap-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Dashboard</summary>
            <ul className="p-2">
              <li>
                <NavLink to="/addservices">Add Services</NavLink>
              </li>
              <li>
                <NavLink to="/myschedules">My Schedules</NavLink>
              </li>
              <li>
                <NavLink to="/myservices">My Services</NavLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <div className="avatar p-3">
          <div className="w-16 rounded-full">
            <img className="w-16 h-16 rounded-s-full" src="https://i.ibb.co/nc4wTyB/logo.png" alt="" />
         </div>
          <a className="btn btn-ghost normal-case text-lg font-bold text-red-600">ToursNTracks</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-20 h-20 rounded-full mr-4" src="https://i.ibb.co/x3RPF21/icon.png" alt="" />
        <a className="btn btn-warning font-bold">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
