import HIndexIcon from "./HIndexIcon";
import DeviceTablet6 from "./DeviceTablet6";
import SizeBigStateSecondaryDev from "./SizeBigStateSecondaryDev";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";

const UserInfoBtnBio1 = (props) => {
  const { isUser, openEditProfile, openModalRelating } = props;

  return (
    <div
      className={`absolute w-[calc(100%_-_922px)] top-[148px] right-[610px] left-[312px] flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular`}
    >
      <div className="w-[518px] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="w-[162px] relative rounded-[50%] h-[162px] object-cover"
          alt=""
          src="/profile_photo.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
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
          <DeviceTablet6 numText="32" numText="993" following="Relating" openModalRelating={openModalRelating} openModalPosts={""}/>
          {isUser ? (
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
              onClick={openEditProfile}
            />
          ) : (
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
          )}
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

export default UserInfoBtnBio1;
