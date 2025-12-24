import React from "react";
import Button from "../../components/Button";
import "./welcomePage.css";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  function gotoSignup() {
    navigate("/signup");
  }
  function gotologin() {
    navigate("/login");
  }

  return (
    <>
      <div className="welcome-div">
        <div className="welcome-detail">
          <div className="welcome-div1">
            <h1 className="welcome-heading">Welcome to PopX</h1>
            <p className="welcomepara">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="welcome-div-btns">
            <Button type="button" onClick={gotoSignup} className="signup-btn">
              Create Account
            </Button>
            <Button type="button" onClick={gotologin} className="login-btnn">
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
