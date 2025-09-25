import { useUserStore } from "../stores/user-store";
import { AuthorizedRoutes } from "./authorized-routes/AuthorizedRoutes";
import { NonAuthorizedRoutes } from "./non-authorized-routes/NonAuthorizedRoutes";

export const MainRouter = () => {
  const user = useUserStore((state) => state.user);

  if (user) {
    return <AuthorizedRoutes />;
  } else {
    return <NonAuthorizedRoutes />;
  }
};
