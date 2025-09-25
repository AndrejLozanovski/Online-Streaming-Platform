import { useState, useEffect } from "react";
import "../StepSix/StepSix.css";
import { Link } from "react-router-dom";
import { useRegistration } from "../../context/RegistrationContext";

const StepSix = () => {
  const { getStepData, updateStepData } = useRegistration();
  const [selectedCultures, setSelectedCultures] = useState([]);

  useEffect(() => {
    const stepData = getStepData('step6');
    if (stepData.selectedCultures && stepData.selectedCultures.length > 0) {
      setSelectedCultures(stepData.selectedCultures);
    }
  }, [getStepData]);

  const handleCultureClick = (culture) => {
    let newCultures;
    if (selectedCultures.includes(culture)) {
      newCultures = selectedCultures.filter((item) => item !== culture);
    } else {
      newCultures = [...selectedCultures, culture];
    }
    
    setSelectedCultures(newCultures);

    updateStepData('step6', {
      selectedCultures: newCultures
    });
  };

  const step5Data = getStepData('step5');
  const displayName = step5Data.username || 'Nickname';

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-six-content">
          <div className="sign-up-cultures-profile-pic-nickname">
            {step5Data.profileImage ? (
              <img
                src={step5Data.profileImage}
                alt="Profile"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #ccc'
                }}
              />
            ) : (
              <img src={require(`../../assets/images/Icons/SignIn/user.jpeg`)} alt="Profile" />
            )}
            <p>{displayName}</p>
          </div>
          <div className="title">
            <div className="title-header">
              <img src={require(`../../assets/images/Icons/Numbers/five.png`)} alt="five" />
              <h1>Which cultures resonate with you?</h1>
            </div>
            <p>Your Choices help us curate content just for you</p>
          </div>

          <div className="sign-up-cultures-container">
            <div
              className={`sign-up-cultures ${
                selectedCultures.includes("Macedonian") ? "selected" : ""
              }`}
              onClick={() => handleCultureClick("Macedonian")}
            >
              Macedonian
            </div>
            <div
              className={`sign-up-cultures ${
                selectedCultures.includes("Balkan") ? "selected" : ""
              }`}
              onClick={() => handleCultureClick("Balkan")}
            >
              Balkan
            </div>
            <div
              className={`sign-up-cultures ${
                selectedCultures.includes("European") ? "selected" : ""
              }`}
              onClick={() => handleCultureClick("European")}
            >
              European
            </div>
            <div
              className={`sign-up-cultures ${
                selectedCultures.includes("Mediterranean") ? "selected" : ""
              }`}
              onClick={() => handleCultureClick("Mediterranean")}
            >
              Mediterranean
            </div>
            <div
              className={`sign-up-cultures ${
                selectedCultures.includes("Global") ? "selected" : ""
              }`}
              onClick={() => handleCultureClick("Global")}
            >
              Global
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepfive"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepseven"} style={{ textDecoration: "none" }}>
              <button
                className="sign-up-navigation"
                disabled={selectedCultures.length === 0}
                style={{
                  opacity: selectedCultures.length === 0 ? 0.5 : 1,
                  cursor: selectedCultures.length === 0 ? 'not-allowed' : 'pointer'
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

export default StepSix;
