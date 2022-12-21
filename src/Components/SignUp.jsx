import React from 'react'

function SignUp() {
  return (
    <div className='box'>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div><h2>New User Registration</h2></div>
        <div className="input-group">
          <input
            type="text"
            required="required"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <i></i>
        </div>
        <div className="input-group">
          <input
            type="email"
            required="required"
            id="username"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
        <div className="input-group">
          <input
            type="password"
            required="required"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="password"
            placeholder='Confirm password'
          />
          <i></i>
        </div>
        <input
          type="submit"
          value="Register"
          onClick={() => handleSubmit()}
        />
        <div className='links'>
        
        <a href="">Already Registered? <i>Sign In</i></a>
        </div>
          
      </form>
    </div>
    </div>
  )
}

export default SignUp