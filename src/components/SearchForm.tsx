import { useSearchTextContext } from "../lib/hooks";


export default function SearchForm() {
  const { searchText, handleChangeSearchText } = useSearchTextContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => {
          handleChangeSearchText(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
      {/* As the user types into the input field, 
      the onChange event is triggered, 
      calling setSearchText with the updated value of the input. */}
    </form>
  );
}
