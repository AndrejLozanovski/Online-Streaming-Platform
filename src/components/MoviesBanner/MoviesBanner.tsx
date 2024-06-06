import { useEffect, useState } from "react";
import "../MoviesBanner/MoviesBanner.css";
import { Link } from "react-router-dom";
import WatchLikeWlistShare from "../WatchLikeWlistShareButtons/WatchLikeWlistShare";

const MoviesBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(true);

    const interval = setInterval(() => {
      setAnimate(false);
      setCurrentSlide((prevSlide) => {
        const nextSlide = (prevSlide % 4) + 1;
        setTimeout(() => setAnimate(true), 100);
        return nextSlide;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="movies-banner">
      <Link to={"/search"} className="search-icon">
        <img src={require(`../../assets/images/Icons/Homepage/Search Button.png`)} alt="" />
      </Link>

      <div className="carousel" style={{ transform: `translateX(-${(currentSlide - 1) * 103}%)` }}>
        <div className="slide banner-one">
          <div className="movies-banner-content movies-banner-wrapper">
            <img
              className={animate && currentSlide === 1 ? "fade-in" : ""}
              src={require(`../../assets/images/MovieLogos/movielogo1.png`)}
              alt="Balkankan movie logo"
            />
            <p className={animate && currentSlide === 1 ? "fade-in" : ""}>
              Дезертер од македонската војска и неговиот италијански крвен брат, бараат мртва баба
              завиткана во украден килим низ криминалниот свет на Балканот.
            </p>
            <WatchLikeWlistShare />
          </div>
        </div>
        <div className="slide banner-two">
          <div className="movies-banner-content movies-banner-wrapper">
            <img
              className={animate && currentSlide === 2 ? "fade-in" : ""}
              src={require(`../../assets/images/MovieLogos/movielogo2.png`)}
              alt="Balkankan movie logo"
            />
            <p className={animate && currentSlide === 2 ? "fade-in" : ""}>
              При шверцување на нелегални личности во Европа, Лазар ќе се соочи со невозможен избор.
            </p>
            <WatchLikeWlistShare />
          </div>
        </div>
        <div className="slide banner-three">
          <div className="movies-banner-content movies-banner-wrapper">
            <img
              className={animate && currentSlide === 3 ? "fade-in" : ""}
              src={require(`../../assets/images/MovieLogos/movielogo3.png`)}
              alt="Balkankan movie logo"
            />
            <p className={animate && currentSlide === 3 ? "fade-in" : ""}>
              Македонија е мала земја, во срцето на Балканот, која пет века била под јарамот на
              Отоманската Империја.
            </p>
            <WatchLikeWlistShare />
          </div>
        </div>
        <div className="slide banner-four">
          <div className="movies-banner-content movies-banner-wrapper">
            <img
              className={animate && currentSlide === 4 ? "fade-in" : ""}
              src={require(`../../assets/images/MovieLogos/movielogo4.png`)}
              alt="Balkankan movie logo"
            />
            <p className={animate && currentSlide === 4 ? "fade-in" : ""}>
              Фудбалер кој игра за македонскиот фудбалски клуб се заљубува во Еврејка. Но, нивната
              среќа е загрозена од новата нацистичка влада, која пука и во еврејскиот тренер на
              клубот.
            </p>
            <WatchLikeWlistShare />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesBanner;
