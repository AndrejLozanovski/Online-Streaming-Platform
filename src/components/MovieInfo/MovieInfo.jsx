import { Link } from "react-router-dom";
import "../MovieInfo/MovieInfo.css";

const MovieInfo = () => {
  return (
    <>
      <div className="overview-title">
        <h2>100% Match 2024</h2>
        <div className="overview-age">16+</div>
        <p className="overview-genre">action, language</p>
      </div>
      <div className="overview-movie-info">
        <div className="movie-info">
          <div className="info">
            <p>
              Genres: <span>History, Drama, Action</span>
            </p>
          </div>
          <div className="info">
            <p>
              Cast:{" "}
              <Link to={"/artistoverview"}>
                Rade Sherbedzija, Silvija Stojanovska, Ratka Radmanovikj
              </Link>
            </p>
          </div>
          <div className="info">
            <p>
              Director: <span>Svetozar Ristovski</span>
            </p>
          </div>
        </div>
        <div className="movie-info">
          <div className="info">
            <p>
              Writers: <span>Svetozar Ristovski, Grace Lea Troje</span>
            </p>
          </div>

          <div className="info">
            <p>
              Produces: <span>Suza Horvat</span>
            </p>
          </div>

          <div className="info">
            <p>
              Cinematography: <span>Dejan Dimeski</span>
            </p>
          </div>
        </div>
        <div className="movie-info">
          <div className="info">
            <p>
              Editing: <span>Atanas Georgiev</span>
            </p>
          </div>

          <div className="info">
            <p>
              Costume Design: <span>Nevena Caklovic,Katarina Kolumbatovic</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
