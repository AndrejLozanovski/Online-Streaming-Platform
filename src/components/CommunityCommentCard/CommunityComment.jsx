import { Link } from "react-router-dom";
import "../CommunityCommentCard/CommunityComment.css";

const CommunityComment = () => {
  return (
    <div className="community-comment-card">
      <Link to={"/comment"} style={{ textDecoration: "none" }}>
        <div className="community-comment-content">
          <img
            src={require(`../../assets/images/Users/user1.png`)}
            className="mr-20"
            alt="Image of the user"
          />
          <p>Comment text</p>
          <div className="like-dislike">
            <div className="likes-dislikes">
              <img src={require(`../../assets/images/Icons/Community/like.png`)} alt="Like icon" />
              <span>500</span>
            </div>
            <div className="likes-dislikes">
              <img
                src={require(`../../assets/images/Icons/Community/dislike.png`)}
                alt="islike icon"
              />
              <span>500</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommunityComment;
