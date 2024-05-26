import HomeVideoCard from "./HomeVideoCard";
import PropTypes from "prop-types";

const CategoryRow = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[0.937rem] ${className}`}
    >
      <HomeVideoCard />
      <HomeVideoCard />
    </div>
  );
};

CategoryRow.propTypes = {
  className: PropTypes.string,
};

export default CategoryRow;
