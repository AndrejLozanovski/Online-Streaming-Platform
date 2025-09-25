import { useUserStore } from "../../stores/user-store";
import "../Home/Home.css";
import Navigation from "../../components/Navigation/Navigation";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import MovieOverview from "../../components/MovieOverview/MovieOverview";
import ArtistOverview from "../../components/ArtistOverview/ArtistOverview";

const Homepage = () => {
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));

    const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isArtistModalOpen, setIsArtistModalOpen] = useState(false);

  const handleMovieClick = (movieId: any) => {
    setSelectedMovieId(movieId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
  };

  const handleArtistClick = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
    setIsArtistModalOpen(true);
  };

  const handleCloseArtistModal = () => {
    setIsArtistModalOpen(false);
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
          <MoviesSlider contentType="movies" category="popular"  onMovieClick={handleMovieClick} />
          <MoviesSlider contentType="movies" category="newRelease"  onMovieClick={handleMovieClick} />
          <div className="movie-banner">
            <h2>Coming soon</h2>
            <img src={require(`../../assets/images/Banner/banner2.png`)} alt="" />
          </div>
          <MoviesSlider contentType="movies" category="recommendation"  onMovieClick={handleMovieClick} />
          <div className="movie-banner">
            <h2>Coming soon</h2>
            <img src={require(`../../assets/images/Banner/banner3.jpeg`)} alt="" />
          </div>
          <MoviesSlider contentType="podcasts" customTitle="Podcasts"  onMovieClick={handleMovieClick} />
          <MoviesSlider contentType="kids" customTitle="Kids"  onMovieClick={handleMovieClick} />

          {isModalOpen && selectedMovieId && (
        <MovieOverview
          movieId={selectedMovieId}
          onClose={handleCloseModal}
          onArtistClick={handleArtistClick}
        />
      )}

      {isArtistModalOpen && (
        <ArtistOverview onClose={handleCloseArtistModal} />
      )}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
