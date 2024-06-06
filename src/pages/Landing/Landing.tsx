import Logo from "../../assets/images/Logo/logo.png";
import "../Landing/LandingPage.css";
import SubscriptionOptions from "../../components/Subscription/Subscription";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const height = window.innerHeight;

      if (top > height / 2) {
        setShowIcons(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="landing-page">
      <section className="landing-page-banner">
        <div className="banner-content">
          <img src={Logo} className="landing-banner-logo" alt="Logo" />
          <h1 className="landing-page-banner-heading">Explore, Engange & Express yourself</h1>
          <p className="landing-page-banner-text">Watch, learn, collaborate beyond the screen</p>
          <Link to="/signup">
            <button className="landing-page-banner-sign-log-button">Sign up/Log in</button>
          </Link>
        </div>

        <div className="landing-page-banner-movies">
          <img
            src={require(`../../assets/images/LandingMovies/1.png`)}
            alt="movie1"
            className="movie1"
          />
          <img
            src={require(`../../assets/images/LandingMovies/2.png`)}
            alt="movie2"
            className="movie2"
          />
          <img
            src={require(`../../assets/images/LandingMovies/3.png`)}
            alt="movie3"
            className="movie3"
          />
          <img
            src={require(`../../assets/images/LandingMovies/4.png`)}
            alt="movie4"
            className="movie4"
          />
          <img
            src={require(`../../assets/images/LandingMovies/5.png`)}
            alt="movie5"
            className="movie5"
          />
          <img
            src={require(`../../assets/images/LandingMovies/6.png`)}
            alt="movie6"
            className="movie6"
          />
          <img
            src={require(`../../assets/images/LandingMovies/8.png`)}
            alt="movie7"
            className="movie7"
          />
        </div>
      </section>
      <section className={`landing-page-icons ${showIcons ? "show" : ""}`}>
        <div className="landing-page-icons-content">
          <div className="landing-page-icon-content">
            <img
              src={require(`../../assets/images/Icons/LandingPage/icon1.png`)}
              alt="streaming icon"
            />
            <p>Streaming Platform</p>
          </div>
          <div className="landing-page-icon-content">
            <img
              src={require(`../../assets/images/Icons/LandingPage/icon2.png`)}
              alt="community icon"
            />
            <p>Community hub for artists</p>
          </div>
          <div className="landing-page-icon-content">
            <img
              src={require(`../../assets/images/Icons/LandingPage/icon3.png`)}
              alt="culture icon"
            />
            <p>Platform for sharing culture</p>
          </div>
          <div className="landing-page-icon-content">
            <img
              src={require(`../../assets/images/Icons/LandingPage/icon4.png`)}
              alt="business icon"
            />
            <p>Social business model</p>
          </div>
          <div className="landing-page-icon-content">
            <img
              src={require(`../../assets/images/Icons/LandingPage/icon5.png`)}
              alt="support icon"
            />
            <p>Support for emerging talent</p>
          </div>
        </div>
      </section>
      <section className="landing-page-rooms">
        <div className="room-row-1">
          <div className="movie-room f-basis33">
            <h3>Movie Room</h3>
            <div className="movies d-flex">
              <img
                src={require(`../../assets/images/MovieRoom/movie1.jpeg`)}
                alt="Movie Rooom Movie1"
              />
              <img
                src={require(`../../assets/images/MovieRoom/movie2.jpeg`)}
                alt="Movie Rooom Movie2"
              />
              <img
                src={require(`../../assets/images/MovieRoom/movie3.jpeg`)}
                alt="Movie Rooom Movie3"
              />
              <img
                src={require(`../../assets/images/MovieRoom/movie4.jpeg`)}
                alt="Movie Rooom Movie4"
              />
              <img
                src={require(`../../assets/images/MovieRoom/movie5.jpeg`)}
                alt="Movie Rooom Movie5"
              />
            </div>
          </div>

          <div className="kids-room  f-basis33">
            <h3>Kids Room</h3>
            <div className="kids d-flex">
              <img
                src={require(`../../assets/images/KidsRoom/kids1.jpeg`)}
                alt="Kids Rooom Movie1"
              />
              <img
                src={require(`../../assets/images/KidsRoom/kids2.jpeg`)}
                alt="Kids Rooom Movie2"
              />
              <img
                src={require(`../../assets/images/KidsRoom/kids3.jpeg`)}
                alt="Kids Rooom Movie3"
              />
              <img
                src={require(`../../assets/images/KidsRoom/kids4.jpeg`)}
                alt="Kids Rooom Movie4"
              />
              <img
                src={require(`../../assets/images/KidsRoom/kids5.jpeg`)}
                alt="Kids Rooom Movie5"
              />
            </div>
          </div>

          <div className="doc-room  f-basis33">
            <h3>Doc. Room</h3>
            <div className="documentaries d-flex">
              <img src={require(`../../assets/images/DocRoom/doc1.jpeg`)} alt="Doc Rooom Movie1" />
              <img src={require(`../../assets/images/DocRoom/doc2.jpeg`)} alt="Doc Rooom Movie2" />
              <img src={require(`../../assets/images/DocRoom/doc3.jpeg`)} alt="Doc Rooom Movie3" />
              <img src={require(`../../assets/images/DocRoom/doc4.jpeg`)} alt="Doc Rooom Movie4" />
              <img src={require(`../../assets/images/DocRoom/doc5.jpeg`)} alt="Doc Rooom Movie5" />
            </div>
          </div>
        </div>

        <div className="room-row-2">
          <div className="podcasts-room f-basis33">
            <h3>Podcasts</h3>
            <div className="podcasts d-flex">
              <img src={require(`../../assets/images/Podcast/podcast1.jpeg`)} alt="Podcast1" />
              <img src={require(`../../assets/images/Podcast/podcast2.jpeg`)} alt="Podcast2" />
              <img src={require(`../../assets/images/Podcast/podcast3.jpeg`)} alt="Podcast3" />
              <img src={require(`../../assets/images/Podcast/podcast4.jpeg`)} alt="Podcast4" />
              <img src={require(`../../assets/images/Podcast/podcast5.jpeg`)} alt="Podcast5" />
            </div>
          </div>

          <div className="tv-series-room f-basis33">
            <h3>TV Series</h3>
            <div className="series d-flex">
              <img src={require(`../../assets/images/TvSeries/series1.jpeg`)} alt="TvSeries1" />
              <img src={require(`../../assets/images/TvSeries/series2.jpeg`)} alt="TvSeries2" />
              <img src={require(`../../assets/images/TvSeries/series3.jpeg`)} alt="TvSeries3" />
              <img src={require(`../../assets/images/TvSeries/series4.jpeg`)} alt="TvSeries4" />
              <img src={require(`../../assets/images/TvSeries/series5.jpeg`)} alt="TvSeries5" />
            </div>
          </div>
        </div>
      </section>
      <section className="landing-page-meet-the-artists">
        <h1 className="meet-the-artist-title">Meet the artists</h1>
        <div className="artists ">
          <Link to={"/signup"} className="artist-igor artist-card">
            <h3>Igor Dzambazov</h3>
            <img src={require(`../../assets/images/Artists/artist1.png`)} alt="Igor Dzambazov" />
          </Link>

          <Link to={"/signup"} className="artist-rade artist-card">
            <h3>Rade Sherbedzija</h3>
            <img src={require(`../../assets/images/Artists/artist2.png`)} alt="Rade Sherbedzija" />
          </Link>

          <Link to={"/signup"} className="artist-toni artist-card">
            <h3>Toni Mihajlovski</h3>
            <img src={require(`../../assets/images/Artists/artist3.png`)} alt="Toni Mihajlovski" />
          </Link>
        </div>
      </section>
      <section className="landing-page-movie-banner">
        <img
          src={require(`../../assets/images/Banner/banner4.jpeg`)}
          alt="Familijata Markovski Poster"
        />
      </section>

      <SubscriptionOptions />

      <section className="landing-page-footer">
        <p>
          Kinemoe.mk&copy; <span>2024</span>
        </p>
        <img src={require(`../../assets/images/Logo/logo.png`)} alt="Kinemoe Logo" />
      </section>
    </section>
  );
};

export default Landing;
