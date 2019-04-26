import React from "react";
import { Link, NavLink } from "react-router-dom";

const HighlighMark = ({ title = "", search = "" }) => {
  if (search === "") return <span>{title}</span>;

  const regex = new RegExp(`(${search})`, "gi");
  const parts = title.split(regex);
  return (
    <span>
      {parts
        .filter(part => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};

const RecipeItem = ({ textSearch, item }) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <Link
        to={{
          pathname: `/recipe/${item.title}`,
          state: { recipe: item }
        }}
      >
        <img
          className="card-img-top img-fluid"
          src={item ? item.thumbnail : ""}
          alt=""
        />
      </Link>

      <NavLink to="/faq" activeClassName="selected">
        FAQs
      </NavLink>

      <div className="card-body">
        <h5 className="card-title">
          <HighlighMark
            search={textSearch ? textSearch : ""}
            title={item ? item.title : ""}
          />
        </h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          <HighlighMark
            search={textSearch ? textSearch : ""}
            title={item ? item.ingredients : ""}
          />
        </p>
      </div>
    </div>
  </div>
);

export default RecipeItem;
