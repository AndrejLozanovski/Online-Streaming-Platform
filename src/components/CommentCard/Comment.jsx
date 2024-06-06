import "../CommentCard/Comment.css";

const Comment = () => {
  return (
    <div className="comment-card">
      <div className="comment-content">
        <img src={require(`../../assets/images/Users/user1.png`)} alt="Image of user" />
        <p>Comment text</p>
      </div>
    </div>
  );
};

export default Comment;
