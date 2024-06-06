import "../Subscription/subscription.css";

const SubscriptionOptions = () => {
  return (
    <section className="subscription-options">
      <div className="sub-option-free sub-card">
        <h5 className="sub-card-header">Watch with ads</h5>
        <div className="sub-card-body">
          <h5 className="sub-card-title">Free</h5>
          <p className="sub-card-text">Access to a Vast Library</p>
          <p className="sub-card-text">Unlimited Streaming</p>
          <p className="sub-card-text">Multiple Devices</p>
          <p className="sub-card-text">No Subscription Fee</p>
          <a href="#" className="sub-card-button">
            Register
          </a>
        </div>
      </div>
      <div className="sub-card-optimal-choice">
        <span>Optimal Choice</span>
      </div>
      <div className="sub-option-pay-to-watch sub-card">
        <h5 className="sub-card-header">Pay to Watch</h5>
        <div className="sub-card-body">
          <h5 className="sub-card-title">499de./month</h5>
          <p className="sub-card-text">Access to a Vast Library</p>
          <p className="sub-card-text">Unlimited Streaming</p>
          <p className="sub-card-text">Multiple Devices</p>
          <p className="sub-card-text">Watch without ads</p>
          <p className="sub-card-text">Offline Viewing</p>
          <a href="#" className="sub-card-button">
            Register
          </a>
        </div>
      </div>

      <div className="sub-option-engage-receive-points sub-card">
        <h5 className="sub-card-header">Engage and receive points</h5>
        <div className="sub-card-body">
          <h5 className="sub-card-title">Watch with points</h5>
          <p className="sub-card-text">Earn points when you engage</p>
          <p className="sub-card-text">Claim rewards with earned points</p>
          <p className="sub-card-text">No Subscription Fee</p>
          <a href="#" className="sub-card-button">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionOptions;
