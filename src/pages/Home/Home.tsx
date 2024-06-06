import { useUserStore } from "../../stores/user-store";
import "../Home/Home.css";
import Navigation from "../../components/Navigation/Navigation";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <main className="homepage">
        <Navigation />
        <MoviesBanner />
        <div className="homepage-movie-slider">
          <div className="movies">
            <img
              src={require(`../../assets/images/MovieRoom/movie1.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie2.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie7.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie1.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie2.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie7.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie1.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie2.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie7.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie1.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie2.jpeg`)}
              id="Movie Slider Image"
            />
            <img
              src={require(`../../assets/images/MovieRoom/movie7.jpeg`)}
              id="Movie Slider Image"
            />
          </div>
        </div>
        <section className="homepage-movies-section">
          <MoviesSlider />
          <MoviesSlider />
          <div className="movie-banner">
            <h2>Coming soon</h2>
            <img src={require(`../../assets/images/Banner/banner2.png`)} alt="" />
          </div>
          <MoviesSlider />
          <div className="movie-banner">
            <h2>Coming soon</h2>
            <img src={require(`../../assets/images/Banner/banner3.jpeg`)} alt="" />
          </div>
          <MoviesSlider />
          <MoviesSlider />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
