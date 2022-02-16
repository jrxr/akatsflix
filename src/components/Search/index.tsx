export default function Search() {
  return (
    <div className="SearchContainer">
      <div className="SearchContent">
        <form className="SearchForm">
          <input
            className="SearchInput"
            type="text"
            placeholder="Buscar anime"
          />
          <button className="SearchButton">
            <p>Lets go</p>
          </button>
        </form>
      </div>
    </div>

  );
}