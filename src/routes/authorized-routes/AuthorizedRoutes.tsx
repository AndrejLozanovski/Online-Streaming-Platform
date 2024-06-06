import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import MovieOverview from "../../components/MovieOverview/MovieOverview";
import UserProfile from "../../pages/UserProfile/UserProfile";
import ArtistProfile from "../../pages/ArtistProfile/ArtistProfile";
import Community from "../../pages/Community/Community";
import PostComment from "../../pages/Comment/PostComment";
import Search from "../../pages/Search/Search";
import ArtistOverview from "../../components/ArtistOverview/ArtistOverview";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/movies"} element={<Movies />} />
      <Route path={"/movieoverview"} element={<MovieOverview />} />
      <Route path={"/artistoverview"} element={<ArtistOverview />} />
      <Route path={"/community"} element={<Community />} />
      <Route path={"/comment"} element={<PostComment />} />
      <Route path={"/search"} element={<Search />} />
      <Route path={"/userprofile"} element={<UserProfile />} />
      <Route path={"/artistprofile"} element={<ArtistProfile />} />
      <Route path={"/videoplayer"} element={<VideoPlayer />} />
      <Route path={"*"} element={<Navigate to="/" />} />
    </Routes>
  );
};
