import { useAuth0 } from "@auth0/auth0-react";
import "./Signup.css";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect({ screen_hint: "Signup" })}
    >
      Signup
    </button>
  );
};

export default Signup;
