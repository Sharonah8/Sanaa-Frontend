import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
// import LogIn from "./LogIn";
import Footer from "./Footer";
import "../Styles/SignUp.css";

function SignUp() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  // const valid = () => {
  //   return formValues.username.length & formValues.email.length;
  // };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setWelcomeMessage(true);

    let apiUrl = "http://localhost:3000/signup";
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          navigate("/login")
        })
      } else {
        r.json().then((err) => console.log(err))
     
      }
    });
    setFormValues('')
    // .then(()=>{
    //     setFormValues('')
    // })
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be between 4 and 10 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="signup-main">
      <div className="background">
      <div className="box">
        <div className="form">
          <form onSubmit={e => handleSubmit(e)}>
            {welcomeMessage ? (
              <div className="p-3 mb-2 bg-success text-white welcome-message">{`Hello ${formValues.username}, your registration is successful`}</div>
            ) : null}
            <div>
              <h2>Registration</h2>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={  handleChange}
                required
              />
              <i id="loginlines"></i>
            </div>
            <p>{formErrors.username}</p>

            <div className="input-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={ handleChange}
                required
              />
              <i id="loginlines"></i>
            </div>
          <p>{formErrors.email}</p>
          
          <div className="input-group">
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={ handleChange}
                required
              />
              <i id="loginlines"></i>
            </div>
            <p>{formErrors.password}</p>

            <div className="input-group">
              <input
                type="submit"
                value="Register"
                
                id="signupbtn"
              />
            </div>
            <br />
            <div>
              <Link to={"/login"}>
                <span id="login-section">
                  {" "}
                  Have an account already ? Login{" "}
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
export default SignUp;
