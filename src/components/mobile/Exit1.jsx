import PropTypes from "prop-types";

const Exit1 = ({ className = "" }) => {
  // Navigate to back to Create Challege
  const onExitClick = () => {
    history.back();
  };

  return (
    <div
     onClick={onExitClick}>
      <img
      className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/hugeiconinterfacesolidremove.svg"
    />
    </div>
  );
};

Exit1.propTypes = {
  className: PropTypes.string,
};

export default Exit1;
