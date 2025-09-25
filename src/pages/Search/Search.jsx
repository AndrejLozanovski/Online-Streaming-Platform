import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Navigation from "../../components/Navigation/Navigation";
import MovieOverview from "../../components/MovieOverview/MovieOverview";
import { useMovies, useKidsContent, usePodcasts } from "../../hooks/useApiData";
import "../Search/Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSimilarResults, setShowSimilarResults] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedContentType, setSelectedContentType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: movies, isLoading: moviesLoading, error: moviesError } = useMovies();
  const { data: kids, isLoading: kidsLoading, error: kidsError } = useKidsContent();
  const { data: podcasts, isLoading: podcastsLoading, error: podcastsError } = usePodcasts();

  // Combine all data with type indicators
  const allContent = useMemo(() => {
    const allData = [];

    if (movies) {
      allData.push(...movies.map((item) => ({ ...item, contentType: "movie" })));
    }

    if (kids) {
      allData.push(...kids.map((item) => ({ ...item, contentType: "kids" })));
    }

    if (podcasts) {
      allData.push(...podcasts.map((item) => ({ ...item, contentType: "podcast" })));
    }
    
    return allData;
  }, [movies, kids, podcasts]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return allContent.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === "all" || item.contentType === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [allContent, searchTerm, activeFilter]);

  const similarResults = useMemo(() => {
    if (!searchTerm.trim() || searchResults.length === 0) return [];

    const searchGenres = new Set();
    searchResults.forEach((item) => {
      if (item.genre && Array.isArray(item.genre)) {
        item.genre.forEach((genre) => searchGenres.add(genre));
      }
    });

    if (searchGenres.size === 0) return [];

    const searchResultIds = new Set(searchResults.map((item) => `${item.id}-${item.contentType}`));

    return allContent
      .filter((item) => {
        const itemKey = `${item.id}-${item.contentType}`;
        if (searchResultIds.has(itemKey)) return false;

        if (!item.genre || !Array.isArray(item.genre)) return false;

        return item.genre.some((genre) => searchGenres.has(genre));
      })
      .slice(0, 12);
  }, [allContent, searchResults, searchTerm]);

  const handleItemClick = (itemId, contentType = "movies") => {
    setSelectedItemId(itemId);
    setSelectedContentType(contentType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
    setSelectedContentType(null);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      setShowSimilarResults(true);
    } else {
      setShowSimilarResults(false);
    }
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const navigateToContent = (item) => {
    let contentType = "movies";
    if (item.contentType === "kids") {
      contentType = "kids";
    } else if (item.contentType === "podcast") {
      contentType = "podcasts";
    }

    handleItemClick(item.id, contentType);
  };

  const renderOverviewModal = () => {
    if (!isModalOpen || !selectedItemId) return null;

    switch (selectedContentType) {
      case "movies":
        return (
          <MovieOverview
            movieId={selectedItemId}
            onClose={handleCloseModal}
          />
        );
      case "podcasts":
        return (
          <MovieOverview
            movieId={selectedItemId}
            onClose={handleCloseModal}
            contentType="podcasts"
          />
        );
      case "kids":
        return (
          <MovieOverview
            movieId={selectedItemId}
            onClose={handleCloseModal}
            contentType="kids"
          />
        );
      default:
        return (
          <MovieOverview
            movieId={selectedItemId}
            onClose={handleCloseModal}
          />
        );
    }
  };

  const isLoading = moviesLoading || kidsLoading || podcastsLoading;

  const hasError = moviesError || kidsError || podcastsError;

  if (hasError) {
    return (
      <div className="search-page">
        <Navigation />
        <div className="search-page-content">
          <div className="error-message">Error loading content. Please try again later.</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div className="search-page">
        <Navigation />
        <div className="search-page-content">
          <div className="search-bar-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for movies, kids shows, or podcasts..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="button">
                <img
                  src={require("../../assets/images/Icons/Homepage/Search Button.png")}
                  alt="Search"
                />
              </button>
            </div>

            <div className="search-filters">
              <button
                type="button"
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => handleFilterChange("all")}
              >
                All
              </button>
              <button
                type="button"
                className={activeFilter === "movie" ? "active" : ""}
                onClick={() => handleFilterChange("movie")}
              >
                Movies
              </button>
              <button
                type="button"
                className={activeFilter === "kids" ? "active" : ""}
                onClick={() => handleFilterChange("kids")}
              >
                Kids
              </button>
              <button
                type="button"
                className={activeFilter === "podcast" ? "active" : ""}
                onClick={() => handleFilterChange("podcast")}
              >
                Podcasts
              </button>
            </div>
          </div>

          {searchTerm.trim() ? (
            <div className="search-results-section">
              <h2>Search Results</h2>

              {isLoading ? (
                <div className="loading-message">Loading...</div>
              ) : searchResults.length > 0 ? (
                <div className="search-results-grid">
                  {searchResults.map((item) => (
                    <div
                      key={`${item.id}-${item.contentType}`}
                      className="search-result-item"
                      onClick={() => navigateToContent(item)}
                    >
                      <div className="search-result-image">
                        <img
                          src={item.image}
                          alt={item.title}
                          onError={(e) => {
                            e.target.src = "/api/placeholder/300/400";
                          }}
                        />
                      </div>
                      <div className="search-result-info">
                        <div className="search-result-title">{item.title}</div>
                        <div className="search-result-type">
                          {item.contentType === "kids"
                            ? "Kids"
                            : item.contentType.charAt(0).toUpperCase() + item.contentType.slice(1)}
                        </div>
                        <div className="search-result-year">{item.year}</div>
                        {item.genre && item.genre.length > 0 && (
                          <div className="search-result-genres">
                            {item.genre.slice(0, 2).join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">No results found for "{searchTerm}"</div>
              )}
            </div>
          ) : (
            <div className="initial-content-section">
              {isLoading ? (
                <div className="loading-message">Loading content...</div>
              ) : (
                <>
                  
                  <MoviesSlider 
                    contentType="movies" 
                    category="popular" 
                    onMovieClick={handleItemClick} 
                  />
                 
                </>
              )}
            </div>
          )}

          <div className="divider"></div>

          <div className={`similar-results-section ${showSimilarResults ? "visible" : "hidden"}`}>
            <h2>Similar results</h2>

            {isLoading ? (
              <div className="loading-message">Loading similar content...</div>
            ) : similarResults.length > 0 ? (
              <div className="similar-results-grid">
                {similarResults.map((item) => (
                  <div
                    key={`similar-${item.id}-${item.contentType}`}
                    className="movie-card"
                    onClick={() => navigateToContent(item)}
                  >
                    <div className="movie-card-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = "/api/placeholder/300/400";
                        }}
                      />
                      <div className="movie-card-overlay">
                        <div className="movie-card-info">
                          <h3>{item.title}</h3>
                          {item.year && <span className="movie-year">{item.year}</span>}
                          {item.rating && (
                            <div className="movie-rating">
                              <span>⭐ {item.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="movie-card-details">
                      <h4>{item.title}</h4>
                      {item.genre && item.genre.length > 0 && (
                        <span className="movie-genre">{item.genre.slice(0, 2).join(", ")}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : searchTerm.trim() ? (
              <div className="no-similar-results">No similar content found</div>
            ) : null}
          </div>

          {renderOverviewModal()}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
