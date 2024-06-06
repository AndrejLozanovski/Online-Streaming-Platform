import { Link } from "react-router-dom";
import "../MovieOverview/MovieOverview.css";
import WatchLikeWlistShare from "../WatchLikeWlistShareButtons/WatchLikeWlistShare";
import Comment from "../CommentCard/Comment";
import { useState } from "react";
import MovieInfo from "../MovieInfo/MovieInfo";
import { useNavigate } from "react-router-dom";

const MovieOverview = () => {
  const soundIcon = require("../../assets/images/Icons/MovieOverview/sound (2).png");
  const muteIcon = require("../../assets/images/Icons/MovieOverview/mute (2).png");
  const navigate = useNavigate();

  const [soundMuteIcons, setsoundMuteIcons] = useState(soundIcon);

  const handleMuteClick = () => {
    setsoundMuteIcons(soundMuteIcons === soundIcon ? muteIcon : soundIcon);
  };

  return (
    <div className="movie-overview-pop-up">
      <div className="movie-overview-banner">
        <img
          src={require(`../../assets/images/Icons/MovieOverview/close.png`)}
          alt="close icon"
          className="movies-overview-close"
          onClick={() => navigate(-1)}
        />
        <img
          src={soundMuteIcons}
          className="movies-overview-sound"
          onClick={handleMuteClick}
          alt="mute icon"
        />
        <div className="movies-overview-banner-content">
          <img
            src={require(`../../assets/images/MovieLogos/movielogo2.png`)}
            className="movies-overview-logo"
            alt="Balkankan movie logo"
          />
          <p>
            При шверцување на нелегални личности во Европа, Лазар ќе се соочи со невозможен избор.
            <Link to={"#"}> See more...</Link>
          </p>
          <WatchLikeWlistShare />
        </div>
      </div>
      <div className="movie-overview-content">
        <MovieInfo />
        <div className="overview-comments">
          <h2>Comments</h2>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;
