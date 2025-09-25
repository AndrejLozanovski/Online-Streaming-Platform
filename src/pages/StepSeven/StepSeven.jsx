import { useState, useEffect } from "react";
import "../StepSeven/StepSeven.css";
import { Link } from "react-router-dom";
import { useRegistration } from "../../context/RegistrationContext";

const StepSeven = () => {
  const { getStepData, updateStepData } = useRegistration();
  const [selectedRecommendations, setSelectedRecommendations] = useState([]);

  useEffect(() => {
    const stepData = getStepData('step7');
    if (stepData.contentRecommendations && stepData.contentRecommendations.length > 0) {
      setSelectedRecommendations(stepData.contentRecommendations);
    }
  }, [getStepData]);

  const handleRecommendationClick = (recommendation) => {
    let newRecommendations;
    if (selectedRecommendations.includes(recommendation)) {
      newRecommendations = selectedRecommendations.filter((item) => item !== recommendation);
    } else {
      newRecommendations = [...selectedRecommendations, recommendation];
    }
    
    setSelectedRecommendations(newRecommendations);
    
    updateStepData('step7', {
      contentRecommendations: newRecommendations
    });
  };

  const step5Data = getStepData('step5');
  const displayName = step5Data.username || 'Nickname';

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-seven-content">
          <div className="sign-up-recommendations-profile-pic-nickname">
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
              <img src={require(`../../assets/images/Icons/Numbers/six.png`)} alt="six" />
              <h1>Content Recommendations</h1>
            </div>
          </div>

          <div className="sign-up-recommendations-container">
            <div className="first-row">
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Action") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Action")}
              >
                Action
              </div>
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Comedy") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Comedy")}
              >
                Comedy
              </div>
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Drama") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Drama")}
              >
                Drama
              </div>
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Horror") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Horror")}
              >
                Horror
              </div>
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Science Fiction") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Science Fiction")}
              >
                Science Fiction
              </div>
            </div>
            <div className="second-row">
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Fantasy") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Fantasy")}
              >
                Fantasy
              </div>
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Romance") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Romance")}
              >
                Romance
              </div>
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Thriller") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Thriller")}
              >
                Thriller
              </div>
              <div
                className={`sign-up-recommendations ${
                  selectedRecommendations.includes("Documentary") ? "selected" : ""
                }`}
                onClick={() => handleRecommendationClick("Documentary")}
              >
                Documentary
              </div>
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepsix"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepeight"} style={{ textDecoration: "none" }}>
              <button
                className="sign-up-navigation"
                disabled={selectedRecommendations.length === 0}
                style={{
                  opacity: selectedRecommendations.length === 0 ? 0.5 : 1,
                  cursor: selectedRecommendations.length === 0 ? 'not-allowed' : 'pointer'
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

export default StepSeven;
