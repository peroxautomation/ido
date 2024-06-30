import DeviceTablet from "./DeviceTablet";
import Genres from "./Genres";
import PropTypes from "prop-types";

const GenresTitleCategory = (props) => {
  const { className = "", genreList } = props;
  return (
    <div className={`flex flex-col items-start justify-start ${className}`}>
      <DeviceTablet
        text="Trending now"
        rightBtn
        deviceTabletWidth="696px"
        deviceTabletAlignSelf="unset"
      />
      <div
        // className="w-[720px] overflow-x-auto flex flex-row items-start justify-start gap-[13px]"
        className="w-[720px] max-w-full overflow-x-auto flex flex-row items-start justify-start gap-[13px]"
      >
        {/* <Genres text="Ballroom" />
        <Genres text="Contemporary" />
        <Genres text="Cultural" />
        <Genres text="Hip-hop" />
        <Genres text="Jazz" />
        <Genres text="Tap" />
        <Genres text="Folk" />
        <Genres text="Modern" />
        <Genres text="Latin" /> */}

        <>
          {genreList &&
            genreList.map((item) => (
              <>
                <Genres text={item.title} />
              </>
            ))}
        </>
      </div>
    </div>
  );
};

export default GenresTitleCategory;
