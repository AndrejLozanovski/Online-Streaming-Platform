import "../MovieInfo/MovieInfo.css";

const MovieInfo = ({ movie, onArtistClick = () => {} }) => {
  if (!movie) {
    return <div className="movie-info-loading">Loading movie info...</div>;
  }

  return (
    <>
      <div className="overview-title">
        <h2>
          {movie.recommended ? "100% Match" : "Recommended"} {movie.year}
        </h2>
        <div className="overview-age">{movie.ageRating || "16+"}</div>
        <p className="overview-genre">{movie.tags?.join(", ") || "action, language"}</p>
      </div>
      <div className="overview-movie-info">
        <div className="movie-info">
          <div className="info">
            <p>
              Genres: <span>{movie.genre?.join(", ") || "N/A"}</span>
            </p>
          </div>
          <div className="info">
            <p>
              Cast:{" "}
              {movie.cast ? (
                movie.cast.map((actor, index) => (
                  <span key={index}>
                    <span
                      className="cast-member"
                      onClick={() => onArtistClick && onArtistClick()}
                      style={{ cursor: "pointer", color: "#81c63c", textDecoration: "underline" }}
                    >
                      {actor}
                    </span>
                    {index < movie.cast.length - 1 && ", "}
                  </span>
                ))
              ) : (
                "N/A"
              )}
            </p>
          </div>
          <div className="info">
            <p>
              Director: <span>{movie.director || "N/A"}</span>
            </p>
          </div>
        </div>
        <div className="movie-info">
          <div className="info">
            <p>
              Writers: <span>{movie.writers?.join(", ") || "N/A"}</span>
            </p>
          </div>

          <div className="info">
            <p>
              Producers: <span>{movie.producers?.join(", ") || "N/A"}</span>
            </p>
          </div>

          <div className="info">
            <p>
              Cinematography: <span>{movie.cinematography || "N/A"}</span>
            </p>
          </div>
        </div>
        <div className="movie-info">
          <div className="info">
            <p>
              Editing: <span>{movie.editing || "N/A"}</span>
            </p>
          </div>

          <div className="info">
            <p>
              Costume Design: <span>{movie.costumeDesign?.join(", ") || "N/A"}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
