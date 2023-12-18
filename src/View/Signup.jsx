import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = (props) => {
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    try {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  console.log(form);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        await localStorage.setItem("login", true);
        props.setTemp(true)
        await navigate("/");
        console.log("Signup successful");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={(e) => {
                  handleForm(e);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => {
                  handleForm(e);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={(e) => {
                  handleForm(e);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
          <div className="mt-3 text-center">
            <span>Need to login? </span>
            <Link to="/login">login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
