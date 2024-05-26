import { useMemo } from "react";
import VideoCard from "./VideoCard";
import PropTypes from "prop-types";

const HomePageSection = ({ className = "", trendingTop, trendingHeight }) => {
  const trendingStyle = useMemo(() => {
    return {
      top: trendingTop,
      height: trendingHeight,
    };
  }, [trendingTop, trendingHeight]);

  return (
    <div
      className={`top-[2.5rem] left-[0rem] w-[93vw] overflow-x-auto flex flex-row items-start justify-start text-left text-[0.875rem] text-neutral-100 font-button-1-regular ${className}`}
      style={trendingStyle}
    >
      <div className="w-[117.625rem] relative h-[10rem] flex flex-row">
        <VideoCard />
        <VideoCard cardLeft="9.125rem" />
        <VideoCard cardLeft="18.25rem" />
        <VideoCard cardLeft="27.375rem" />
        <VideoCard cardLeft="36.5rem" />
        <VideoCard cardLeft="45.625rem" />
        <VideoCard cardLeft="54.75rem" />
        <VideoCard cardLeft="63.875rem" />
        <VideoCard cardLeft="73rem" />
        <VideoCard cardLeft="82.125rem" />
        <VideoCard cardLeft="91.25rem" />
        <VideoCard cardLeft="100.375rem" />
        <VideoCard cardLeft="109.5rem" />
      </div>
    </div>
  );
};

HomePageSection.propTypes = {
  className: PropTypes.string,

  /** Style props */
  trendingTop: PropTypes.any,
  trendingHeight: PropTypes.any,
};

export default HomePageSection;
