import "./VideoPlayer.css";
import Video from "../../assets/test.mp4";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialComments = [
  {
    id: "124",
    userId: "11111",
    time: 10,
    text: " hehe",
    username: "Natasha"
  },
  {
    id: "1243",
    userId: "111131",
    time: 20,
    text: "hmmm interesting",
    username: "Alex"
  },
  {
    id: "1244",
    userId: "111131",
    time: 19,
    text: "WOWWW",
    username: "Maria"
  },
];

export const VideoPlayer = () => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setMuted((prevState) => !prevState);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(videoRef?.current?.currentTime);
    };

    const updateDuration = () => {
      setDuration(videoRef?.current?.duration);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("timeupdate", updateTime);
    videoElement.addEventListener("loadedmetadata", updateDuration);

    return () => {
      videoElement.removeEventListener("timeupdate", updateTime);
      videoElement.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    let timeout;

    const handleMouseMove = () => {
      setShowControls(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const progressBarWidth = duration ? `${(currentTime / duration) * 100}%` : "0%";

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        userId: "currentUser",
        time: Math.floor(currentTime),
        text: newComment.trim(),
        username: "You"
      };
      setComments(prevComments => [...prevComments, comment]);
      setNewComment("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  };

  return (
    <div>
      <div className="video-wrapper">
        <video ref={videoRef} width={"100%"}>
          <source src={Video} />
        </video>

        <div className={`back-icon-info-icon ${showControls ? "" : "hidden"}`}>
          <img
            src={require("../../assets/images/Icons/Player/Back Button.png")}
            alt="Back icon"
            onClick={() => navigate(-1)}
          />
          <img
            src={require("../../assets/images/Icons/Player/ico-info.png")}
            alt="Information icon"
          />
        </div>

        <div className={showControls ? "controls" : "controls hidden"}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: progressBarWidth }}></div>
          </div>
          <p>
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
          <div className="backward-play-forward">
            <img
              src={require("../../assets/images/Icons/Player/player left.png")}
              alt="Backwards icon"
            />
            <img
              src={require("../../assets/images/Icons/Player/gravity-ui_play-fill.png")}
              onClick={() => {
                if (videoIsPlaying) {
                  videoRef.current.pause();
                } else {
                  videoRef.current.play();
                }
                setVideoIsPlaying((prevState) => !prevState);
              }}
              alt="Play/Pause icon"
            />
            <img
              src={require("../../assets/images/Icons/Player/player right.png")}
              alt="Forwards icon"
            />
          </div>
          <div className="mute-comments-subs">
            <img
              src={require("../../assets/images/Icons/Player/mdi_movie-open-settings-outline.png")}
              alt="Settings icon"
            />
            <img
              src={require("../../assets/images/Icons/Player/solar_subtitles-bold.png")}
              alt="Subtitles icon"
            />
            <img
              src={require(`../../assets/images/Icons/Player/akar-icons_sound-${
                muted ? "off" : "on"
              } (1).png`)}
              onClick={handleMute}
              alt="Mute icon"
            />
            <img
              src={require(`../../assets/images/Icons/Player/${
                showComments ? "wpf_chat-clicked" : "wpf_chat"
              }.png`)}
              onClick={() => setShowComments(!showComments)}
              alt="Comments icon"
            />
          </div>
        </div>

        <div className="comments">
          {showComments &&
            !videoIsPlaying &&
            comments.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className={`comment-box ${
                    videoRef?.current?.currentTime <= comment.time + 4 &&
                    videoRef?.current?.currentTime >= comment.time - 4
                      ? "show"
                      : "hide"
                  }`}
                >
                  <div className="user">
                    <img src={require("../../assets/images/Users/user6.png")} alt="user image" />
                    <p>{comment.username}:</p>
                  </div>
                  {comment.text}
                </div>
              );
            })}
          {showComments && !videoIsPlaying && (
            <div className="add-comment">
              <input
                type="text"
                placeholder="Leave a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <img
                src={require("../../assets/images/Icons/Homepage/typcn_plus.png")}
                alt="Add comment"
                onClick={handleAddComment}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
