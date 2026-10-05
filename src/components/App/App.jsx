import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

import LoginModal from "../../components/LoginModal/LoginModal";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

import { getNews } from "../../utils/NewsApi";
import SavedArticlesPage from "../SavedArticlesPage/SavedArticlesPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeModal, setActiveModal] = useState("");

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const navigate = useNavigate();

  const handleSignInClick = () => setActiveModal("signin");
  const handleSignUpClick = () => setActiveModal("signup");
  const closeActiveModals = () => setActiveModal("");

  const handleSavedArticle = (card, keyword) => {
    const articleWithKeyword = { ...card, keyword: keyword || "News" };
    setSavedArticles([articleWithKeyword, ...savedArticles]);
  };

  const handleDeleteArticle = (cardId) => {
    setSavedArticles(savedArticles.filter((art) => art.id !== cardId));
  };

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
          url: art.url,
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

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name || "User");
    closeActiveModals();
    navigate("/");
  };

  const handleRegistrationSuccess = () => {
    closeActiveModals();
    setActiveModal("success");
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("jwt");
    setArticles([]);
    setHasSearched(false);
    setHasError(false);
    navigate("/");
  };

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
              <Main
                onSearch={handleSearchSubmit}
                isLoading={isLoading}
                hasError={hasError}
                hasSearched={hasSearched}
                articles={articles}
                isLoggedIn={isLoggedIn}
                onSaveClick={handleSavedArticle}
                onDeleteClick={handleDeleteArticle}
                savedArticles={savedArticles}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedArticlesPage
                userName={userName}
                savedArticles={savedArticles}
                isLoggedIn={isLoggedIn}
                handleDeleteArticle={handleDeleteArticle}
              />
            }
          />
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
