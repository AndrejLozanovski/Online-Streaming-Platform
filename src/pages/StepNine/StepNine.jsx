import { useState, useEffect } from "react";
import "../StepNine/StepNine.css";
import { Link, useNavigate } from "react-router-dom";
import { useRegistration } from "../../context/RegistrationContext";
import { useUserStore } from "../../stores/user-store";

const StepNine = () => {
  const { getStepData, updateStepData, completeRegistration, validateRegistration } = useRegistration();
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const [privacySettings, setPrivacySettings] = useState("");

  useEffect(() => {
    const stepData = getStepData('step9');
    if (stepData?.privacySettings) {
      setPrivacySettings(stepData.privacySettings);
    }
  }, [getStepData]);

  const handlePrivacyClick = (setting) => {
    setPrivacySettings(setting);
    updateStepData('step9', { privacySettings: setting });
  };

  const handleCompleteRegistration = () => {
    if (!privacySettings) {
      alert("Please select a privacy setting to continue.");
      return;
    }

    const validation = validateRegistration();
    if (!validation.isValid) {
      alert(`Please complete all required fields: ${validation.errors.join(', ')}`);
      return;
    }

    const result = completeRegistration();
    if (result.success) {
      setUser(result.user);
      navigate('/');
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-nine-content">
          <div className="sign-up-privacy-profile-pic">
            {(() => {
              const step5Data = getStepData('step5');
              return step5Data.profileImage ? (
                <img
                  src={step5Data.profileImage}
                  alt="Profile"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #ccc'
                  }}
                />
              ) : (
                <img src={require(`../../assets/images/Icons/SignIn/user.jpeg`)} alt="Profile" />
              );
            })()}
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

            <button
              className="sign-up-navigation"
              onClick={handleCompleteRegistration}
              disabled={!privacySettings}
              style={{
                opacity: !privacySettings ? 0.5 : 1,
                cursor: !privacySettings ? 'not-allowed' : 'pointer'
              }}
            >
              <span>Set my profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepNine;
