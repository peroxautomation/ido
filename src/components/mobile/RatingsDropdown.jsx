import Stars from "./Stars";
/**
 * Ratings dropdown list for filter
 * @param selectHandler Handler to set dropdown value
 */
const RatingsDropdown = (props) => {
  const { selectHandler } = props;
  return (
    <div
      id="ratingsDropdown"
      className={`search-filter-dropdown-ratings hidden`}
    >
      <Stars
        star1="/starIcon.svg"
        star2="/starIcon.svg"
        star3="/starIcon.svg"
        star4="/starIcon.svg"
        star5="/starIcon.svg"
        value={5}
        valueHandler={selectHandler}
      />
      <Stars
        star1="/starIcon.svg"
        star2="/starIcon.svg"
        star3="/starIcon.svg"
        star4="/starIcon.svg"
        star5="/startIconOutline.svg"
        value={4}
        valueHandler={selectHandler}
      />
      <Stars
        star1="/starIcon.svg"
        star2="/starIcon.svg"
        star3="/starIcon.svg"
        star4="/startIconOutline.svg"
        star5="/startIconOutline.svg"
        value={3}
        valueHandler={selectHandler}
      />
      <Stars
        star1="/starIcon.svg"
        star2="/starIcon.svg"
        star3="/startIconOutline.svg"
        star4="/startIconOutline.svg"
        star5="/startIconOutline.svg"
        value={2}
        valueHandler={selectHandler}
      />
      <Stars
        star1="/starIcon.svg"
        star2="/startIconOutline.svg"
        star3="/startIconOutline.svg"
        star4="/startIconOutline.svg"
        star5="/startIconOutline.svg"
        value={1}
        valueHandler={selectHandler}
      />
    </div>
  );
};

export default RatingsDropdown;
