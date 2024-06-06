import CommunityComment from "../../components/CommunityCommentCard/CommunityComment";
import Navigation from "../../components/Navigation/Navigation";
import "../Community/Community.css";

const Community = () => {
  return (
    <main className="community-page">
      <Navigation />
      <section className="community-comments-section">
        <h1>Community</h1>
        <div className="community-search-discussion-section">
          <img
            src={require(`../../assets/images/Icons/Community/mi_filter.png`)}
            className="mr-20"
            alt="Filter Icon"
          />
          <input type="text" name="" id="" placeholder="Search..." />
          <button>Start a discussion</button>
        </div>
        <div className="community-comments">
          <div className="posts-rating">
            <p>Posts</p>
            <p>Rating</p>
          </div>
          <CommunityComment />
          <CommunityComment />
          <CommunityComment />
          <CommunityComment />
          <CommunityComment />
          <CommunityComment />
          <button>Show more</button>
        </div>
      </section>
      <section className="community-badge-section">
        <div className="badge">
          <p>
            <img
              src={require("../../assets/images/Icons/Community/Animated loader - ease-in.png")}
              className="mr-20"
              alt=""
            />
            Comments
          </p>
          <p>
            <img
              src={require("../../assets/images/Icons/Community/Animated loader - ease-out.png")}
              className="mr-20"
              alt=""
            />
            Discussion
          </p>
          <div className="latest-comment">
            <small>Latest comments:</small>
            <div className="comment-box">
              <div className="user">
                <img src={require("../../assets/images/Users/user6.png")} alt="user image" />
                <p>Sime:</p>
              </div>
              <span>Kolku dobra scena...</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Community;
