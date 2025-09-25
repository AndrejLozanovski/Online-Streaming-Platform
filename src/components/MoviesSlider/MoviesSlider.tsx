import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useApiData } from "../../hooks/useApiData";
import "../MoviesSlider/MoviesSlider.css";
import { CategoryTitles, MoviesSliderProps } from "../../interfaces/api-interface";

export const categoryTitles: CategoryTitles = {
  popular: "Popular",
  newRelease: "New Release",
  recommendation: "Our Recommendation",
  podcasts: "Podcasts",
  kids: "Kids",
  Action: "Action",
  Drama: "Drama",
  Thriller: "Thrillers",
  Comedy: "Comedy",
  War: "War Movies",
  Documentary: "Documentaries",
  Sport: "Sports",
  History: "History",
  Horror: "Horror",
  Mystery: "Mystery",
  Adventure: "Adventure",
  Heist: "Heist",
};

const MoviesSlider = ({
  contentType = "movies",
  category = "popular",
  genre = null,
  customTitle = null,
  customData,
  onMovieClick,
}: MoviesSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const {
    data: content,
    isLoading,
    error,
  } = useApiData(contentType, {
    category: contentType === "movies" && !genre ? category : undefined,
    genre: contentType === "movies" && genre ? genre : undefined,
  });

  const handleItemClick = (item: any) => {
    if (onMovieClick) {
      onMovieClick(item.id, contentType);
      return;
    }

    if (contentType === "movies") {
      navigate(`/movieoverview/${item.id}`);
    } else if (contentType === "kids") {
      navigate(`/kidscontent/${item.id}`);
    } else if (contentType === "podcasts") {
      navigate(`/podcast/${item.id}`);
    } else {
      navigate(`/${contentType}/${item.id}`);
    }
  };

  const getTitle = () => {
    if (customTitle) return customTitle;

    if (contentType === "movies") {
      if (genre) {
        return genre in categoryTitles ? categoryTitles[genre] : `${genre} Movies`;
      }
      return category in categoryTitles ? categoryTitles[category] : "Movies";
    } else if (contentType === "kids") {
      return "Kids Content";
    } else if (contentType === "podcasts") {
      return "Podcasts";
    } else {
      return contentType.charAt(0).toUpperCase() + contentType.slice(1);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = 240;
      const currentScroll = containerRef.current.scrollLeft;
      const targetScroll = Math.max(0, currentScroll - cardWidth);

      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = 240;
      const currentScroll = containerRef.current.scrollLeft;
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      const targetScroll = Math.min(maxScroll, currentScroll + cardWidth);

      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      scrollLeft();
    } else if (event.key === 'ArrowRight') {
      scrollRight();
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = 240;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const dataToUse = customData || content;
    if (dataToUse && dataToUse.length > 0) {
      setTotalItems(dataToUse.length);
    }
  }, [content, customData]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('keydown', handleKeyDown);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);





  return (
    <div className="movies-carousel">
      <div className="title">
        <h2 className="fw-bold">{getTitle()}</h2>
      </div>
      <div className="movies-wrapper">
        <button className="scroll-btn scroll-left" onClick={scrollLeft}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div className="movies">
          {customData ? (
            <div className="movies-container" ref={containerRef}>
              {customData.length > 0 ? (
                customData.map((item: any) => (
                  <div
                    key={item.id}
                    className="movie-card"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="movie-card-image">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="movie-card-details">
                      <h4>{item.title}</h4>
                      {item.genre && <span className="movie-genre">{item.genre}</span>}
                    </div>
                  </div>
                ))
              ) : (
                <p>No content available</p>
              )}
            </div>
          ) : isLoading ? (
            <div className="movies-container" ref={containerRef}>
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="movie-card skeleton">
                  <div className="movie-card-image">
                    <div className="skeleton-image"></div>
                    <div className="movie-card-overlay">
                      <div className="movie-card-info">
                        <div className="skeleton-title"></div>
                      </div>

                    </div>
                  </div>
                  <div className="movie-card-details">
                    <div className="skeleton-title-small"></div>
                    <div className="skeleton-genre"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="error">Error loading content: {error.message}</div>
          ) : (
            <div className="movies-container" ref={containerRef}>
              {content && content.length > 0 ? (
                content.map((item: any) => (
                  <div
                    key={item.id}
                    className="movie-card"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="movie-card-image">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="movie-card-details">
                      <h4>{item.title}</h4>
                      {item.genre && <span className="movie-genre">{item.genre}</span>}
                    </div>
                  </div>
                ))
              ) : (
                <p>No content available in this category</p>
              )}
            </div>
          )}
        </div>

        <button className="scroll-btn scroll-right" onClick={scrollRight}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MoviesSlider;
