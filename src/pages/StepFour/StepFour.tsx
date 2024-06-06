import { Link } from "react-router-dom";
import SubscriptionOptions from "../../components/Subscription/Subscription";
import "../StepFour/StepFour.css";

const StepFour = () => {
  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-four-content">
          <p className="title">
            <img src={require(`../../assets/images/Icons/Numbers/three.png`)} alt="" />
            How do you wish to engage with kinemoe?
          </p>
          <div className="sign-up-subscription-container">
            <SubscriptionOptions />
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

export default StepFour;
