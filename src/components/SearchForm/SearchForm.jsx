import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword.trim()) {
      alert("Please enter a keyword");
      return;
    }
    onSearch(keyword);
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <h2 className="search-form__title">What's going on in the world?</h2>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal account.
        </p>

        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            value={keyword}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-form__btn">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
