import SearchIcon from "../../assets/SearchIcon.svg";
import './SearchBox.styles.css'
const SearchBox = (searchFn) => {
  const { HandelOnChange } = searchFn;
  return (
    <>
      <div className="Search-box">
        <input
          className="input-box"
          type="search"
          placeholder="Search a album of your choice"
          onChange={HandelOnChange}
        />
        <button
          className="search-btn"
          //   onClick={handelClick}
        >
          <img src={SearchIcon} alt="" className="btn-img" />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
