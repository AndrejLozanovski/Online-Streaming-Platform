import { useRegistration } from '../contexts/RegistrationContext';
import { useUserStore } from '../stores/user-store';
import { useNavigate } from 'react-router-dom';

const RegistrationSummary = () => {
  const { getAllData, clearData, saveToStorage, completeRegistration, validateRegistration } = useRegistration();
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const data = getAllData();

  const handleSubmitRegistration = async () => {
    try {
      const validation = validateRegistration();

      if (!validation.isValid) {
        alert('Please complete all required fields:\n' + validation.errors.join('\n'));
        return;
      }

      const result = completeRegistration();
      
      if (result.success) {
        // Remove password from user object before setting in store
        const { password, ...userWithoutPassword } = result.user;
        
        setUser(userWithoutPassword);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        
        alert('Registration completed successfully!');
        
        navigate('/');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const handleSaveProgress = () => {
    try {
      saveToStorage();
      alert('Progress saved successfully!');
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save progress. Please try again.');
    }
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all registration data? This action cannot be undone.')) {
      clearData();
      alert('All data has been cleared.');
    }
  };

  return (
    <div className="registration-summary">
      <h2>Registration Summary</h2>
      
      <div className="summary-content">
        <div className="summary-section">
          <h3>Email</h3>
          <p>{data.step0?.email || 'Not provided'}</p>
        </div>

        <div className="summary-section">
          <h3>Step 1 - User Type</h3>
          <p>{data.step1?.userType || 'Not selected'}</p>
        </div>

        <div className="summary-section">
          <h3>Step 2 - Interests</h3>
          <p>{data.step2?.interests?.length > 0 ? data.step2.interests.join(', ') : 'None selected'}</p>
        </div>

        <div className="summary-section">
          <h3>Step 3 - Engagement</h3>
          <p>{data.step3?.engagement || 'Not selected'}</p>
        </div>

        <div className="summary-section">
          <h3>Step 4 - Subscription</h3>
          <p>{data.step4?.subscription || 'Not selected'}</p>
        </div>

        <div className="summary-section">
          <h3>Step 5 - Profile Setup</h3>
          <div className="profile-details">
            <p><strong>Username:</strong> {data.step5?.username || 'Not provided'}</p>
            <p><strong>Bio:</strong> {data.step5?.bio || 'Not provided'}</p>
            <p><strong>Profile Image:</strong> {data.step5?.profileImage ? 'Uploaded' : 'Not uploaded'}</p>
            <p><strong>Password:</strong> {data.step5?.password ? 'Set' : 'Not set'}</p>
            {data.step5?.password && data.step5?.confirmPassword && 
             data.step5.password !== data.step5.confirmPassword && (
              <p style={{ color: 'red' }}><strong>Warning:</strong> Passwords do not match</p>
            )}
          </div>
        </div>

        <div className="summary-section">
          <h3>Step 6 - Cultural Preferences</h3>
          <p>{data.step6?.selectedCultures?.length > 0 ? data.step6.selectedCultures.join(', ') : 'None selected'}</p>
        </div>

        <div className="summary-section">
          <h3>Step 7 - Content Recommendations</h3>
          <p>{data.step7?.contentRecommendations?.length > 0 ? data.step7.contentRecommendations.join(', ') : 'None selected'}</p>
        </div>

        <div className="summary-section">
          <h3>Step 8 - Notification Preferences</h3>
          <div className="notification-details">
            <p><strong>Email Notifications:</strong> {data.step8?.emailNotifications ? 'Yes' : 'No'}</p>
            <p><strong>App Notifications:</strong> {data.step8?.appNotifications ? 'Yes' : 'No'}</p>
            <p><strong>No Notifications:</strong> {data.step8?.noNotifications ? 'Yes' : 'No'}</p>
          </div>
        </div>

        <div className="summary-section">
          <h3>Step 9 - Privacy Settings</h3>
          <p>{data.step9?.privacySettings || 'Not selected'}</p>
        </div>
      </div>

      <div className="summary-actions">
        <button 
          className="btn btn-secondary" 
          onClick={handleSaveProgress}
          type="button"
        >
          Save Progress
        </button>
        <button 
          className="btn btn-primary" 
          onClick={handleSubmitRegistration}
          type="button"
        >
          Complete Registration
        </button>
        <button 
          className="btn btn-danger" 
          onClick={handleClearData}
          type="button"
        >
          Clear All Data
        </button>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="raw-data">
          <h4>Raw Data (Debug)</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RegistrationSummary;