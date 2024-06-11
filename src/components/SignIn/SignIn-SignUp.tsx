import React, { useState } from "react";
import "../SignIn/SignInSignUp.css";
import { useUserStore } from "../../stores/user-store";
import { signInWithGooglePopup } from "../../lib/firebase";
import { Link } from "react-router-dom";

const DUMMY_USER = {
  email: "example@gmail.com",
  bio: "",
  user_type: "USER",
  fullname: "Jhon Doe",
  username: "jhonDoe",
  interests: [],
  tutorial: false,
  subscription_type: "FREE",
  cultures: [],
  favoriteCategories: [],
  favoriteMovies: ["123", "244", "333"],
};

const SignIn = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = () => {
    setUser(DUMMY_USER);
    localStorage.setItem("user", JSON.stringify(DUMMY_USER));
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
                Lo<span>go</span>
              </p>
            </div>
            <img src={require(`../../assets/images/SignIn/signin.jpeg`)} alt="image" />
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
                <form>
                  <input type="text" placeholder="Email address" />
                  <input type="password" placeholder="Password" />
                  <Link to={"/stepone"} style={{ textDecoration: "none" }}>
                    <button className="mb-20">Register</button>
                  </Link>
                </form>
              </>
            ) : (
              <>
                <form>
                  <input type="text" placeholder="Email address" />
                  <input type="password" placeholder="Password" />
                  <button onClick={handleLogin}>Log in</button>
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
