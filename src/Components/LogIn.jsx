import React from 'react'
import {useState} from 'react'
import './LogIn.css';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    
    fetch("", {
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
        r.json().then(() => {
          // navigate("/Gallery")

        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  };

  return (
    <div className='box'>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div><h2>Login</h2></div>
        <div className="input-group">
          <input
            type="email"
            required="required"
            id="username"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter registered email"
          />
          <i></i>
        </div>
        <div className="input-group">
          <input
            type="password"
            required="required"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder='Enter password'
          />
          <i></i>
        </div>
        <div className='links'>
        <a href="">Forgot password?</a>
        <a href="">Sign Up</a>
        </div>
        <input
          type="submit"
          value="Login"
          onClick={() => handleSubmit()}
        />
          
      </form>
    </div>
    </div>
  );
};


export default LogIn