import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Login /> : <Logout />;
};

export default AuthenticationButton;
