import  { useState, useEffect } from "react";
import "../StepTwo/StepTwo.css";
import { Link } from "react-router-dom";
import { useRegistration } from "../../context/RegistrationContext";

const StepTwo = () => {
  const { getStepData, updateStepData } = useRegistration();
  const [selectedInterests, setSelectedInterests] = useState([]);

  useEffect(() => {
    const stepData = getStepData('step2');
    if (stepData.interests && stepData.interests.length > 0) {
      setSelectedInterests(stepData.interests);
    }
  }, [getStepData]);

  const handleInterestClick = (interest) => {
    let newInterests;
    if (selectedInterests.includes(interest)) {
      newInterests = selectedInterests.filter((item) => item !== interest);
    } else {
      newInterests = [...selectedInterests, interest];
    }
    
    setSelectedInterests(newInterests);
    
    updateStepData('step2', {
      interests: newInterests
    });
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
              <button
                className="sign-up-navigation"
                disabled={selectedInterests.length === 0}
                style={{
                  opacity: selectedInterests.length === 0 ? 0.5 : 1,
                  cursor: selectedInterests.length === 0 ? 'not-allowed' : 'pointer'
                }}
              >
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
