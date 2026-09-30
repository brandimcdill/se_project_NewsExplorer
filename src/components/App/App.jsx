import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";

import LoginModal from "../../components/LoginModal/LoginModal";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import About from "../About/About";
import Footer from "../Footer/Footer";

import { getNews } from "../../utils/NewsApi";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeModal, setActiveModal] = useState("");

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const handleSignInClick = () => setActiveModal("signin");
  const handleSignUpClick = () => setActiveModal("signup");
  const closeActiveModals = () => setActiveModal("");

  const handleSearchSubmit = (keyword) => {
    setIsLoading(true);
    setHasSearched(true);
    setHasError(false);
    setArticles([]);
    getNews(keyword)
      .then((data) => {
        const formattedArticles = data.articles.map((art, index) => ({
          id: index,
          title: art.title,
          publishedAt: new Date(art.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          description: art.description || art.content || "No description provided.",
          source: art.source.name,
          urlToImage: art.urlToImage || "https://unsplash.com",
        }));
        setArticles(formattedArticles);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  };

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
                <SearchForm onSearch={handleSearchSubmit} />

                {isLoading && <Preloader />}

                {!isLoading && hasError && (
                  <div className="search-error">
                    <p className="search-error__text">
                      Sorry, something went wrong during the request. Please try again.
                    </p>
                  </div>
                )}

                {!isLoading && !hasError && hasSearched && articles.length === 0 && (
                  <NothingFound />
                )}

                {articles.length > 0 && (
                  <NewsCardList articles={articles} isLoggedIn={isLoggedIn} />
                )}
                <About />
              </main>
            }
          />
          <Route path="/saved-news" element={<main className="app_main"></main>} />
        </Routes>
        <Footer />
        <LoginModal
          isOpen={activeModal === "signin"}
          onClose={closeActiveModals}
          onAltBtnClick={handleSignUpClick}
          handleLogin={handleLogin}
        />

        <RegisterModal
          isOpen={activeModal === "signup"}
          onClose={closeActiveModals}
          onAltBtnClick={handleSignInClick}
          handleRegistrationSuccess={handleRegistrationSuccess}
        />

        <SuccessModal
          isOpen={activeModal === "success"}
          onClose={closeActiveModals}
          onSignInClick={handleSignInClick}
        />
      </div>
    </div>
  );
}

export default App;
