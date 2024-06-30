import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import SizeBiggerStateDefaultDe1 from "../components/SizeBiggerStateDefaultDe1";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";

const Story1 = () => {
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
        titleOfPage="Payment mehtods"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute w-[calc(100%_-_404px)] top-[252px] right-[202px] left-[202px] flex flex-col items-start justify-start gap-[32px]">
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <SizeBiggerStateDefaultDe1
            labelText="Label"
            hugeIconmultimediaAndAudi="/mastercard1.svg"
            inputText="4169 4573 9374 0013"
            hugeIconarrowssoliddirect="/hugeiconinterfaceoutlinetrash.svg"
            helperText="Helper text"
            helperText={false}
            label={false}
            leftIcon
            rightIcon
            showInput
            sizeBiggerStateDefaultDeWidth="unset"
            sizeBiggerStateDefaultDePosition="unset"
            sizeBiggerStateDefaultDeTop="unset"
            sizeBiggerStateDefaultDeLeft="unset"
            sizeBiggerStateDefaultDeAlignSelf="stretch"
            sizeBiggerStateDefaultDeHeight="unset"
            labelWidth="340px"
            labelAlignSelf="unset"
            inputAlignSelf="unset"
            inputWidth="340px"
            hugeIconmultimediaAndAudiOverflow="unset"
            dropdownColor="#fff"
            helperTextWidth="340px"
            helperTextAlignSelf="unset"
            helperTextColor="#fff"
          />
          <SizeBiggerStateDefaultDe1
            labelText="Label"
            hugeIconmultimediaAndAudi="/mastercard1.svg"
            inputText="4169 4573 9374 0013"
            hugeIconarrowssoliddirect="/hugeiconinterfaceoutlinetrash.svg"
            helperText="Helper text"
            helperText={false}
            label={false}
            leftIcon
            rightIcon
            showInput
            sizeBiggerStateDefaultDeWidth="unset"
            sizeBiggerStateDefaultDePosition="unset"
            sizeBiggerStateDefaultDeTop="unset"
            sizeBiggerStateDefaultDeLeft="unset"
            sizeBiggerStateDefaultDeAlignSelf="stretch"
            sizeBiggerStateDefaultDeHeight="unset"
            labelWidth="340px"
            labelAlignSelf="unset"
            inputAlignSelf="unset"
            inputWidth="340px"
            hugeIconmultimediaAndAudiOverflow="unset"
            dropdownColor="#fff"
            helperTextWidth="340px"
            helperTextAlignSelf="unset"
            helperTextColor="#fff"
          />
        </div>
        <SizeBigStateSecondaryDev
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
          text="Add payment methods"
          hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
          leftIcon={false}
          rightIcon
          sizeBigStateSecondaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
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
      </div>
    </div>
  );
};

export default Story1;
