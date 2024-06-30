import HIndexIcon from "./HIndexIcon";
import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import PropTypes from "prop-types";

const StateForMovesDeviceTablet = ({
  className = "",
  subtract,
  star5,
  unrelate,
}) => {
  return (
    <div
      className={`[background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full flex flex-col items-start justify-center py-4 px-6 box-border gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular self-stretch ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-end gap-[5px]">
          <HIndexIcon
            subtract="/subtract.svg"
            star5="/star-5.svg"
            hIndexIconPosition="relative"
          />
          <div className="flex flex-row items-center justify-center">
            <div className="relative leading-[32px] font-semibold">
              Ronald Hilson
            </div>
          </div>
          <StatePrimaryDeviceTablet
            text="Follow"
            statePrimaryDeviceTabletBackgroundColor="#1b1b1b"
            statePrimaryDeviceTabletWidth="73px"
            statePrimaryDeviceTabletHeight="32px"
            statePrimaryDeviceTabletPosition="unset"
            statePrimaryDeviceTabletTop="unset"
            statePrimaryDeviceTabletLeft="unset"
            unrelateLineHeight="20px"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
        <div className="self-stretch relative leading-[32px]">06.04.2024</div>
        <div className="self-stretch relative leading-[32px]">Hip-Hop</div>
        <div className="self-stretch relative leading-[32px]">Dehli</div>
      </div>
    </div>
  );
};

StateForMovesDeviceTablet.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  star5: PropTypes.string,
  unrelate: PropTypes.string,
};

export default StateForMovesDeviceTablet;
