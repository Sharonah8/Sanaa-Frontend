import React from 'react'
import {useState, useNavigate} from 'react'

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    
    fetch("/login", {
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
          navigate("/Gallery")

        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="username"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@email.com.br"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <button
          type="submit"
          className="primary"
          onClick={() => handleSubmit()}
        >
          
        </button>
      </form>
    </div>
  );
};


export default LogIn