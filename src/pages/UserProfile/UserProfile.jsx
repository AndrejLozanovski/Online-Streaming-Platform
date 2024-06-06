import { Link } from "react-router-dom";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Navigation from "../../components/Navigation/Navigation";
import "../UserProfile/UserProfile.css";

const UserProfile = () => {
  return (
    <main className="user-profile-page">
      <Navigation />
      <div className="user-profile-page-banner">
        <div className="like-wlist-share-buttons">
          <Link to={"#"}>
            <img
              src={require(`../../assets/images/Icons/Homepage/ph_heart-bold.png`)}
              alt="like icon"
            />
          </Link>
          <Link to={"#"}>
            <img
              src={require(`../../assets/images/Icons/Homepage/typcn_plus.png`)}
              alt="add to watch list icon"
            />
          </Link>
          <Link to={"#"}>
            <img
              src={require(`../../assets/images/Icons/Homepage/fluent_share-24-regular.png`)}
              alt="share icon"
            />
          </Link>
        </div>
      </div>
      <section className="user-profile-page-content">
        <div className="user-profile-page-user-info">
          <div className="user-info">
            <img
              src={require(`../../assets/images/Icons/SignIn/user.jpeg`)}
              className="profile-picture"
              alt=""
            />
            <div className="user-name">
              <h1>Jovan Ivanovski</h1>
              <span>Movie Enjoyer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. At sed dui faucibus dictum. Condimentum
                auctor scelerisque nunc nam. Mauris vel commodo hendrerit mattis varius risus massa
                vitae velit. Aenean urna euismod auctor tortor bibendum nunc sed.
              </p>
            </div>

            <h3>Badges:</h3>
            <div className="user-info-badges">
              <img src={require(`../../assets/images/UserArtistPage/ph_medal.png`)} alt="" />
              <img
                src={require(`../../assets/images/UserArtistPage/simple-icons_openbadges.png`)}
                alt=""
              />
              <img src={require(`../../assets/images/UserArtistPage/tabler_badges.png`)} alt="" />
              <img
                src={require(`../../assets/images/UserArtistPage/solar_medal-star-broken.png`)}
                alt=""
              />
            </div>
            <div className="divider"></div>
            <div className="comments-discussions">
              <p>
                <img
                  src={require("../../assets/images/Icons/Community/Animated loader - ease-in.png")}
                  alt=""
                />
                Comments
              </p>
              <p>
                <img
                  src={require("../../assets/images/Icons/Community/Animated loader - ease-out.png")}
                  alt=""
                />
                Discussion
              </p>
            </div>
          </div>
        </div>
        <div className="user-profile-page-user-activities">
          <div className="user-comments">
            <h2>Comments by Jovan:</h2>
            <div className="user-profile-comments">
              <div className="picture-name">
                <img src={require(`../../assets/images/Icons/SignIn/user.jpeg`)} alt="User" />
                <p>Jovan:</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam massa cursus ac morbi nisl lectus
                nisl eu aliquam.
              </p>
            </div>
            <div className="user-profile-comments">
              <div className="picture-name">
                <img src={require(`../../assets/images/Icons/SignIn/user.jpeg`)} alt="User" />
                <p>Jovan:</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <MoviesSlider />
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
