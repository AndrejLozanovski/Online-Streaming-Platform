import "../CommunityPost/CommunityPost.css";

const CommunityPost = () => {
  return (
    <div className="community-post-comment">
      <div className="community-post-comment-card">
        <div className="community-post-comment-content">
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
        <div className="community-post-comment-text">
          Lorem ipsum dolor sit amet consectetur. In volutpat orci non justo. Maecenas adipiscing a
          elementum vel mauris amet aliquet. Tristique donec ac nisl lacus et erat et cursus ut.
          Tempus quis sit eleifend consectetur. Risus sagittis massa fringilla massa est nulla.
          Phasellus egestas phasellus amet commodo vel amet. Sagittis tortor elit eget lectus.
          Mattis sit adipiscing commodo in enim. Lorem adipiscing pharetra vestibulum arcu risus.
          Vitae ac in in morbi aliquam ac a vitae. Velit cum sem in pharetra diam ullamcorper sit.
          Magna et sit amet commodo consectetur a. Varius in varius consectetur bibendum cras cras
          sed. Diam sed in quis nec felis nibh tellus. A scelerisque sapien nibh dictum nisl amet
          vulputate dictum.
        </div>
      </div>

      <div className="post-leave-comment">
        <input type="text" placeholder="Leave a comment..." />
        <button>Post comment</button>
      </div>
    </div>
  );
};

export default CommunityPost;
