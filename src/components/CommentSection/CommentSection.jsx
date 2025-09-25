import "../CommentSection/CommentSection.css";

const CommentSection = () => {
  return (
    <>
      <div className="comment-section">
        <div className="comment-section-content">
          <img
            src={require(`../../assets/images/Users/user1.png`)}
            className="mr-20"
            alt="User avatar"
          />
          <div className="name-comment">
            <span>Sime123</span>
            <p>Comment text</p>
          </div>

          <div className="like-dislike">
            <div className="likes-dislikes">
              <img src={require(`../../assets/images/Icons/Community/chat.png`)} alt="Like icon" />
            </div>
            <div className="likes-dislikes">
              <img
                src={require(`../../assets/images/Icons/Community/blacklike.png`)}
                alt="Dislike icon"
              />
              <span>500</span>
            </div>
          </div>
        </div>
        <div className="comment-reply">
          <img
            src={require(`../../assets/images/Icons/Community/reply.png`)}
            className="mr-20"
            alt=""
          />
          <img
            src={require(`../../assets/images/Users/user1.png`)}
            className="mr-20"
            alt="User avatar"
          />

          <div className="name-comment">
            <span>Sime123</span>
            <p>Comment text</p>
          </div>
          <div className="like-dislike">
            <div className="likes-dislikes">
              <img src={require(`../../assets/images/Icons/Community/chat.png`)} alt="Like icon" />
            </div>
            <div className="likes-dislikes">
              <img
                src={require(`../../assets/images/Icons/Community/blacklike.png`)}
                alt="Dislike icon"
              />
              <span>500</span>
            </div>
          </div>
        </div>
        <div className="comment-section-content">
          <img
            src={require(`../../assets/images/Users/user1.png`)}
            className="mr-20"
            alt="User avatar"
          />
          <div className="name-comment">
            <span>Sime123</span>
            <p>Comment text</p>
          </div>

          <div className="like-dislike">
            <div className="likes-dislikes">
              <img src={require(`../../assets/images/Icons/Community/chat.png`)} alt="Like icon" />
            </div>
            <div className="likes-dislikes">
              <img
                src={require(`../../assets/images/Icons/Community/blacklike.png`)}
                alt="Dislike icon"
              />
              <span>500</span>
            </div>
          </div>
        </div>
        <div className="comment-section-content">
          <img
            src={require(`../../assets/images/Users/user1.png`)}
            className="mr-20"
            alt="User avatar"
          />
          <div className="name-comment">
            <span>Sime123</span>
            <p>Comment text</p>
          </div>

          <div className="like-dislike">
            <div className="likes-dislikes">
              <img src={require(`../../assets/images/Icons/Community/chat.png`)} alt="Like icon" />
            </div>
            <div className="likes-dislikes">
              <img
                src={require(`../../assets/images/Icons/Community/blacklike.png`)}
                alt="Dislike icon"
              />
              <span>500</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSection;
