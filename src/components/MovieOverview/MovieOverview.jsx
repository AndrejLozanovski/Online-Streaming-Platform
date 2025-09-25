import { Link } from "react-router-dom";
import "../MovieOverview/MovieOverview.css";
import WatchLikeWlistShare from "../WatchLikeWlistShareButtons/WatchLikeWlistShare";
import Comment from "../CommentCard/Comment";
import { useState, useEffect, useRef } from "react";
import MovieInfo from "../MovieInfo/MovieInfo";
import ArtistOverview from "../ArtistOverview/ArtistOverview";
import { apiMovies, apiActors } from "../../global/api-urls";

const MovieOverview = ({ movieId, onClose, onArtistClick = () => {} }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [isArtistModalOpen, setIsArtistModalOpen] = useState(false);
  const videoRef = useRef(null);

  const soundIcon = require("../../assets/images/Icons/MovieOverview/sound (2).png");
  const muteIcon = require("../../assets/images/Icons/MovieOverview/mute (2).png");

  const handleMuteClick = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiMovies}/${movieId}`);

        if (!response.ok) {
          throw new Error("Movie not found");
        }

        const data = await response.json();
        console.log("Movie data:", data);
        setMovie(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch(apiActors);
        if (response.ok) {
          const data = await response.json();
          setActors(data);
        }
      } catch (err) {
        console.error("Error fetching actors:", err);
      }
    };

    fetchActors();
  }, []);

  const handleArtistClick = () => {
    if (actors.length > 0) {
      const randomIndex = Math.floor(Math.random() * actors.length);
      setSelectedActor(actors[randomIndex]);
      setIsArtistModalOpen(true);
    }
  };

  const handleCloseArtistModal = () => {
    setIsArtistModalOpen(false);
    setSelectedActor(null);
  };

  if (loading) {
    return (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="movie-overview-pop-up">
          <div className="movie-loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="movie-overview-pop-up">
          <div className="movie-error">Error: {error}</div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="movie-overview-pop-up">
          <div className="movie-not-found">Movie not found</div>
        </div>
      </div>
    );
  }

  const trailerUrl = movie.trailerUrl || movie.trailer || movie.video_url || movie.videoUrl;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="movie-overview-pop-up">
        {/* Hero Banner Section */}
        <div className="movie-overview-banner">
          {/* Background Video/Image */}
          {trailerUrl ? (
            <>
              {/* Loading placeholder */}
              {!videoLoaded && (
                <div className="video-loading-placeholder">
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      border: '3px solid rgba(255,255,255,0.3)',
                      borderTop: '3px solid #81c63c',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      margin: '0 auto 10px'
                    }}></div>
                    Loading trailer...
                  </div>
                </div>
              )}

              <iframe
                ref={videoRef}
                className="movie-trailer-video"
                src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&mute=1&loop=1&playlist=${trailerUrl}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1&start=0&end=999999&autohide=1&wmode=opaque`}
                title="Movie Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
                onLoad={() => {
                  console.log("YouTube iframe loaded");
                  setTimeout(() => {
                    setVideoLoaded(true);
                  }, 1000);
                }}
                onError={() => {
                  console.log("YouTube iframe error");
                  setVideoLoaded(true);
                }}
              />
            </>
          ) : (
            <div
              className="movie-fallback-image"
              style={{
                backgroundImage: `url(${movie.image})`,
              }}
            />
          )}

          {/* Gradient Overlay */}
          <div className="movie-banner-overlay" />

          {/* Control Buttons */}
          <button className="movies-overview-close" onClick={onClose}>
            <img
              src={require(`../../assets/images/Icons/MovieOverview/close.png`)}
              alt="close icon"
            />
          </button>

          <button className="movies-overview-sound" onClick={handleMuteClick}>
            <img
              src={isMuted ? muteIcon : soundIcon}
              alt={isMuted ? "unmute" : "mute"}
            />
          </button>

          {/* Movie Information Content */}
          <div className="movies-overview-banner-content">
            <div className="movie-header">
              <h1 className="movies-overview-title">
                {movie.title}
                <span className="movie-year"> ({movie.year})</span>
              </h1>

              <div className="movie-meta">
                <div className="movie-genres">
                  {movie.genre &&
                    movie.genre.slice(0, 3).map((genreItem, index) => (
                      <span key={index} className="genre-tag">
                        {genreItem}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="movie-description">
              <p>
                {movie.description?.length > 200
                  ? `${movie.description.substring(0, 200)}...`
                  : movie.description
                }
                <Link
                  to={movie.imdbUrl || `https://www.imdb.com/title/${movie.imdbId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-link"
                >
                  {" "}Read more
                </Link>
              </p>
            </div>

            <div className="movie-actions">
              <WatchLikeWlistShare />
            </div>
          </div>
        </div>

        {/* Detailed Content Section */}
        <div className="movie-overview-content">
          {/* Movie Information Section */}
          <div className="movie-info-section">
            <MovieInfo movie={movie} onArtistClick={handleArtistClick} />
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <div className="overview-comments">
              <h2>Comments & Reviews</h2>
              <div className="comments-list">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Modal */}
      {isArtistModalOpen && selectedActor && (
        <ArtistOverview
          actor={selectedActor}
          onClose={handleCloseArtistModal}
        />
      )}
    </div>
  );
};

export default MovieOverview;
