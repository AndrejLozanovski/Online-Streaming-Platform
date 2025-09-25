import { useState } from "react";
import { Link } from "react-router-dom";
import CommunityComment from "../../components/CommunityCommentCard/CommunityComment";
import Navigation from "../../components/Navigation/Navigation";
import "../Community/Community.css";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const commentsCount = 1247;
  const discussionsCount = 89;

  return (
    <main className="community-page">
      <Navigation />
      <section className="community-comments-section">
        <div className="community-header">
          <h1>Community</h1>
          <p className="community-subtitle">Join the conversation and share your thoughts</p>
        </div>

        <div className="community-search-discussion-section">
          <div className="search-container">
            <img
              src={require(`../../assets/images/Icons/Community/mi_filter.png`)}
              className="filter-icon"
              alt="Filter Icon"
            />
            <input
              type="text"
              placeholder="Search discussions or comments..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Link to="/start-discussion" className="start-discussion-btn">
            <button>Start a discussion</button>
          </Link>
        </div>

        <div className="community-stats">
          <div className="stat-item">
            <span className="stat-number">{commentsCount.toLocaleString()}</span>
            <span className="stat-label">Comments</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{discussionsCount}</span>
            <span className="stat-label">Discussions</span>
          </div>
        </div>

        <div className="community-comments">
          <div className="comments-header">
            <div className="posts-rating">
              <p>Recent Posts</p>
              <p>Rating</p>
            </div>
          </div>

          <div className="comments-grid">
            <CommunityComment />
            <CommunityComment />
            <CommunityComment />
            {!showAllComments && (
              <>
                <CommunityComment />
                <CommunityComment />
                <CommunityComment />
              </>
            )}
            {showAllComments && (
              <>
                <CommunityComment />
                <CommunityComment />
                <CommunityComment />
                <CommunityComment />
                <CommunityComment />
                <CommunityComment />
              </>
            )}
          </div>

          {!showAllComments && (
            <div className="show-more-container">
              <button
                className="show-more-btn"
                onClick={() => setShowAllComments(true)}
              >
                Show more comments
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="community-badge-section">
        <div className="badge">
          <div className="badge-header">
            <h3>Community Stats</h3>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <img
                  src={require("../../assets/images/Icons/Community/Animated loader - ease-in.png")}
                  alt="Comments icon"
                />
              </div>
              <div className="stat-info">
                <span className="stat-value">{commentsCount.toLocaleString()}</span>
                <span className="stat-name">Comments</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img
                  src={require("../../assets/images/Icons/Community/Animated loader - ease-out.png")}
                  alt="Discussions icon"
                />
              </div>
              <div className="stat-info">
                <span className="stat-value">{discussionsCount}</span>
                <span className="stat-name">Discussions</span>
              </div>
            </div>
          </div>

          <div className="latest-comment">
            <small>Latest comments:</small>
            <div className="comment-box">
              <div className="user">
                <img src={require("../../assets/images/Users/user6.png")} alt="user image" />
                <p>Sime:</p>
              </div>
              <span>Kolku dobra scena bese vo filmo!</span>
            </div>
            <div className="comment-box">
              <div className="user">
                <img src={require("../../assets/images/Users/user2.png")} alt="user image" />
                <p>Maria:</p>
              </div>
              <span>Neverovatno! Sjajna režija...</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Community;
