import { useUserStore } from "../../stores/user-store";
import { useState, useRef, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import "./MoviesPage.css";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Footer from "../../components/Footer/Footer";
import MovieOverview from "../../components/MovieOverview/MovieOverview";

const Movies = () => {
  const allMovieGenres = [
    { type: "category", name: "popular" },
    { type: "genre", name: "Action" },
    { type: "genre", name: "Comedy" },
    { type: "genre", name: "Horror" },
    { type: "genre", name: "Drama" },
    { type: "genre", name: "History" },
  ];

  const [visibleSlidersCount, setVisibleSlidersCount] = useState(4);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownOptions = [
    "All",
    "Popular",
    ...allMovieGenres.filter((item) => item.type === "genre").map((item) => item.name),
  ];

  const filteredGenres =
    selectedGenre === null
      ? allMovieGenres
      : selectedGenre === "Popular"
      ? allMovieGenres.filter((item) => item.type === "category" && item.name === "popular")
      : allMovieGenres.filter((item) => item.type === "genre" && item.name === selectedGenre);

  const hasMoreSliders = visibleSlidersCount < filteredGenres.length;

  const loadMoreSliders = () => {
    setVisibleSlidersCount((prev) => Math.min(prev + 2, filteredGenres.length));
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGenreSelect = (genre: string): void => {
    setSelectedGenre(genre === "All" ? null : genre);
    setIsDropdownOpen(false);
    setVisibleSlidersCount(4);
  };

  const handleMovieClick = (movieId: any) => {
    setSelectedMovieId(movieId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <main className="movies-room">
        <Navigation />
        <MoviesBanner />
        <div className="title-and-categories">
          <h1>Movies Room</h1>
        </div>
        <div className="categories-dropdown" onClick={toggleDropdown} ref={dropdownRef}>
          Categories {selectedGenre ? `: ${selectedGenre}` : ""}
          <img
            src={require(`../../assets/images/Icons/dropdown.png`)}
            alt="arrow down icon"
            style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
          {isDropdownOpen && (
            <div className="categories-menu">
              {dropdownOptions.map((option, index) => (
                <div
                  key={index}
                  className="category-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGenreSelect(option);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <section className="movies-room-movies-genres-section">
          {filteredGenres.slice(0, visibleSlidersCount).map((item, index) => (
            <MoviesSlider
              key={index}
              contentType="movies"
              onMovieClick={handleMovieClick}
              {...(item.type === "category" ? { category: item.name } : { genre: item.name })}
            />
          ))}

          {hasMoreSliders && (
            <button className="show-more" onClick={loadMoreSliders}>
              Show more
            </button>
          )}

          {isModalOpen && selectedMovieId && (
            <MovieOverview
              movieId={selectedMovieId}
              onClose={handleCloseModal}
            />
          )}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Movies;
