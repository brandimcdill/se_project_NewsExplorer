import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ isLoggedIn, userName, onSignInClick, onSignOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNewsPage ? "header_theme_light" : "header_theme_dark"}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          NewsExplorer
        </Link>

        <nav className="header__nav">
          <Link
            to="/"
            className={`header__link ${isSavedNewsPage ? "header__link_theme_light" : "header__link_theme_dark"} ${location.pathname === "/" ? "header__link_active" : ""}`}
          >
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/saved-news"
                className={`header__link ${isSavedNewsPage ? "header__link_theme_light" : "header__link_theme_dark"} ${location.pathname === "/saved-news" ? "header__link_active" : ""}`}
              >
                Saved Articles
              </Link>
              <button
                type="button"
                onClick={onSignOut}
                className={`header__logout-btn ${isSavedNewsPage ? "header__logout-btn_theme_light" : "header__logout-btn_theme_dark"}`}
              >
                {userName}
                <span
                  className={`header__logout-icon ${isSavedNewsPage ? "header__logout-icon_theme_light" : "header__logout-icon_theme_dark"}`}
                />
              </button>
            </>
          ) : (
            <button type="button" onClick={onSignInClick} className="header__signin-btn">
              Sign in
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
