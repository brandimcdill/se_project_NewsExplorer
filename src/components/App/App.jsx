import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";

import LoginModal from "../../components/LoginModal/LoginModal";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import SuccessModal from "../../components/SuccessModal/SuccessModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeModal, setActiveModal] = useState("");

  const navigate = useNavigate();

  const handleSignInClick = () => setActiveModal("signin");
  const handleSignUpClick = () => setActiveModal("signup");
  const closeActiveModals = () => setActiveModal("");

  const handleLogin = (email, password) => {
    setIsLoggedIn(true);
    setUserName(name || "User");
    closeActiveModals();
    navigate("/");
  };

  const handleRegistrationSuccess = (email, password, name) => {
    closeActiveModals();
    setActiveModal("success");
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("jwt");
    navigate("/");
  };

  useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.key === "Escape") closeActiveModals();
    };
    if (activeModal) {
      window.addEventListener("keydown", handleEscapeClose);
    }
    return () => window.removeEventListener("keydown", handleEscapeClose);
  }, [activeModal]);

  return (
    <div className="app">
      <div className="app__content">
        <Header
          isLoggedIn={isLoggedIn}
          userName={userName}
          onSignInClick={handleSignInClick}
          onSignOut={handleSignOut}
        />
        <Routes>
          <Route
            path="/"
            element={
              <main className="app_main">
                <SearchForm onSearch={(keyword) => console.log("Searching for:", keyword)} />
              </main>
            }
          />
          <Route path="/saved-news" element={<main className="app_main"></main>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
