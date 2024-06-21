import DropdownItem2 from "./DropdownItem2";
/**
 * Genere dropdown filter
 * @param selectHandler Handler to set dropdown value
 */
const GenreDropdown = (props) => {
  const { selectHandler } = props;
  const genres = [
    "Ballroom",
    "Contemporary",
    "Cultural",
    "Hip Hop",
    "Jazz",
    "Tap",
    "Folk",
    "Modern",
    "Latin",
  ];

  const renderGenres = () => {
    return genres.map((element, index) => (
      <DropdownItem2 value={element} valueHandler={selectHandler} key={index} />
    ));
  };

  return (
    <div id="genreDropdown" className={`hidden search-filter-dropdown-genre `}>
      {renderGenres()}
    </div>
  );
};

export default GenreDropdown;
