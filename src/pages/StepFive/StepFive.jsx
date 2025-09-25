import { useRef, useState, useEffect } from "react";
import "../StepFive/StepFive.css";
import { Link } from "react-router-dom";
import { useRegistration } from "../../context/RegistrationContext";

const StepFive = () => {
  const { getStepData, updateStepData } = useRegistration();
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    profileImage: null,
    username: '',
    password: '',
    confirmPassword: '',
    bio: ''
  });

  useEffect(() => {
    const stepData = getStepData('step5');
    setFormData({
      profileImage: stepData.profileImage || null,
      username: stepData.username || '',
      password: stepData.password || '',
      confirmPassword: stepData.confirmPassword || '',
      bio: stepData.bio || ''
    });
  }, [getStepData]);

  const handleImageClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Convert file to data URL for storage and display
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;

        const updatedFormData = {
          ...formData,
          profileImage: imageDataUrl
        };

        setFormData(updatedFormData);
        updateStepData('step5', updatedFormData);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const updatedFormData = {
      ...formData,
      [name]: value
    };

    setFormData(updatedFormData);
    updateStepData('step5', updatedFormData);
  };

  const isFormValid = () => {
    return formData.username.trim();
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-five-content">
          <p className="title">
            <img src={require(`../../assets/images/Icons/Numbers/four.png`)} alt="" />
            Setup Profile
          </p>
          <div className="sign-up-setup-profile-container">
            <label htmlFor="file-input">
              {formData.profileImage ? (
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  onClick={handleImageClick}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: '2px solid #ccc'
                  }}
                />
              ) : (
                <img
                  src={require(`../../assets/images/Icons/SignIn/UploadPicture.png`)}
                  alt="Upload profile picture"
                  onClick={handleImageClick}
                />
              )}
            </label>
            <input
              type="file"
              id="file-input"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div className="setup-profile-form">
              <input
                type="text"
                className="input-form"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                onPaste={(e) => {
                  const pastedText = e.clipboardData.getData('text/plain');
                  if (pastedText) {
                    const updatedFormData = {
                      ...formData,
                      username: pastedText
                    };
                    setFormData(updatedFormData);
                    updateStepData('step5', updatedFormData);
                  }
                }}
                placeholder="Username"
              />
              <input 
                type="password" 
                className="input-form" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password" 
              />
              <input
                type="password"
                className="input-form"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
              />
              <textarea
                className="input-form"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={5}
                cols={40}
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/stepfour"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepsix"} style={{ textDecoration: "none" }}>
              <button
                className="sign-up-navigation"
                disabled={!isFormValid()}
                style={{
                  opacity: !isFormValid() ? 0.5 : 1,
                  cursor: !isFormValid() ? 'not-allowed' : 'pointer'
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

export default StepFive;
