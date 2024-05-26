import Genre from "./Genre";
import GenreFocused from "./GenreFocused";
import PropTypes from "prop-types";

const Genres = ({ className = "" }) => {
  return (
    <div
      className={`relative top-[8.75rem] left-[calc(50%_-_187.5px)] bg-neutral-900 w-[100vw] overflow-x-scroll z-10  h-[20vh] shrink-0 text-left text-[1rem] text-neutral-100 font-button-1-regular flex flex-row items-center ${className} gap-6 px-1`}
    >
      <Genre />
      <GenreFocused />
      <Genre />
    </div>
  );
};

Genres.propTypes = {
  className: PropTypes.string,
};

export default Genres;
