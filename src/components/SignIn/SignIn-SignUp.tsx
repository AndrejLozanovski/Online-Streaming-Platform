import React, { useState } from "react";
import "../SignIn/SignInSignUp.css";
import { useUserStore } from "../../stores/user-store";
import { signInWithGooglePopup } from "../../lib/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useRegistration } from "../../context/RegistrationContext";



const SignIn = () => {
  const setUser = useUserStore((state) => state.setUser);
  const { updateStepData } = useRegistration();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    const user = registeredUsers.find((u: any) => u.username === loginUsername);

    if (!user) {
      setLoginError("User not found. Please check your username.");
      return;
    }

    if (user.password !== loginPassword) {
      setLoginError("Incorrect password. Please try again.");
      return;
    }

    const userData = {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
      userType: user.userType || 'user'
    };

    setUser(userData);
    navigate('/');
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGooglePopup();

      const user = {
        fullname: result.user.displayName,
        email: result.user.email,
        image: result.user.photoURL,
      };

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="signin-signup-pop-up">
        <div className="signin-signup-pop-up-one-content">
          <div className="signin-signup-pop-up-image">
            <div className="title">
              <p>
                Kine<span>Moe</span>
              </p>
            </div>
            <img src={require(`../../assets/images/SignIn/signin.jpeg`)} alt="Kinemoe" />
          </div>
          <div className="singin-signup-pop-up-form">
            <div className="title">
              <h1>{isSignUp ? "Create your account" : "Welcome!"}</h1>
              <p>{isSignUp ? "" : "Join us!"}</p>
            </div>

            {isSignUp ? (
              <>
                <div className="signin-signup-pop-up-social-buttons">
                  <div className="social-buttons" onClick={handleGoogleLogin}>
                    <img
                      src={require(`../../assets/images/SignIn/flat-color-icons_google.png`)}
                      alt="Google Logo"
                    />
                    Sign up with Google
                  </div>
                  <div className="social-buttons">
                    <img
                      src={require(`../../assets/images/SignIn/logos_facebook.png`)}
                      alt="Facebook Logo"
                    />
                    Sign up with Facebook
                  </div>
                  <div className="social-buttons">
                    <img
                      src={require(`../../assets/images/SignIn/tdesign_logo-apple-filled.png`)}
                      alt="Facebook Logo"
                    />
                    Sign up with Apple
                  </div>
                </div>
                <div className="divider-container">
                  <div className="line"></div>
                  <span className="divider-text">or</span>
                  <div className="line"></div>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <Link to={"/stepone"} style={{ textDecoration: "none" }}>
                    <button className="mb-20">
                      Register
                    </button>
                  </Link>
                </form>
              </>
            ) : (
              <>
                <form onSubmit={handleLogin}>
                  <input
                    type="text"
                    placeholder="Username"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                  {loginError && (
                    <p style={{ color: '#ff6b6b', fontSize: '14px', margin: '5px 0' }}>
                      {loginError}
                    </p>
                  )}
                  <button type="submit">Log in</button>
                </form>
                <div className="divider-container">
                  <div className="line"></div>
                  <span className="divider-text">or</span>
                  <div className="line"></div>
                </div>
                <div className="signin-signup-pop-up-social-buttons">
                  <div className="social-buttons" onClick={handleGoogleLogin}>
                    <img
                      src={require(`../../assets/images/SignIn/flat-color-icons_google.png`)}
                      alt="Google Logo"
                    />
                    Sign up with Google
                  </div>
                  <div className="social-buttons">
                    <img
                      src={require(`../../assets/images/SignIn/logos_facebook.png`)}
                      alt="Facebook Logo"
                    />
                    Sign up with Facebook
                  </div>
                </div>
              </>
            )}

            <p className="create-new-account" onClick={handleToggleForm}>
              {isSignUp ? "Already have an account? Log in" : "Create a new account"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
