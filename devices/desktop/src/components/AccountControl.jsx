import Property1DesktopTitle from "./Property1DesktopTitle";
import StateDefaultSizeSmallVar1 from "./StateDefaultSizeSmallVar1";

const AccountControl = (props) => {
  const { deleteAccount } = props;
  return (
    <div
      className={`absolute top-[796px] left-[312px] flex flex-col items-start justify-start`}
    >
      <Property1DesktopTitle
        text="Account control"
        showLayers={false}
        property1DesktopTitlePosition="unset"
        property1DesktopTitleTop="unset"
        property1DesktopTitleLeft="unset"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
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
        deleteAccount={deleteAccount}
      />
    </div>
  );
};

export default AccountControl;
