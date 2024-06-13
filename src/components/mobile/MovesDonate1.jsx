import PropTypes from "prop-types";

const MovesDonate1 = ({ className = "", onClick }) => {
  return (
    <img
      onClick={onClick}
      className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/hugeiconfinance-and-paymentoutlinedonate.svg"
    />
  );
};

MovesDonate1.propTypes = {
  className: PropTypes.string,
};

export default MovesDonate1;
