import { Link } from "react-router-dom";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Navigation from "../../components/Navigation/Navigation";
import "../ArtistProfile/ArtistProfile.css";

const ArtistProfile = () => {
  return (
    <main className="artist-profile-page">
      <Navigation />
      <div className="artist-profile-page-banner">
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
      <section className="artist-profile-page-content">
        <div className="artist-profile-page-artist-info">
          <div className="artist-info">
            <img
              src={require(`../../assets/images/Icons/SignIn/user.jpeg`)}
              className="profile-picture"
              alt=""
            />
            <img
              src={require(`../../assets/images/UserArtistPage/Main Checkmark.png`)}
              className="verified"
              alt=""
            />
            <div className="artist-name">
              <h1>Toni Mihajlovski</h1>
              <span>Movie Enjoyer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. At sed dui faucibus dictum. Condimentum
                auctor scelerisque nunc nam. Mauris vel commodo hendrerit mattis varius risus massa
                vitae velit. Aenean urna euismod auctor tortor bibendum nunc sed.
              </p>
            </div>

            <h3>Badges:</h3>
            <div className="artist-info-badges">
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
        <div className="artist-profile-page-artist-activities">
          <div className="artist-comments">
            <h2>Comments by Jovan:</h2>
            <div className="artist-profile-comments">
              <div className="picture-name">
                <img src={require(`../../assets/images/Icons/SignIn/user.jpeg`)} alt="User" />
                <img
                  src={require(`../../assets/images/UserArtistPage/Main Checkmark.png`)}
                  alt=""
                />
                <p>Jovan:</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam massa cursus ac morbi nisl lectus
                nisl eu aliquam.
              </p>
            </div>
            <div className="artist-profile-comments">
              <div className="picture-name">
                <img src={require(`../../assets/images/Icons/SignIn/user.jpeg`)} alt="User" />
                <img
                  src={require(`../../assets/images/UserArtistPage/Main Checkmark.png`)}
                  alt=""
                />
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

export default ArtistProfile;
