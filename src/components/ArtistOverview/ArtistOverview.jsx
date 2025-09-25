import "../ArtistOverview/ArtistOverview.css";
import MoviesSlider from "../MoviesSlider/MoviesSlider";
import MovieOverview from "../MovieOverview/MovieOverview";
import { useMovies } from "../../hooks/useApiData";
import { useState } from "react";

const ArtistOverview = ({ actor = null, onClose }) => {
  // Default actor data for backward compatibility
  const defaultActor = {
    id: 1,
    name: "Toni Mihajlovski",
    image: "/thumbnails/actors/artist3.webp",
    bio: `Mihajlovski was born in Kumanovo, Yugoslavia on the 1st of July, 1967. After completing The Faculty of Arts in Skopje at the Ss. Cyril and Methodius University in Skopje he became a member of the drama section in the Macedonian National Theater in 1994. During the 5th annual "JoakimInterFest" in 2010 which took place in Kragujevac, Serbia, he received the award for best actor`,
    awards: [
      "Award for Best Actor at JoakimInterFest, Kragujevac, Serbia (2010)",
      "Lifetime Achievement Award 'Petre Prličko', Veleshki Teatar (2024)",
      "Multiple prestigious awards in Macedonia and the region",
    ],
    movies: [
      "/thumbnails/actorMovies/movie1.webp",
      "/thumbnails/actorMovies/movie2.webp",
      "/thumbnails/actorMovies/movie3.webp",
      "/thumbnails/actorMovies/movie4.webp",
      "/thumbnails/actorMovies/movie5.webp",
    ],
  };

  const currentActor = actor || defaultActor;
  const { data: allMovies, isLoading, error } = useMovies();
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  const artistMovies = allMovies
    .filter(movie => movie.cast && movie.cast.includes("Toni Mihajlovski"))
    .map(movie => ({
      id: movie.id.toString(),
      title: movie.title,
      year: movie.year.toString(),
      genre: movie.genre ? movie.genre.join(", ") : "",
      image: movie.image,
      description: movie.description
    }));

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
    setIsMovieModalOpen(true);
  };

  const handleCloseMovieModal = () => {
    setIsMovieModalOpen(false);
    setSelectedMovieId(null);
  };
  return (
    <div className="artist-modal-overlay" onClick={onClose}>
      <div className="artist-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="artist-close-btn" onClick={onClose}>
          <img
            src={require(`../../assets/images/Icons/MovieOverview/close.png`)}
            alt="close icon"
          />
        </button>

        {/* Hero Banner Section */}
        <div className="artist-hero-section">
          <div className="artist-hero-content">
            <div className="artist-profile">
              <div className="artist-image-container">
                <img
                  src={currentActor.image}
                  alt="Artist Profile"
                  className="artist-profile-image"
                />
                <div className="artist-image-overlay"></div>
              </div>
            </div>

            <div className="artist-info">
              <div className="artist-header">
                <h1 className="artist-name">{currentActor.name}</h1>
                <div className="artist-role">
                  <span className="role-badge">Actor</span>
                </div>
              </div>

              <div className="artist-bio">
                <p className="bio-text">
                  {currentActor.bio}
                </p>
              </div>

              <div className="artist-stats">
                <div className="stat-item">
                  <span className="stat-number">{currentActor.movies?.length || 0}</span>
                  <span className="stat-label">Movies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{currentActor.awards?.length || 0}</span>
                  <span className="stat-label">Awards</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="artist-content-sections">
          {/* Movies Section */}
          <section className="content-section movies-section">
            <div className="section-header">
              <h2 className="section-title">Featured Movies</h2>
              <p className="section-subtitle">Movies starring this artist</p>
            </div>
            <MoviesSlider
              customTitle="Featured Movies"
              customData={artistMovies}
              contentType="movies"
              onMovieClick={handleMovieClick}
            />
          </section>

          {/* Awards Section */}
          <section className="content-section awards-section">
            <div className="section-header">
              <h2 className="section-title">Awards & Recognition</h2>
              <p className="section-subtitle">Achievements and honors</p>
            </div>
            <div className="awards-grid">
              {currentActor.awards && currentActor.awards.map((award, index) => (
                <div key={index} className="award-item">
                  <div className="award-icon">
                    {index === 0 ? "🏆" : index === 1 ? "🎭" : "🏅"}
                  </div>
                  <div className="award-content">
                    <h3 className="award-title">Award {index + 1}</h3>
                    <p className="award-description">
                      {award}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>


        </div>
      </div>

      {/* Movie Modal */}
      {isMovieModalOpen && selectedMovieId && (
        <MovieOverview
          movieId={selectedMovieId}
          onClose={handleCloseMovieModal}
          onArtistClick={() => {}}
        />
      )}
    </div>
  );
};

export default ArtistOverview;
