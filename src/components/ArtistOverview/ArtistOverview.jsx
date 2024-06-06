import "../ArtistOverview/ArtistOverview.css";
import { useNavigate } from "react-router-dom";
import MoviesSlider from "../MoviesSlider/MoviesSlider";

const ArtistOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="artist-overview-pop-up">
      <div className="artist-overview-banner">
        <img
          src={require(`../../assets/images/Icons/MovieOverview/close.png`)}
          alt="close icon"
          onClick={() => navigate(-1)}
          className="artist-overview-close"
        />

        <div className="artist-overview-banner-content">
          <img
            src={require(`../../assets/images/Artists/artistoverview.png`)}
            alt="Balkankan movie logo"
          />
          <div className="artist-bio">
            <h1>Тони Михајловски</h1>
            <p>
              Михајловски е роден во Куманово на 1 јули 1967 година. Тој по завршувањето на Факултет
              за драмски уметност во Скопје, станува член на Драмата при Македонски народен
              театар во 1994 година. Во 2010 тој станал добитник на наградата за најдобар глумец на
              петтиот меѓународен театарски фестивал „Јоаким Интер фест“ во Крагуевац, Србија
            </p>
            <button>See more</button>
          </div>
        </div>
      </div>
      <div className="artist-overview-content">
        <MoviesSlider />
        <div className="artist-awards">
          <ul>
            <li>Награда за најдобар глумец на фестивалот "Јоаким Интер Фест" (2010)</li>
            <li>
              Награда за најдобро глумечко остварување на МТФ{" "}
              <a
                target="_blank"
                href="https://mk.wikipedia.org/wiki/%D0%92%D0%BE%D1%98%D0%B4%D0%B0%D0%BD_%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B4%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B8"
              >
                "Војдан Чернодрински"
              </a>{" "}
              Прилеп за улогата за "Ефрем Поплавски" во претставата "Вечната куќа" (2013)
            </li>
            <li>
              Награда{" "}
              <a
                target="_blank"
                href="https://mk.wikipedia.org/wiki/13_%D0%BD%D0%BE%D0%B5%D0%BC%D0%B2%D1%80%D0%B8"
              >
                13 ноември
              </a>{" "}
              на град{" "}
              <a
                target="_blank"
                href="https://mk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5"
              >
                {" "}
                Скопје
              </a>{" "}
              (2022)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtistOverview;
