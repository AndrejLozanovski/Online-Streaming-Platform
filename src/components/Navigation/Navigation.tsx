import { useEffect, useState } from "react";
import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: any) => {
    if (
      isDropdownOpen &&
      !event.target.closest(".menu-dropdown") &&
      !event.target.closest(".rotate")
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav>
      <div className="nav-wrapper">
        <li className="nav-item mt-30">
          <Link to={"/userprofile"} className="move-up">
            <img src={require(`../../assets/images/Icons/Homepage/User.png`)} alt="profile icon" />
            <span>Profile</span>
          </Link>
        </li>
        <ul className="nav-list">
          <li className="nav-item center">
            <Link to={"/"} className="move-up mb-40">
              <img
                src={require(`../../assets/images/Icons/Homepage/Home.png`)}
                alt="homepage icon"
              />
              <span>Home</span>
            </Link>

            <div className="rotate mb-40" onClick={handleOpenDropdown}>
              <img src={require(`../../assets/images/Icons/Homepage/Menu.png`)} alt="menu icon" />
              <span>Rooms</span>
            </div>

            {isDropdownOpen && (
              <div className="menu-dropdown" id="menu-dropdown">
                <Link to={"/movies"} className="move-up">
                  <img
                    src={require(`../../assets/images/Icons/Homepage/Movies.png`)}
                    alt="movies room icon"
                  />
                  <span>Movie</span>
                </Link>

                <Link to={"#"} className="move-up">
                  <img
                    src={require(`../../assets/images/Icons/Homepage/Series.png`)}
                    alt="series room icon"
                  />
                  <span>Series</span>
                </Link>

                <Link to={"#"} className="move-up">
                  <img
                    src={require(`../../assets/images/Icons/Homepage/Podcasts.png`)}
                    alt="podcasts room icon"
                  />
                  <span>Podcast</span>
                </Link>

                <Link to={"#"} className="move-up">
                  <img
                    src={require(`../../assets/images/Icons/Homepage/Kids.png`)}
                    alt="kids room icon"
                  />
                  <span>Kids</span>
                </Link>
              </div>
            )}

            <Link to={"/community"} className="move-up mb-40">
              <img
                src={require(`../../assets/images/Icons/Homepage/wpf_chat.png`)}
                alt="chat icon"
              />
              <span>Chat</span>
            </Link>
            <Link to={"#"} className="move-up mb-40">
              <img
                src={require(`../../assets/images/Icons/Homepage/bx_camera-movie.png`)}
                alt="movie hall icon"
              />
              <span>Movie Hall</span>
            </Link>
          </li>
        </ul>
        <li className="nav-item mb-30">
          <Link to={"#"} className="move-up ">
            <img
              src={require(`../../assets/images/Icons/Homepage/Settings.png`)}
              alt="setting icon"
            />
            <span>Setting</span>
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navigation;
