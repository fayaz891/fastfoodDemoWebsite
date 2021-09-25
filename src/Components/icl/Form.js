import React from 'react'
import { useState } from 'react';

function Form() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    return (
      <>
        <div className="container bg-light" style={{borderRadius:"2rem"}}>
          <div className="row">
            <div className="col">
              <form
                className="mx-auto py-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(Name, Email, Password);
                }}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    value={Name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Your Email Address"
                    className="form-control"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    value={Password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Your Password"
                    className="form-control"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="form-check-input"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Form
