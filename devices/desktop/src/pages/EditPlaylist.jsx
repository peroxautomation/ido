import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import DeviceTablet1 from "../components/DeviceTablet1";
import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";

const EditPlaylist = () => {
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
        titleOfPage="Playlist"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-22@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="unset"
      />
      <DeviceTablet1
        front="/front2@2x.png"
        titleText="Want to try"
        creatorText="Sabina Jeyhunzade"
        numOfVideoText="7 video"
        info={false}
        deviceTabletWidth="calc(100% - 48px)"
        deviceTabletPosition="absolute"
        deviceTabletTop="236px"
        deviceTabletRight="24px"
        deviceTabletLeft="24px"
        deviceTabletBorderRadius="unset"
        deviceTabletBackgroundColor="unset"
        deviceTabletHeight="unset"
        deviceTabletPadding="unset"
        frontIconAlignSelf="stretch"
        frontIconHeight="400px"
        frontIconWidth="unset"
        infoEditBtnAlignSelf="unset"
        infoEditBtnWidth="696px"
        infoEditBtnPadding="unset"
      />
      <StateDefaultSizeBigDevic
        labelText="Title"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation3.svg"
        inputText="Want to try"
        hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
        helperText="Helper text"
        label
        eye={false}
        infoIcon={false}
        helperText={false}
        showInputAndWord
        showInput
        stateDefaultSizeBigDevicAlignSelf="unset"
        stateDefaultSizeBigDevicWidth="calc(100% - 404px)"
        stateDefaultSizeBigDevicPosition="absolute"
        stateDefaultSizeBigDevicTop="660px"
        stateDefaultSizeBigDevicRight="202px"
        stateDefaultSizeBigDevicLeft="202px"
        inputGap="8px"
        inputBorder="unset"
        inputOutline="unset"
        inputFontFamily="unset"
        inputFontSize="unset"
        inputColor="unset"
        inputAndWordFlex="1"
        inputAndWordWidth="unset"
        inputAndWordPadding="unset"
        inputAndWordBorder="unset"
        inputAndWordOutline="unset"
        inputAndWordFontFamily="unset"
        inputAndWordFontSize="unset"
        inputAndWordBackgroundColor="unset"
        inputAndWordColor="unset"
        inputColor1="#fff"
        inputLineHeight="24px"
        inputTextAlign="center"
        inputFlex="unset"
        inputFontSize1="16px"
        inputFontFamily1="Nunito"
        inputWidth="unset"
        inputHeight="unset"
        inputOverflow="unset"
        hugeIconinterfacesolideyeWidth="24px"
        hugeIconinterfacesolideyePosition="relative"
        hugeIconinterfacesolideyeHeight="24px"
        hugeIconinterfacesolideyeOverflow="hidden"
        hugeIconinterfacesolideyeFlexDirection="unset"
        hugeIconinterfacesolideyePadding="unset"
        helperTextAlignSelf="unset"
        helperTextWidth="340px"
        helperTextFlexDirection="row"
        helperTextPadding="4px 0px"
        helperTextFlex="unset"
        helperTextPosition="unset"
        helperTextFontSize="unset"
        helperTextLineHeight="unset"
        helperTextFontFamily="unset"
        helperTextColor="unset"
        helperTextTextAlign="unset"
        helperTextColor1="#fff"
      />
    </div>
  );
};

export default EditPlaylist;
