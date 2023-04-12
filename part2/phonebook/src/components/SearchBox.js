const SearchBox = ({ searchText, onChange }) => (
  <div>
    <label htmlFor="search-input">Filter shown with: </label>
    <input id="search-input" value={searchText} onChange={onChange} />
  </div>
);

export default SearchBox;
