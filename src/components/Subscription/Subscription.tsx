import React, { useState, useEffect } from "react";
import "../Subscription/subscription.css";

type SubscriptionType = 'free' | 'premium' | 'points' | null;
interface SubscriptionOptionsProps {
  onSubscriptionSelect?: (subscription: SubscriptionType) => void;
  savedSelection?: SubscriptionType;
}

const SubscriptionOptions: React.FC<SubscriptionOptionsProps> = ({ 
  onSubscriptionSelect, 
  savedSelection 
}) => {
  const [selectedSubscription, setSelectedSubscription] = useState<SubscriptionType>(null);

  useEffect(() => {
    if (savedSelection) {
      setSelectedSubscription(savedSelection);
    }
  }, [savedSelection]);

  const handleSelectSubscription = (subscription: SubscriptionType) => {
    setSelectedSubscription(subscription);
    onSubscriptionSelect?.(subscription);
  };

  return (
    <section className="subscription-options">
      {/* Free Option */}
      <div 
        className={`sub-option-free sub-card ${selectedSubscription === 'free' ? 'selected' : ''}`}
        onClick={() => handleSelectSubscription('free')}
        style={{ cursor: 'pointer' }}
      >
        <h5 className="sub-card-header">Watch with ads</h5>
        <div className="sub-card-body">
          <h5 className="sub-card-title">Free</h5>
          <p className="sub-card-text">Access to a Vast Library</p>
          <p className="sub-card-text">Unlimited Streaming</p>
          <p className="sub-card-text">Multiple Devices</p>
          <p className="sub-card-text">No Subscription Fee</p>
          <div className="sub-card-button">
            {selectedSubscription === 'free' ? 'Selected' : 'Select'}
          </div>
        </div>
      </div>

      <div className="sub-card-optimal-choice">
        <span>Optimal Choice</span>
      </div>

      {/* Premium Option */}
      <div 
        className={`sub-option-pay-to-watch sub-card ${selectedSubscription === 'premium' ? 'selected' : ''}`}
        onClick={() => handleSelectSubscription('premium')}
        style={{ cursor: 'pointer' }}
      >
        <h5 className="sub-card-header">Pay to Watch</h5>
        <div className="sub-card-body">
          <h5 className="sub-card-title">499de./month</h5>
          <p className="sub-card-text">Access to a Vast Library</p>
          <p className="sub-card-text">Unlimited Streaming</p>
          <p className="sub-card-text">Multiple Devices</p>
          <p className="sub-card-text">Watch without ads</p>
          <p className="sub-card-text">Offline Viewing</p>
          <div className="sub-card-button">
            {selectedSubscription === 'premium' ? 'Selected' : 'Select'}
          </div>
        </div>
      </div>

      {/* Points Option */}
      <div 
        className={`sub-option-engage-receive-points sub-card ${selectedSubscription === 'points' ? 'selected' : ''}`}
        onClick={() => handleSelectSubscription('points')}
        style={{ cursor: 'pointer' }}
      >
        <h5 className="sub-card-header">Engage and receive points</h5>
        <div className="sub-card-body">
          <h5 className="sub-card-title">Watch with points</h5>
          <p className="sub-card-text">Earn points when you engage</p>
          <p className="sub-card-text">Claim rewards with earned points</p>
          <p className="sub-card-text">No Subscription Fee</p>
          <div className="sub-card-button">
            {selectedSubscription === 'points' ? 'Selected' : 'Select'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionOptions;