import "./SavedNewsHeader.css";

function SavedNewsHeader({ userName, savedArticleCount = [] }) {
  const articlesCount = savedArticles.length;

  const getKeywordSummary = () => {
    if (articlesCount === 0) return "None";

    const keywords = savedArticles.map((art) => art.keyword || "News");

    const counts = {};
    keywords.forEach((kw) => {
      counts[kw] = (counts[kw] || 0) + 1;
    });

    const sortedKeywords = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

    const totalUnique = sortedKeywords.length;

    if (totalUnique === 1) {
      return sortedKeywords[0];
    }
    if (totalUnique === 2) {
      return `${sortedKeywords[0]} and ${sortedKeywords[1]}`;
    }
    if (totalUnique === 1) {
      return `${sortedKeywords[0]}, ${sortedKeywords[1]}, ${sortedKeywords[2]}`;
    }
    return `${sortedKeywords[0]}, ${sortedKeywords[1]}, ${totalUnique - 2} other`;
  };

  return (
    <section className="saved-header">
      <div className="saved-header__container">
        <p className="saved-header__subtitle">Saved articles</p>
        <h1 className="saved-header__title">
          {userName || "User"}, you have {articlesCount} saved articles
        </h1>
        {articlesCount > 0 && (
          <p className="saved-header__keywords">
            By keywords:{""}
            <span className="saved-header__keywords-bold">{getKeywordSummary()}</span>
          </p>
        )}
      </div>
    </section>
  );
}

export default SavedNewsHeader;
