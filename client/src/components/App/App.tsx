import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";

import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import "./App.css";
import ProtectedRoute from "../../Auth/ProtectedRoute";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
