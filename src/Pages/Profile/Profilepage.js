import React from "react";
import "./profilepage.css";
import profilePic from "./picture.png";

function Profilepage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div className="profile-head">
        <p className="profile-heading">Account Settings</p>
      </div>

      <div className="profile-col">
        <div className="profile-details">
          <div className="profile-pic">
            <img src={profilePic} alt="profilepic" className="pic-icon" />
          </div>

          <div className="profile-dets">
            <h4>{user?.name}</h4>
            <p>{user?.email}</p>
          </div>
        </div>

        <p className="description-para">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profilepage;
