import { useUserStore } from "../stores/user-store";
import { AuthorizedRoutes } from "./authorized-routes/AuthorizedRoutes";
import { NonAuthorizedRoutes } from "./non-authorized-routes/NonAuthorizedRoutes";

const user = {
  email: "example@gmail.com",
  bio: "",
  user_type: "USER", //artist
  fullname: "Jhon Doe",
  username: "jhonDoe",
  interests: [],
  tutorial: false,
  subscription_type: "FREE",
  cultures: [],
  favoriteCategories: [],
  favoriteMovies: ["123", "244", "333"],
};

export const MainRouter = () => {
  // const { user, setuser } = useUserStore((state) => ({
  //   user: state.user,
  //   setUser: state.setUser,
  // }));

  const user = useUserStore((state) => state.user);
  // const setUser = useUserStore((state) => state.setUser);

  if (user) {
    return <AuthorizedRoutes />;
  } else {
    return <NonAuthorizedRoutes />;
  }
};
