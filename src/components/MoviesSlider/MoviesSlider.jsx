import React, { useEffect, useRef } from "react";
import "../MoviesSlider/MoviesSlider.css";

const MoviesSlider = () => {
  const containerRef = useRef(null);
  const scrollDelta = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        scrollDelta.current += event.deltaY * 1.5;
        startSmoothScroll();
      }
    };

    const startSmoothScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        smoothScroll();
      }
    };

    const smoothScroll = () => {
      if (scrollDelta.current !== 0) {
        container.scrollLeft += scrollDelta.current * 0.1;
        scrollDelta.current *= 0.9;

        if (Math.abs(scrollDelta.current) < 0.5) {
          scrollDelta.current = 0;
          isScrolling.current = false;
        } else {
          requestAnimationFrame(smoothScroll);
        }
      } else {
        isScrolling.current = false;
      }
    };

    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const movieOverview = () => {
    window.location.href = "/movieoverview";
  };

  return (
    <div className="movies-carousel">
      <div className="title">
        <h2 className="fw-bold">Popular</h2>
      </div>

      <div className="movies">
        <div className="movies-container" ref={containerRef}>
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie1.jpeg")}
            alt="Movie 1"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie2.jpeg")}
            alt="Movie 2"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie3.jpeg")}
            alt="Movie 3"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie4.jpeg")}
            alt="Movie 4"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie5.jpeg")}
            alt="Movie 5"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie6.jpeg")}
            alt="Movie 6"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie7.jpeg")}
            alt="Movie 7"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie8.jpeg")}
            alt="Movie 8"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie4.jpeg")}
            alt="Movie 9"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie5.jpeg")}
            alt="Movie 10"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie6.jpeg")}
            alt="Movie 11"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie7.jpeg")}
            alt="Movie 12"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie8.jpeg")}
            alt="Movie 13"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie1.jpeg")}
            alt="Movie 14"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie2.jpeg")}
            alt="Movie 15"
          />
          <img
            onClick={movieOverview}
            src={require("../../assets/images/MovieRoom/movie3.jpeg")}
            alt="Movie 16"
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesSlider;
