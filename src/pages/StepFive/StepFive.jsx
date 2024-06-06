import React, { useRef } from "react";
import "../StepFive/StepFive.css";
import { Link } from "react-router-dom";

const StepFive = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-five-content">
          <p className="title">
            <img src={require(`../../assets/images/Icons/Numbers/four.png`)} alt="" />
            Setup Profile
          </p>
          <div className="sign-up-setup-profile-container">
            <label htmlFor="file-input">
              <img
                src={require(`../../assets/images/Icons/SignIn/UploadPicture.png`)}
                alt="Upload image"
                onClick={handleImageClick}
              />
            </label>
            <input
              type="file"
              id="file-input"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div className="setup-profile-form">
              <input type="text" className="input-form" name="" id="" placeholder="Username" />
              <input type="password" className="input-form" placeholder="Password" />
              <input
                type="password"
                className="input-form"
                name=""
                id=""
                placeholder="Confirm Password"
              />
              <textarea
                className="input-form"
                rows={5}
                cols={40}
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepfour"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepsix"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <span>Next</span>
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-right.png`)}
                  alt="navigation arrow right"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
