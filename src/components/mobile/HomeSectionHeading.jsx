import { useMemo } from "react";

import PropTypes from "prop-types";

const HomeSectionHeading = ({
  className = "",
  headingOfCategoryTop,
  headingOfCategoryWidth,
  headingOfCategoryRight,
  sectionName,
  linkTo,
}) => {
  const headingOfCategoryStyle = useMemo(() => {
    return {
      top: headingOfCategoryTop,
      width: headingOfCategoryWidth,
      right: headingOfCategoryRight,
    };
  }, [headingOfCategoryTop, headingOfCategoryWidth, headingOfCategoryRight]);

  return (
    <div
      className={`w-[full] flex flex-row items-start justify-between py-[0.5rem] px-[0rem] box-border text-left text-[1rem] text-neutral-100 font-button-1-regular ${className} pr-2`}
      style={headingOfCategoryStyle}
    >
      <div className="flex-1 relative leading-[1.5rem] font-semibold">
        {sectionName}
      </div>
      <a className="[text-decoration:none] relative leading-[1.5rem] font-semibold text-primary-500 text-right" href={linkTo}>
        View more
      </a>
    </div>
  );
};

HomeSectionHeading.propTypes = {
  className: PropTypes.string,
  trendingNow: PropTypes.string,

  /** Style props */
  headingOfCategoryTop: PropTypes.any,
  headingOfCategoryWidth: PropTypes.any,
  headingOfCategoryRight: PropTypes.any,
};

export default HomeSectionHeading;
