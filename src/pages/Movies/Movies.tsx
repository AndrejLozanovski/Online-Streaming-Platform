import { useUserStore } from "../../stores/user-store";
import Navigation from "../../components/Navigation/Navigation";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import "../Movies/MoviesPage.css";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Footer from "../../components/Footer/Footer";

const Movies = () => {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <main className="movies-room">
        <Navigation />
        <MoviesBanner />
        <div className="title-and-categories">
          <h1>Movies Room</h1>
        </div>
        <div className="categories-dropdown">
          Categories
          <img src={require(`../../assets/images/Icons/dropdown.png`)} alt="arrow down icon" />
        </div>
        <section className="movies-room-movies-genres-section">
          <MoviesSlider />
          <MoviesSlider />
          <MoviesSlider />
          <MoviesSlider />
          <MoviesSlider />
          <MoviesSlider />
          <button className="show-more">Show more</button>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Movies;
