import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../Styles/LogIn.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          localStorage.setItem("token", data.token);
          // navigate("/Gallery")
        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  };
  
  return (
   <div className="login-main">
    <div className="background">
      <div className="box">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Log~in</h2>
            </div>
            <div className="input-group">
              <input
                type="email"
                required="required"
                id="username"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
              <i id="loginlines"></i>
            </div>
            <div className="input-group">
              <input
                type="password"
                required="required"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter password"
              />
              <i id="loginlines"></i>
            </div>
            <div className="links">
              <a href="" id="fptext">
                Forgot password?
              </a>
              {/* <a href="">Sign Up</a> */}
            </div>
            <Link to={"/"}>
            <input
              type="submit"
              value="Login"
              onClick={() => handleSubmit()}
              id="loginbtn"
            />
            </Link>
          </form>
          <Link to={"/signup"}>
            <span id="login-section"> Don't have an account? Sign up</span>
          </Link>
        </div>
      </div>
    </div>
      <Footer />
  </div>
  );
}

export default LogIn;
