import { useState } from "react";
import "./NewsCard.css";

function NewsCard({ card, isLoggedIn, isSavedNewsRoute }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleActionClick = (e) => {
    e.stopPropagation();
    if (isSavedNewsRoute) {
      console.log("Delete card triggered:", card.id);
    } else if (isLoggedIn) {
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

        {isSavedNewsRoute && <div className="news-card__keyword-tag">{card.keyword || "News"}</div>}
        <button
          type="button"
          className={
            isSavedNewsRoute
              ? "news-card__trash"
              : `news-card__bookmark ${isSaved ? "news-card__bookmark_active" : ""}`
          }
          onClick={handleActionClick}
          aria-label={isSavedNewsRoute ? "Delete article" : "Bookmard article"}
        />

        {isSavedNewsRoute ? (
          <div className="news-card__tooltip news-card__tooltip_type_trash">Remove from saved</div>
        ) : (
          !isLoggedIn && <div className="news-card__tooltip">Sign in to save articles</div>
        )}
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
