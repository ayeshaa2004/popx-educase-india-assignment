import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Radio from "../../components/Radio";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signuppage() {
  const [fullname, setFullname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [agency, setAgency] = useState("");
  const [isValid, setisValid] = useState(false);
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const newErrors = {};

    if (!fullname.trim()) {
      newErrors.fullname = "Name is required.";
    }
    if (!/^\d{10}$/.test(phoneno))
      newErrors.phoneno = "Phone Number must be 10 digits.";
    if (!/^\S+@\S+\.\S+$/.test(emailaddress))
      newErrors.email = "Invalid Email.";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setError(newErrors);
    setisValid(Object.keys(newErrors).length === 0);
  }, [fullname, emailaddress, phoneno, password]);

  const handlesubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (!isValid) return;

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        emailaddress,
        password
      );

      await updateProfile(userCred.user, { displayName: fullname });
      const userData = {
        uid: userCred.user.uid,
        name: fullname,
        email: emailaddress,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="signup-page">
        <div className="signup-head">
          <h1 className="signup-heading">Create your PopX Account</h1>
        </div>
        <div className="signup-form">
          <form onSubmit={handlesubmit}>
            <div
              style={{
                minHeight: "63vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div className="each-input">
                  <Input
                    type="text"
                    label="Full Name"
                    value={fullname}
                    required
                    placeholder="Enter Full Name"
                    className={`inputfield ${
                      submitted && error.fullname ? "fieldcolor" : ""
                    }`}
                    labelclassname="labelstyle"
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                  ></Input>
                  {submitted && error.fullname && (
                    <p className="error-para">{error.fullname}</p>
                  )}
                </div>

                <div className="each-input">
                  <Input
                    type="tel"
                    label="Phone Number"
                    value={phoneno}
                    required
                    placeholder="Enter Phone Number"
                    className={`inputfield ${
                      submitted && error.phoneno ? "fieldcolor" : ""
                    }`}
                    labelclassname="labelstyle"
                    onChange={(e) => setPhoneno(e.target.value)}
                  ></Input>
                  {submitted && error.phoneno && (
                    <p className="error-para">{error.phoneno}</p>
                  )}
                </div>

                <div className="each-input">
                  <Input
                    type="email"
                    label="Email Address"
                    value={emailaddress}
                    required
                    placeholder="Enter Email Address"
                    className={`inputfield ${
                      submitted && error.email ? "fieldcolor" : ""
                    }`}
                    labelclassname="labelstyle"
                    onChange={(e) => setEmailaddress(e.target.value)}
                  ></Input>
                  {submitted && error.email && (
                    <p className="error-para">{error.email}</p>
                  )}
                </div>

                <div className="each-input">
                  <Input
                    type="password"
                    label="Password"
                    value={password}
                    required
                    placeholder="Enter Password"
                    className={`inputfield ${
                      submitted && error.password ? "fieldcolor" : ""
                    }`}
                    labelclassname="labelstyle"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                  {submitted && error.password && (
                    <p className="error-para">{error.password}</p>
                  )}
                </div>

                <div className="each-input">
                  <Input
                    type="text"
                    label="Company Name"
                    value={companyname}
                    placeholder="Enter Company Name"
                    className="inputfield"
                    labelclassname="labelstyle"
                    onChange={(e) => setCompanyname(e.target.value)}
                    style={{ bottom: "25px" }}
                  ></Input>
                </div>

                <div className="each-input" style={{ textAlign: "left" }}>
                  <p className="radio-para">
                    Are you an Agency?
                    <span style={{ color: "red" }}>*</span>
                  </p>
                  <div className="radios">
                    <Radio
                      label="Yes"
                      name="agency"
                      value="yes"
                      checked={agency === "yes"}
                      className="each-radio"
                      radioclassname="radio-class"
                      onChange={(e) => setAgency(e.target.value)}
                    />
                    <Radio
                      label="No"
                      name="agency"
                      value="no"
                      checked={agency === "no"}
                      className="each-radio"
                      radioclassname="radio-class"
                      onChange={(e) => setAgency(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="createacc-btn">
                <Button
                  type="submit"
                  className="signup-btn "
                  disabled={!isValid}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
