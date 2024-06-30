import HIndexIcon from "./HIndexIcon";
import DeviceTablet6 from "./DeviceTablet6";
import StateDefaultSizeSmallVar from "./StateDefaultSizeSmallVar";
import CTA from "./CTA";
import PropTypes from "prop-types";

const InfoOfUser = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-[11px]">
        <HIndexIcon
          subtract="/subtract1.svg"
          star5="/star-52.svg"
          hIndexIconPosition="relative"
        />
        <div className="relative leading-[32px] font-semibold">
          Julia Hilton
        </div>
      </div>
      <DeviceTablet6 numText="32" numText="993" following="Relating" />
      <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-center text-base">
        <StateDefaultSizeSmallVar
          hugeIconeducationsolidpen="/hugeiconeducationoutlineplusrectangle.svg"
          text="Relate"
          icon
          stateDefaultSizeSmallVarWidth="unset"
          stateDefaultSizeSmallVarBackgroundColor="#1b1b1b"
          stateDefaultSizeSmallVarPosition="unset"
          stateDefaultSizeSmallVarTop="unset"
          stateDefaultSizeSmallVarLeft="unset"
          stateDefaultSizeSmallVarFlex="1"
          hugeIconeducationsolidpenOverflow="unset"
        />
        <CTA text="Message" icon />
        <StateDefaultSizeSmallVar
          hugeIconeducationsolidpen="/hugeiconfinance-and-paymentoutlinedonate2.svg"
          text="Donate"
          icon
          stateDefaultSizeSmallVarWidth="unset"
          stateDefaultSizeSmallVarBackgroundColor="#1b1b1b"
          stateDefaultSizeSmallVarPosition="unset"
          stateDefaultSizeSmallVarTop="unset"
          stateDefaultSizeSmallVarLeft="unset"
          stateDefaultSizeSmallVarFlex="1"
          hugeIconeducationsolidpenOverflow="hidden"
        />
      </div>
    </div>
  );
};

InfoOfUser.propTypes = {
  className: PropTypes.string,
};

export default InfoOfUser;
