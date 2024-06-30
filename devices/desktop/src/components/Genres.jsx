import PropTypes from "prop-types";

const Genres = ({ className = "", text = "Hip-Hop" }) => {
  return (
    <div
      className={`rounded-xl bg-neutral-800 flex flex-row items-center justify-center py-2 px-4 text-center text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="relative leading-[24px] font-semibold">{text}</div>
    </div>
  );
};

Genres.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Genres;
