import HIndexIcon from "./HIndexIcon";
import DeviceTablet6 from "./DeviceTablet6";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import PropTypes from "prop-types";

const InfoOfUser1 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-[11px]">
        <HIndexIcon
          subtract="/subtract1.svg"
          star5="/star-53.svg"
          hIndexIconPosition="relative"
        />
        <div className="relative leading-[32px] font-semibold">
          Julia Hilton
        </div>
      </div>
      <DeviceTablet6 numText="32" numText="993" following="Relating" />
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <SizeSmallStatePrimaryDev
          text="Relate"
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
        />
        <SizeSmallStatePrimaryDev
          text="Message"
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
        />
        <SizeSmallStatePrimaryDev
          text="Donate"
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
        />
      </div>
    </div>
  );
};

InfoOfUser1.propTypes = {
  className: PropTypes.string,
};

export default InfoOfUser1;
