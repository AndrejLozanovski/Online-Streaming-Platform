import { Link } from "react-router-dom";
import "../WatchLikeWlistShareButtons/WatchLikeWlistShare.css";

const WatchLikeWlistShare = () => {
  return (
    <section className="watch-like-wlist-share-buttons">
      <Link to={"/videoplayer"} className="watch-button">
        <img src={require(`../../assets/images/Icons/Homepage/ph_play-bold.png`)} alt="play icon" />
        Гледај
      </Link>
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
    </section>
  );
};

export default WatchLikeWlistShare;
