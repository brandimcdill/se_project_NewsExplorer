import React from "react";
import "./NothingFound.css";

function NothingFound() {
  return (
    <div className="nothing-found">
      <div className="nothing-found__icon" />
      <h3 className="nothing-found__title">Nothing Found</h3>
      <p className="nothing-found__subtitle">Sorry, but nothing matched your search terms.</p>
    </div>
  );
}

export default NothingFound;
