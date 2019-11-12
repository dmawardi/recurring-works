import React from "react";
// , { useState, useEffect }

function ReactHooksOnUpdateAfter() {
  //   const [name, setName] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [data, setData] = useState(null);

  //   //   Effect if update detected in name variable
  //   useEffect(() => {}, [name]);

  //   //   function to handle change
  //   const handleChange = e => {
  //     setName(e.target.value);
  //   };

  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* collapse functionality */}
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
        <div className="collapse navbar-collapse">
          <a className="navbar-brand" href="/">
            Recurring Works
          </a>
          {/* place other links on navbar below here */}
        </div>
        {/* Login form section */}
        <div>
          <form
            className="form-inline my-2 my-lg-0"
            action="/api/login"
            method="POST"
          >
            <div>
              <label for="email">Email</label>
              <input
                className="form-control mr-sm-2"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label for="password">Password</label>
              <input
                className="form-control mr-sm-2"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </nav>
      {/* <p>Function Component With Hooks</p>
      <input type="text" value={name} onChange={handleChange} /> */}
    </div>
  );
}

export default ReactHooksOnUpdateAfter;
