import React, { useState } from "react";
import "../StepNine/StepNine.css";
import { Link } from "react-router-dom";

const StepNine = () => {
  const [privacySettings, setPrivacySettings] = useState("");

  const handlePrivacyClick = (setting) => {
    setPrivacySettings(setting);
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-nine-content">
          <div className="sign-up-privacy-profile-pic">
            <img src={require(`../../assets/images/Icons/SignIn/user.jpeg`)} alt="Upload image" />
          </div>
          <div className="title">
            <div className="title-header">
              <h1>Select your privacy settings</h1>
            </div>
            <p>Choose who sees your profile</p>
          </div>

          <div className="sign-up-privacy-container">
            <div
              className={`sign-up-privacy ${privacySettings === "My friends" ? "selected" : ""}`}
              onClick={() => handlePrivacyClick("My friends")}
            >
              My friends
            </div>
            <div
              className={`sign-up-privacy ${privacySettings === "Public" ? "selected" : ""}`}
              onClick={() => handlePrivacyClick("Public")}
            >
              Public
            </div>
            <div
              className={`sign-up-privacy ${privacySettings === "Only me" ? "selected" : ""}`}
              onClick={() => handlePrivacyClick("Only me")}
            >
              Only me
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepeight"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <span>Set my profile</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepNine;
