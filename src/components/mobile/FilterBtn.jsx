import PropTypes from "prop-types";

const FilterBtn = ({
  className = "",
  onHugeIconinterfaceoutlinefiClick,
  vector,
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
      onClick={onHugeIconinterfaceoutlinefiClick}
    >
      <img
        className="absolute h-3/4 w-9/12 top-[12.5%] right-[12.5%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector}
      />
    </button>
  );
};

FilterBtn.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,

  /** Action props */
  onHugeIconinterfaceoutlinefiClick: PropTypes.func,
};

export default FilterBtn;
