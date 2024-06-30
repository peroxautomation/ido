import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import PushNotifications from "../components/PushNotifications";
import VariantForCategory from "../components/VariantForCategory";
import StateOffDeviceMobile from "../components/StateOffDeviceMobile";
import StateDefaultSizeSmallVar1 from "../components/StateDefaultSizeSmallVar1";
import Password from "../components/Password";

const Settings = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <Property1Loggining
        hugeIconmenuoutlinemenuLi="/hugeiconmenuoutlinemenulinehorizontal.svg"
        ellipse1254="/ellipse-1254@2x.png"
        property1LogginingPosition="absolute"
        property1LogginingTop="40px"
        property1LogginingLeft="0px"
        property1LogginingWidth="100%"
        property1LogginingRight="0px"
      />
      <TitleTablet
        titleOfPage="Settings"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute top-[236px] left-[24px] flex flex-col items-start justify-start gap-[40px]">
        <PushNotifications />
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <VariantForCategory
            text="Privacy"
            showLayers
            variantForCategoryWidth="696px"
            variantForCategoryAlignSelf="unset"
            titleOfPageFontWeight="600"
            titleOfPageTextAlign="center"
          />
          <StateOffDeviceMobile
            text="Activity status"
            toggle="/toggle2.svg"
            stateOffDeviceMobileAlignSelf="unset"
            stateOffDeviceMobileWidth="335px"
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-[18px]">
          <VariantForCategory
            text="Account control"
            showLayers
            variantForCategoryWidth="696px"
            variantForCategoryAlignSelf="unset"
            titleOfPageFontWeight="600"
            titleOfPageTextAlign="center"
          />
          <StateDefaultSizeSmallVar1
            viewStoryText="Delete account"
            stateDefaultSizeSmallVarWidth="335px"
            stateDefaultSizeSmallVarBorderRadius="12px"
            stateDefaultSizeSmallVarPosition="unset"
            stateDefaultSizeSmallVarBottom="unset"
            stateDefaultSizeSmallVarLeft="unset"
            viewStoryFontSize="16px"
            viewStoryLineHeight="24px"
            viewStoryColor="#cc240e"
            viewStoryFontWeight="600"
            viewStoryWidth="unset"
            viewStoryDisplay="unset"
          />
        </div>
        <Password />
      </div>
    </div>
  );
};

export default Settings;
