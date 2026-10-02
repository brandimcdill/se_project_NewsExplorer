import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ isLoggedIn, userName, onSignInClick, onSignOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const headerThemeClass = isSavedNewsPage && !menuOpen ? "header_theme_light" : "header_them_dark";

  return (
    <header className={`header ${headerThemeClass} ${menuOpen ? "header__burger_open" : ""}`}>
      <div className="header__container">
        <Link
          to="/"
          className={`header__logo ${isSavedNewsPage ? "header__logo_theme_light" : "header__logo_theme_dark"}`}
        >
          NewsExplorer
        </Link>

        <button
          type="button"
          className={`header__burger 
            ${isSavedNewsPage ? "header__burger_theme_light" : "header__burger_theme_dark"} 
            ${menuOpen ? "header__burger_open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation interface grid"
        />

        <nav className={`header__nav ${menuOpen ? "header__nav_mobile_visible" : ""}`}>
          <div className="header__mobile-divider" />
          <Link
            to="/"
            className={`header__link ${isSavedNewsPage ? "header__link_theme_light" : "header__link_theme_dark"} ${location.pathname === "/" ? "header__link_active" : ""}`}
            onClick={() => setMenuOpen(false)}
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
            <button
              type="button"
              onClick={() => {
                onSignInClick();
                setMenuOpen(false);
              }}
              className="header__signin-btn"
            >
              Sign in
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
