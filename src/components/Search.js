import React from "react";

const Search = () => {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Search City..."
              className="search-form"
            />
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 search-btn"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
