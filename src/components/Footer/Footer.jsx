import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© {currentYear} Supersite, Powered by News APL</p>
        <nav className="footer__navigation">
          <div className="footer__links">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Tripleten
            </a>
          </div>
          <div className="footer__socials">
            <a
              href="https://github.com/brandimcdill"
              target="_blank"
              rel="noreferrer"
              className="footer__icon-link footer__icon-link_type_github"
              aria-label="GitHub Profile Link"
            />
            <a
              href="https://linkedin.com/in/brandimcdill"
              target="_blank"
              rel="noreferrer"
              className="footer__icon-link footer__icon-link_type_linkedin"
              aria-label="LinkedIn Profile Link"
            />
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
