import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SubscriptionOptions from "../../components/Subscription/Subscription";
import { useRegistration } from "../../context/RegistrationContext";
import "../StepFour/StepFour.css";

type SubscriptionType = 'free' | 'premium' | 'points' | null;

const StepFour: React.FC = () => {
  const { getStepData, updateStepData } = useRegistration();

  useEffect(() => {
  }, [getStepData]);

  const handleSubscriptionSelect = (subscription: SubscriptionType): void => {
    updateStepData('step4', {
      subscription: subscription
    });
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-four-content">
          <p className="title">
            <img src={require(`../../assets/images/Icons/Numbers/three.png`)} alt="" />
            How do you wish to engage with kinemoe?
          </p>
          <div className="sign-up-subscription-container">
            <SubscriptionOptions 
              onSubscriptionSelect={handleSubscriptionSelect}
              savedSelection={getStepData('step4').subscription}
            />
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepthree"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepfive"} style={{ textDecoration: "none" }}>
              <button
                className="sign-up-navigation"
                disabled={!getStepData('step4').subscription}
                style={{
                  opacity: !getStepData('step4').subscription ? 0.5 : 1,
                  cursor: !getStepData('step4').subscription ? 'not-allowed' : 'pointer'
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

export default StepFour;
