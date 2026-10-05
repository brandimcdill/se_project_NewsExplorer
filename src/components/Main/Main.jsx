import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";

function Main({
  onSearch,
  isLoading,
  hasError,
  hasSearched,
  articles,
  isLoggedIn,
  onSaveClick,
  onDeleteClick,
  savedArticles,
}) {
  return (
    <main className="app_main">
      <SearchForm onSearch={onSearch} />

      {isLoading && <Preloader />}

      {!isLoading && hasError && (
        <div className="search-error">
          <p className="search-error__text">
            Sorry, something went wrong during the request. Please try again.
          </p>
        </div>
      )}

      {!isLoading && !hasError && hasSearched && articles.length === 0 && <NothingFound />}

      {articles.length > 0 && (
        <NewsCardList
          articles={articles}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
