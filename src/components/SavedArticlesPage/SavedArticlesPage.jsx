import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";

function SavedArticlesPage({ userName, savedArticles, isLoggedIn, handleDeleteArticle }) {
  return (
    <main className="saved-news-page">
      <SavedNewsHeader userName={userName} savedArticles={savedArticles} />

      <section className="search-results">
        <div className="search-results__grid">
          {savedArticles.map((article) => (
            <NewsCard
              key={article.id}
              card={article}
              isLoggedIn={isLoggedIn}
              isSavedNewsRoute={true}
              onDeleteClick={handleDeleteArticle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedArticlesPage;
