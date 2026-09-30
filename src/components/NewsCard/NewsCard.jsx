import React, { useState } from "react";
import "./NewsCard.css";

function NewsCard({ card, isLoggedIn }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (isLoggedIn) {
      setIsSaved(!isSaved);
    }
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img
          src={card.urlToImage}
          alt={card.title || "News article preview"}
          className="news-card__image"
        />
        <button
          type="button"
          className={`news-card__bookmark ${isSaved ? "news-card__bookmark_active" : ""}`}
          onClick={handleBookmarkClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Bookmark article"
        />
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{card.publishedAt}</p>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__description">{card.description}</p>
        <p className="news-card__source">{card.source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
