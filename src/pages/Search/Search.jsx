import Footer from "../../components/Footer/Footer";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import Navigation from "../../components/Navigation/Navigation";
import "../Search/Search.css";

const Search = () => {
  return (
    <>
      <div className="search-page">
        <Navigation />
        <div className="search-page-content">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <img src={require("../../assets/images/Icons/Homepage/Search Button.png")} alt="" />
          </div>

          <MoviesSlider />
          <div className="divider"></div>

          <h2>Similar results</h2>

          <div className="similar-results">
            <img src={require("../../assets/images/MovieRoom/movie1.jpeg")} alt="Movie 1" />
            <img src={require("../../assets/images/MovieRoom/movie2.jpeg")} alt="Movie 2" />
            <img src={require("../../assets/images/MovieRoom/movie3.jpeg")} alt="Movie 3" />
            <img src={require("../../assets/images/MovieRoom/movie4.jpeg")} alt="Movie 4" />
            <img src={require("../../assets/images/MovieRoom/movie5.jpeg")} alt="Movie 5" />
            <img src={require("../../assets/images/MovieRoom/movie6.jpeg")} alt="Movie 6" />
            <img src={require("../../assets/images/MovieRoom/movie7.jpeg")} alt="Movie 7" />
            <img src={require("../../assets/images/MovieRoom/movie8.jpeg")} alt="Movie 8" />
            <img src={require("../../assets/images/MovieRoom/movie4.jpeg")} alt="Movie 9" />
            <img src={require("../../assets/images/MovieRoom/movie5.jpeg")} alt="Movie 10" />
            <img src={require("../../assets/images/MovieRoom/movie6.jpeg")} alt="Movie 11" />
            <img src={require("../../assets/images/MovieRoom/movie7.jpeg")} alt="Movie 12" />
            <img src={require("../../assets/images/MovieRoom/movie8.jpeg")} alt="Movie 13" />
            <img src={require("../../assets/images/MovieRoom/movie1.jpeg")} alt="Movie 14" />
            <img src={require("../../assets/images/MovieRoom/movie2.jpeg")} alt="Movie 15" />
            <img src={require("../../assets/images/MovieRoom/movie8.jpeg")} alt="Movie 13" />
            <img src={require("../../assets/images/MovieRoom/movie1.jpeg")} alt="Movie 14" />
            <img src={require("../../assets/images/MovieRoom/movie2.jpeg")} alt="Movie 15" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
