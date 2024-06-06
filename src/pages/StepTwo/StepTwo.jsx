import React, { useState } from "react";
import "../StepTwo/StepTwo.css";
import { Link } from "react-router-dom";

const StepTwo = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-two-content">
          <p>
            <img src={require(`../../assets/images/Icons/Numbers/one.png`)} alt="" />
            Tell us what moves you. Select your interests to tailor your Kinemoe universe
          </p>
          <div className="sign-up-interests-container">
            <div className="first-row">
              <div
                className={`sign-up-interests ${
                  selectedInterests.includes("Cinema") ? "selected" : ""
                }`}
                onClick={() => handleInterestClick("Cinema")}
              >
                Cinema
              </div>
              <div
                className={`sign-up-interests ${
                  selectedInterests.includes("Visual Arts") ? "selected" : ""
                }`}
                onClick={() => handleInterestClick("Visual Arts")}
              >
                Visual Arts
              </div>
              <div
                className={`sign-up-interests ${
                  selectedInterests.includes("Dance") ? "selected" : ""
                }`}
                onClick={() => handleInterestClick("Dance")}
              >
                Dance
              </div>
              <div
                className={`sign-up-interests ${
                  selectedInterests.includes("Theatre") ? "selected" : ""
                }`}
                onClick={() => handleInterestClick("Theatre")}
              >
                Theatre
              </div>
            </div>
            <div className="second-row">
              <div
                className={`sign-up-interests ${
                  selectedInterests.includes("Music") ? "selected" : ""
                }`}
                onClick={() => handleInterestClick("Music")}
              >
                Music
              </div>
              <div
                className={`sign-up-interests ${
                  selectedInterests.includes("Literature") ? "selected" : ""
                }`}
                onClick={() => handleInterestClick("Literature")}
              >
                Literature
              </div>
              <div className="sign-up-interests">More Options</div>
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepone"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepthree"} style={{ textDecoration: "none" }}>
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

export default StepTwo;
