import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, isLoggedIn }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search results</h2>
        <div className="search-results__grid">
          {articles.slice(0, visibleCount).map((article) => (
            <NewsCard key={article.id} card={article} isLoggedIn={isLoggedIn} />
          ))}
        </div>

        {visibleCount < articles.length && (
          <button type="button" className="search-results__more-btn" onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
