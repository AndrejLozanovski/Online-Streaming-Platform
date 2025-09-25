import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Homepage from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import UserProfile from "../../pages/UserProfile/UserProfile";
import ArtistProfile from "../../pages/ArtistProfile/ArtistProfile";
import Community from "../../pages/Community/Community";
import PostComment from "../../pages/Comment/PostComment";
import Search from "../../pages/Search/Search";
import ArtistOverview from "../../components/ArtistOverview/ArtistOverview";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";

export const AuthorizedRoutes = () => {
  const [isArtistModalOpen, setIsArtistModalOpen] = useState(false);

  const handleArtistClick = () => {
    setIsArtistModalOpen(true);
  };

  const handleCloseArtistModal = () => {
    setIsArtistModalOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/home"} element={<Homepage />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/community"} element={<Community />} />
        <Route path={"/comment"} element={<PostComment />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/userprofile"} element={<UserProfile />} />
        <Route path={"/artistprofile"} element={<ArtistProfile />} />
        <Route path={"/videoplayer"} element={<VideoPlayer />} />
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>

      {isArtistModalOpen && (
        <ArtistOverview onClose={handleCloseArtistModal} />
      )}
    </>
  );
};
