import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch();
  };

  const navLinks = (
    <>
      <ul className="lg:flex lg:gap-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allservices">All Services</NavLink>
        </li>
        {
          user?.email?  <>
               <li tabIndex={0}>
                  <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2">
                      <li>
                        <NavLink to="/addaservice">Add A Service</NavLink>
                      </li>
                      <li>
                        <NavLink to="/bookings">My Schedules</NavLink>
                      </li>
                      <li>
                        <NavLink to="/manageServices">Manage Services</NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
          </> : ''
        }
       
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

        <div className="avatar w-16 h-16 rounded-full p-3">
          <img src="https://i.ibb.co/nc4wTyB/logo.png" alt="" />
          <a className="btn btn-ghost normal-case text-sm font-bold text-red-600">
            ToursNTracks
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div>
          { 
            user ? <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="" />
            : 
            <img className="w-16 h-16 rounded-full mr-2" src="https://i.ibb.co/x3RPF21/icon.png"/>

          }
        </div>
        {user ?
          <>
            <span className="text-xs">{user.displayName}</span>
            <button onClick={handleLogOut} className="w-16 text-[10px] bg-amber-500 p-1  lg:w-24 rounded-xl" >
              Log Out
            </button>
          </>
          : 
          <Link to="/login">
            <button className="bg-amber-500 p-1 w-24 rounded-xl">
              Login
            </button>
          </Link>
        }
        {/* <Link className="btn btn-warning font-bold" to='/login'>Login</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
