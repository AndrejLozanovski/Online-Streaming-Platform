import CommentSection from "../../components/CommentSection/CommentSection";
import CommunityPost from "../../components/CommunityPost/CommunityPost";
import Navigation from "../../components/Navigation/Navigation";
import "../Comment/PostComment.css";

const PostComment = () => {
  return (
    <main className="post-community-page">
      <Navigation />
      <section className="post-community-comments-section">
        <h1>Community/Post</h1>

        <div className="post-community-comments">
          <div className="post-title">
            <p>Main Comment</p>
          </div>
          <CommunityPost />
          <div className="post-title">
            <p>Comment Section</p>
          </div>
          <CommentSection />
        </div>
      </section>
      <section className="post-badge-section">
        <div className="post-badge">
          <div className="latest-comment">
            <small>Friends in this comment section:</small>
            <div className="comment-box">
              <div className="user">
                <img src={require("../../assets/images/Users/user6.png")} alt="user image" />
                <p>Sime</p>
              </div>
              <span>Kolku dobra scena...</span>
            </div>
            <div className="comment-box">
              <div className="user">
                <img src={require("../../assets/images/Users/user6.png")} alt="user image" />
                <p>Stefan</p>
              </div>
              <span>Ne se sekjavam...</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostComment;
