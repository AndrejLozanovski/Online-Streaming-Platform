import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({
    step0: {
      email: '',
    },
    step1: {
      userType: null,
    },
    step2: {
      interests: [],
    },
    step3: {
      engagement: null,
    },
    step4: {
      subscription: null,
    },
    step5: {
      profileImage: null,
      username: '',
      password: '',
      confirmPassword: '',
      bio: '',
    },
    step6: {
      selectedCultures: [],
    },
    step7: {
      contentRecommendations: [],
    },
    step8: {
      emailNotifications: false,
      appNotifications: false,
      noNotifications: false,
    },
    step9: {
      privacySettings: null,
    }
  });

  const updateStepData = (step, data) => {
    setRegistrationData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        ...data
      }
    }));
  };

  const getStepData = (step) => {
    return registrationData[step];
  };

  const getAllData = () => {
    return registrationData;
  };

  const clearData = () => {
    setRegistrationData({
      step0: { email: '' },
      step1: { userType: null },
      step2: { interests: [] },
      step3: { engagement: null },
      step4: { subscription: null },
      step5: { profileImage: null, username: '', password: '', confirmPassword: '', bio: '' },
      step6: { selectedCultures: [] },
      step7: { contentRecommendations: [] },
      step8: { emailNotifications: false, appNotifications: false, noNotifications: false },
      step9: { privacySettings: null }
    });
  };

  const saveToStorage = () => {
    try {
      localStorage.setItem('registrationData', JSON.stringify(registrationData));
    } catch (error) {
      console.error('Failed to save registration data:', error);
    }
  };

  const loadFromStorage = () => {
    try {
      const saved = localStorage.getItem('registrationData');
      if (saved) {
        setRegistrationData(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load registration data:', error);
    }
  };

  const completeRegistration = () => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

      const newUser = {
        id: Date.now().toString(),
        email: registrationData.step0.email,
        username: registrationData.step5.username,
        password: registrationData.step5.password || '',
        fullname: registrationData.step5.username,
        bio: registrationData.step5.bio || '',
        profileImage: registrationData.step5.profileImage,
        userType: registrationData.step1.userType,
        interests: registrationData.step2.interests,
        engagement: registrationData.step3.engagement,
        subscription: registrationData.step4.subscription,
        cultures: registrationData.step6.selectedCultures,
        contentRecommendations: registrationData.step7.contentRecommendations,
        notifications: {
          email: registrationData.step8.emailNotifications,
          app: registrationData.step8.appNotifications,
          none: registrationData.step8.noNotifications
        },
        privacySettings: registrationData.step9.privacySettings,
        tutorial: false,
        subscription_type: registrationData.step4.subscription || "FREE",
        favoriteCategories: [],
        favoriteMovies: [],
        createdAt: new Date().toISOString()
      };

      existingUsers.push(newUser);
      
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
      
      clearData();
      
      localStorage.removeItem('registrationData');
      
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Failed to complete registration:', error);
      return { success: false, error: error.message };
    }
  };

  const checkEmailExists = (email) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      return existingUsers.some(user => user.email === email);
    } catch (error) {
      console.error('Failed to check email:', error);
      return false;
    }
  };

  const validateRegistration = () => {
    const errors = [];

    // Email is now optional
    // if (!registrationData.step0.email) {
    //   errors.push('Email is required');
    // }

    if (!registrationData.step5.username) {
      errors.push('Username is required');
    }

    if (registrationData.step5.password && registrationData.step5.password !== registrationData.step5.confirmPassword) {
      errors.push('Passwords do not match');
    }

    if (!registrationData.step1.userType) {
      errors.push('User type is required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const value = {
    registrationData,
    updateStepData,
    getStepData,
    getAllData,
    clearData,
    saveToStorage,
    loadFromStorage,
    completeRegistration,
    checkEmailExists,
    validateRegistration
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationProvider;
