import "../CommentCard/Comment.css";

const Comment = () => {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <img
          src={require(`../../assets/images/Users/user1.png`)}
          alt="User avatar"
          className="comment-avatar"
        />
        <div className="comment-user-info">
          <h4 className="comment-username">MovieFan2024</h4>
        </div>
      </div>
      <div className="comment-body">
        <p className="comment-text">
          This movie was absolutely incredible! The cinematography and acting were top-notch.
          I was completely immersed in the story from beginning to end. Highly recommend!
        </p>
      </div>
    </div>
  );
};

export default Comment;
