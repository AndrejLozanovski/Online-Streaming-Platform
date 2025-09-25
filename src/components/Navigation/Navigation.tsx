import { useEffect, useState, useCallback } from "react";
import "../Navigation/Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user-store";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  const handleOpenDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = useCallback((event: any) => {
    if (
      isDropdownOpen &&
      !event.target.closest(".menu-dropdown") &&
      !event.target.closest(".rotate")
    ) {
      setIsDropdownOpen(false);
    }
  }, [isDropdownOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, handleClickOutside]);

  return (
    <nav>
      <div className="nav-wrapper">
        <li className="nav-item mt-30">
          <Link to={"/userprofile"} className="move-up">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #fff'
                }}
              />
            ) : (
              <img src={require(`../../assets/images/Icons/Homepage/User.png`)} alt="profile icon" />
            )}
            <span>{user?.username || 'Profile'}</span>
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
        <li className="nav-item mb-30">
          <button
            onClick={handleLogout}
            className="logout-btn"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15px',
              padding: '6px 8px',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              minWidth: '60px'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'rgba(255, 255, 255, 0.1)';
              target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'transparent';
              target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            Logout
          </button>
        </li>
      </div>
    </nav>
  );
};

export default Navigation;
