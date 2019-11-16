import React, { useState } from "react";
import { Link } from "react-router-dom";
// , Route, Switch
import userFunctions from "../utils/login";
import { useCookies } from "react-cookie";

// , { useState, useEffect }

function NavBar(props) {
  const [cookies] = useCookies();
  console.log(cookies);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = e => {
    e.preventDefault();
    userFunctions.logOut().then(res => {
      console.log("navbar: logout response:", res);
    });
  };

  const loginRegLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          Sites
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Events" className="nav-link">
          Events
        </Link>
      </li>
    </ul>
  );
  const userLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          User Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" onClick={logOut} className="nav-link">
          Log Out
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Brand and links*/}
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="collapse navbar-collapse">
            <a className="navbar-brand" href="/">
              Recurring Works
            </a>
            {props.profile.first_name
              ? "Logged In: " +
                props.profile.first_name +
                " " +
                props.profile.last_name
              : "Not Logged In"}
            {/* place other links on navbar below here */}
          </div>
        </li>
      </ul>

      {/* Login Portion */}
      {props.isLoggedIn ? userLink : loginRegLink}
      <button onClick={props.printStats}>Print Cookies</button>
      <button onClick={props.logOut}>Log Out</button>

      <div></div>
    </nav>
  );
}

// function ReactHooksOnUpdateAfter() {
//   //   const [name, setName] = useState("");
//   //   const [isLoading, setIsLoading] = useState(false);
//   //   const [data, setData] = useState(null);

//   //   //   Effect if update detected in name variable
//   //   useEffect(() => {}, [name]);

//   //   //   function to handle change
//   //   const handleChange = e => {
//   //     setName(e.target.value);
//   //   };

//   return (
//     <div>
//       {/* navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         {/* collapse functionality */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarTogglerDemo01"
//           aria-controls="navbarTogglerDemo01"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse">
//           <a className="navbar-brand" href="/">
//             Recurring Works
//           </a>
//           {/* place other links on navbar below here */}
//         </div>
//         {/* Login form section */}
//         <div>
//           <form
//             className="form-inline my-2 my-lg-0"
//             action="/api/login"
//             method="POST"
//           >
//             <div>
//               <label for="email">Email</label>
//               <input
//                 className="form-control mr-sm-2"
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//               />
//             </div>

//             <div>
//               <label for="password">Password</label>
//               <input
//                 className="form-control mr-sm-2"
//                 type="password"
//                 id="password"
//                 name="password"
//                 required
//               />
//             </div>
//             <button
//               className="btn btn-outline-success my-2 my-sm-0"
//               type="submit"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </nav>
//       {/* <p>Function Component With Hooks</p>
//       <input type="text" value={name} onChange={handleChange} /> */}
//     </div>
//   );
// }

export default NavBar;
