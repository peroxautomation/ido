import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom/dist";

const FilterBtn = ({
  className = "",
  onHugeIconinterfaceoutlinefiClick,
  vector,
}) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/search/filter')
  }

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
      onClick={onClick}
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
