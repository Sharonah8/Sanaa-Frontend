import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import LogIn from "./LogIn";
import Footer from "./Footer";
import "../Styles/SignUp.css";

function SignUp() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setWelcomeMessage(true);

    let apiUrl = "http://localhost:3000/users";
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
    // .then(()=>{
    //     setFormValues('')
    // })
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
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
      <div className="box">
        <div className="form">
          <form onSubmit={handleSubmit}>
            {welcomeMessage ? (
              <div className="p-3 mb-2 bg-success text-white welcome-message">{`Hello ${formValues.username}, your registration is successful`}</div>
            ) : null}
            <div>
              <h2>New Member Registration</h2>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
                required
              />
              <i></i>
            </div>
            <p>{formErrors.username}</p>

            <div className="input-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              <i></i>
            </div>
            <p>{formErrors.email}</p>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
              <i></i>
            </div>
            <p>{formErrors.password}</p>

            <div className="input-group">
              <input
                type="submit"
                value="Register"
                onClick={() => handleSubmit()}
              />
            </div>
            <br />
            <div>
              <p>
                Already have account?{" "}
                <button type="submit" onClick={<LogIn />} value="Back to Login">
                  {" "}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;
