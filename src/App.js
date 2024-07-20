import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };
  // function to validate the form

  const validataion = () => {
    const { firstname, lastname, email, password } = formData;
    let error = {};
    switch (step) {
      case 1:
        if (!firstname.trim()) {
          error.firstname = "Require first name";
        }
        if (!lastname.trim()) {
          error.lastname = "Require last name";
        }
        break;
      case 2:
        if (!email.trim()) {
          error.email = "Require Email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          error.email = "email is invalid";
        }
        break;
      case 3:
        if (!password.trim()) {
          error.password = "password is require";
        } else if (password.length < 6) {
          error.password =
            "password must be strong and having at least 8 character";
        }
        break;
      case 4:
        return (
          <>
            <p>Login complete</p>
          </>
        );
      default:
        break;
    }
    setError(error);
    return Object.keys(error).length === 0;
  };
  // function to handle form submission
  const handleSubmition = (e) => {
    e.preventDefault();
    const isValid = validataion();
    if (isValid) {
      if (step < 3) {
        setStep((prevalue) => prevalue + 1);
      } else {
        console.log("form submitted:", formData);
      }
    }
  };
  return (
    <div>
      <h2>Multiple Step Form validation</h2>
      <form onSubmit={handleSubmition}>
        {step === 1 && (
          <div>
            <input
              type="text"
              placeholder="enter your firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />{" "}
            {error.firstname && <p>{error.firstname}</p>}
            <input
              type="text"
              placeholder="enter your lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />{" "}
            {error.lastname && <p>{error.lastname}</p>}
          </div>
        )}
        {step === 2 && (
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your Email"
              onChange={handleChange}
            />
            {error.email && <p>{error.email}</p>}
          </div>
        )}
        {step === 3 && (
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your Password"
              onChange={handleChange}
            />
            {error.password && <p>{error.password}</p>}
          </div>
        )}
        {step === 4 && <div>login completed</div>}
        <button type="submit"> Next</button>
      </form>
    </div>
  );
};

export default App;
