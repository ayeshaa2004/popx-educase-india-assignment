import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import "./Login.css";

function Loginpage() {
  const [loginemailAddress, setLoginEmailAddress] = useState("");
  const [loginPassword, setloginPassWord] = useState("");
  const navigate = useNavigate();

  const gotoprofile = async () => {
    if (!loginemailAddress || !loginPassword) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        loginemailAddress,
        loginPassword
      );
      const userData = {
        uid: userCred.user.uid,
        name: userCred.user.displayName || "",
        email: userCred.user.email,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/profile");
    } catch (error) {
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("Incorrect email or password.");
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="loginpage">
      <div className="loginpage-center">
        <div className="loginpage-description">
          <h1 className="loginpage-heading">Signin to your PopX account</h1>
          <p className="loginpage-para">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="login-fields">
          <div className="each-input">
            <Input
              label="Email Address"
              type="email"
              value={loginemailAddress}
              placeholder="Enter email address"
              className="logininputfield"
              labelclassname="loginlabelstyle"
              onChange={(e) => setLoginEmailAddress(e.target.value)}
            ></Input>
          </div>
          <div className="each-input">
            <Input
              label="Password"
              type="password"
              value={loginPassword}
              placeholder="Enter password"
              className="logininputfield"
              labelclassname="loginlabelstyle"
              onChange={(e) => setloginPassWord(e.target.value)}
            ></Input>{" "}
          </div>

          <Button type="button" onClick={gotoprofile} className="login-btn ">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
