import React, { useState } from "react";
import "../StepEight/StepEight.css";
import { Link } from "react-router-dom";

const StepEight = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [appNotifications, setAppNotifications] = useState(false);
  const [noNotifications, setNoNotifications] = useState(false);

  const handleEmailClick = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleAppClick = () => {
    setAppNotifications(!appNotifications);
  };

  const handleNoNotificationsClick = () => {
    setNoNotifications(!noNotifications);
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-eight-content">
          <div className="title">
            <h1>Stay in the loop!</h1>
            <div className="title-header">
              <img src={require(`../../assets/images/Icons/Numbers/seven.png`)} alt="seven" />
              <p>Set your preferences for updates and announcements.</p>
            </div>
          </div>

          <div className="sign-up-preferences-for-updates-container">
            <div className="update" onClick={handleEmailClick}>
              <img
                src={
                  emailNotifications
                    ? require(`../../assets/images/Icons/SignIn/checkbox-checked.png`)
                    : require(`../../assets/images/Icons/SignIn/checkbox.png`)
                }
                alt="checkbox"
              />
              <p>Sign up for Email Notifications</p>
            </div>
            <div className="update" onClick={handleAppClick}>
              <img
                src={
                  appNotifications
                    ? require(`../../assets/images/Icons/SignIn/checkbox-checked.png`)
                    : require(`../../assets/images/Icons/SignIn/checkbox.png`)
                }
                alt="checkbox"
              />
              <p>App Push Notifications</p>
            </div>
            <div className="update" onClick={handleNoNotificationsClick}>
              <img
                src={
                  noNotifications
                    ? require(`../../assets/images/Icons/SignIn/checkbox-checked.png`)
                    : require(`../../assets/images/Icons/SignIn/checkbox.png`)
                }
                alt="checkbox"
              />
              <p>No Notifications</p>
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepseven"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepnine"} style={{ textDecoration: "none" }}>
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

export default StepEight;
