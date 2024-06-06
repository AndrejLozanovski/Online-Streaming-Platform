import { useState } from "react";
import "../StepOne/StepOne.css";
import { Link } from "react-router-dom";

const StepOne = () => {
  const [isSelectedArtist, setIsSelectedArtist] = useState(false);
  const [isSelectedViewer, setIsSelectedViewer] = useState(false);

  const handleArtistClick = () => {
    setIsSelectedArtist(!isSelectedArtist);
    setIsSelectedViewer(false);
  };

  const handleViewerClick = () => {
    setIsSelectedViewer(!isSelectedViewer);
    setIsSelectedArtist(false);
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-one-content">
          <h1>Join as a viewer or artist</h1>
          <div className="sign-up-as-container">
            <div
              className={`sing-up-as ${isSelectedArtist ? "selected" : "not-selected"}`}
              onClick={handleArtistClick}
            >
              <div className="sign-up-as-icons">
                <img
                  src={require(`../../assets/images/Icons/SignIn/ArtistIcon.png`)}
                  alt="Join as Artist Icon"
                />
                <div
                  className={`sing-up-as-radio-button ${
                    isSelectedArtist ? "visible" : "not-visible"
                  }`}
                >
                  <div className="green"></div>
                </div>
              </div>
              <p>Sign up as Artist</p>
            </div>
            <div
              className={`sing-up-as ${isSelectedViewer ? "selected" : "not-selected"}`}
              onClick={handleViewerClick}
            >
              <div className="sign-up-as-icons">
                <img
                  src={require(`../../assets/images/Icons/SignIn/iconoir_user-bag.png`)}
                  alt="Join as Viewer Icon"
                />
                <div
                  className={`sing-up-as-radio-button ${
                    isSelectedViewer ? "visible" : "not-visible"
                  }`}
                >
                  <div className="green"></div>
                </div>
              </div>
              <p>Sign up as Viewer</p>
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <button className="sign-up-navigation">
              <img
                src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                alt="navigation arrow left"
              />
              <span>Back</span>
            </button>
            <Link to={"/steptwo"} style={{ textDecoration: "none" }}>
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

export default StepOne;
