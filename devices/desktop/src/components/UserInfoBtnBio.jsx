import HIndexIcon from "./HIndexIcon";
import DeviceTablet6 from "./DeviceTablet6";
import SizeBigStateSecondaryDev from "./SizeBigStateSecondaryDev";
import PropTypes from "prop-types";
import ButtonDefault from "./ButtonDefault";

const UserInfoBtnBio = ({ className = "", ellipse1176, subtract, star5 }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_226px)] top-[147px] right-[113px] left-[113px] flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="w-[518px] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="w-[162px] relative rounded-[50%] h-[162px] object-cover"
          alt=""
          src={ellipse1176}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-center gap-[11px]">
            <HIndexIcon
              subtract="/subtract.svg"
              star5="/star-51.svg"
              hIndexIconPosition="relative"
            />
            <div className="relative leading-[32px] font-semibold">
              Julia Hilton
            </div>
          </div>
          <DeviceTablet6 numText="32" numText="993" following="Relating" />
          <SizeBigStateSecondaryDev
            hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
            text="Edit profile"
            hugeIconinterfacesolidplu1="/hugeiconeducationoutlinepencil.svg"
            leftIcon={false}
            rightIcon
            sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
            sizeBigStateSecondaryDevAlignSelf="stretch"
            sizeBigStateSecondaryDevWidth="unset"
            sizeBigStateSecondaryDevPosition="unset"
            sizeBigStateSecondaryDevRight="unset"
            sizeBigStateSecondaryDevBottom="unset"
            sizeBigStateSecondaryDevLeft="unset"
            sizeBigStateSecondaryDevFlex="unset"
            sizeBigStateSecondaryDevBorder="unset"
            sizeBigStateSecondaryDevTop="unset"
            cTAColor="#fff"
          />
           {/* <ButtonDefault
            leftIcon={""}
            text={"Start my Ido premium plan"}
            rightIcon={"/hugeiconinterfacesolidstar.svg"}
          /> */}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center text-base">
        <div className="flex-1 relative leading-[24px]">
          With years of dedicated training and performance experience, dance is
          not just a career for me—it's a way of life.
        </div>
      </div>
    </div>
  );
};

UserInfoBtnBio.propTypes = {
  className: PropTypes.string,
  ellipse1176: PropTypes.string,
  subtract: PropTypes.string,
  star5: PropTypes.string,
};

export default UserInfoBtnBio;
