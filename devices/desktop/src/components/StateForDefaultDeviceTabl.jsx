import HIndexIcon from "./HIndexIcon";
import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import PropTypes from "prop-types";

const StateForDefaultDeviceTabl = ({
  className = "",
  subtract,
  star5,
  unrelate,
  showMiniBtn,
}) => {
  return (
    <div
      className={`[background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full flex flex-col items-end justify-start py-4 px-6 box-border gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular self-stretch ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowsbulkdirectionleft-012.svg"
        />
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
            text={unrelate ? unrelate : "Relate"}
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
      <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-right">
        <div className="self-stretch relative leading-[32px]">06.04.2024</div>
        <div className="self-stretch relative leading-[32px]">Hip-Hop</div>
        <div className="self-stretch relative leading-[32px]">Dehli</div>
      </div>
    </div>
  );
};

StateForDefaultDeviceTabl.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  star5: PropTypes.string,
  unrelate: PropTypes.string,
  showMiniBtn: PropTypes.bool,
};

export default StateForDefaultDeviceTabl;
