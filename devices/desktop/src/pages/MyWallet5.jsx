import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import VariantDefault from "../components/VariantDefault";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";
import StateIncomeDeviceTablet from "../components/StateIncomeDeviceTablet";
import Balance from "../components/Balance";
import VariantsTopUpWallet from "../components/VariantsTopUpWallet";

const MyWallet5 = () => {
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
        titleOfPage="My wallet"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <VariantDefault
        text="Search"
        leftIcon
        variantDefaultWidth="calc(100% - 48px)"
        variantDefaultPosition="absolute"
        variantDefaultTop="414px"
        variantDefaultRight="24px"
        variantDefaultLeft="24px"
      />
      <div className="absolute w-[calc(100%_-_48px)] top-[340px] right-[24px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <SizeBigStateSecondaryDev
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
          text="Top up"
          hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus1.svg"
          leftIcon={false}
          rightIcon
          sizeBigStateSecondaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeBigStateSecondaryDevAlignSelf="unset"
          sizeBigStateSecondaryDevWidth="unset"
          sizeBigStateSecondaryDevPosition="unset"
          sizeBigStateSecondaryDevRight="unset"
          sizeBigStateSecondaryDevBottom="unset"
          sizeBigStateSecondaryDevLeft="unset"
          sizeBigStateSecondaryDevFlex="1"
          sizeBigStateSecondaryDevBorder="unset"
          sizeBigStateSecondaryDevTop="unset"
          cTAColor="#fff"
        />
        <SizeBigStateSecondaryDev
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
          text="Withdraw"
          hugeIconinterfacesolidplu1="/hugeiconarrowssolidmaximize1@2x.png"
          leftIcon={false}
          rightIcon
          sizeBigStateSecondaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeBigStateSecondaryDevAlignSelf="unset"
          sizeBigStateSecondaryDevWidth="unset"
          sizeBigStateSecondaryDevPosition="unset"
          sizeBigStateSecondaryDevRight="unset"
          sizeBigStateSecondaryDevBottom="unset"
          sizeBigStateSecondaryDevLeft="unset"
          sizeBigStateSecondaryDevFlex="1"
          sizeBigStateSecondaryDevBorder="unset"
          sizeBigStateSecondaryDevTop="unset"
          cTAColor="#fff"
        />
      </div>
      <div className="absolute w-[calc(100%_-_48px)] top-[482px] right-[24px] left-[24px] h-[651px] overflow-y-auto flex flex-col items-start justify-start gap-[16px]">
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="+$35"
          text="10:42"
          divColor="#0c9f6e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="-$35"
          text="10:42"
          divColor="#cc240e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="-$35"
          text="10:42"
          divColor="#cc240e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="-$35"
          text="10:42"
          divColor="#cc240e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="+$35"
          text="10:42"
          divColor="#0c9f6e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="+$35"
          text="10:42"
          divColor="#0c9f6e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="-$35"
          text="10:42"
          divColor="#cc240e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="-$35"
          text="10:42"
          divColor="#cc240e"
        />
        <StateIncomeDeviceTablet
          text="Today"
          fromText="Sofia Kuchenko"
          text="-$35"
          text="10:42"
          divColor="#cc240e"
        />
      </div>
      <Balance
        text="$ 132,74"
        balanceWidth="calc(100% - 409px)"
        balancePosition="absolute"
        balanceTop="217px"
        balanceRight="205px"
        balanceLeft="204px"
      />
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100" />
      <VariantsTopUpWallet
        topUpWallet="Withdraw"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown="Choose card"
        helperText="Add new card"
        label1="Amount"
        hugeIconmultimediaAndAudi2="/hugeiconmultimedia-and-audiosolidmusic-015.svg"
        dropdown1="200"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-012.svg"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        cTA="Withdraw"
        showDropdown
        hugeIconmultimediaAndAudi1={false}
        showHelperText={false}
        label
        info={false}
        variantsTopUpWalletWidth="calc(100% - 328px)"
        variantsTopUpWalletPosition="absolute"
        variantsTopUpWalletTop="338px"
        variantsTopUpWalletRight="164px"
        variantsTopUpWalletLeft="164px"
        modalWithButtonsHeight="360px"
        modalWithButtonsGap="unset"
        dropdownsHeight="299px"
        dropdownsGap="unset"
        dropdownAlignSelf="stretch"
        dropdownWidth="unset"
        hugeIconmultimediaAndAudiOverflow="hidden"
        helperTextAlignSelf="unset"
        helperTextWidth="320px"
        helperTextColor="#cc0f3c"
        dropdownWidth1="320px"
        dropdownAlignSelf1="unset"
        labelWidth="unset"
        labelAlignSelf="stretch"
        dropdownColor="#424242"
        helperTextColor1="#424242"
        infoWidth="320px"
        infoAlignSelf="unset"
      />
    </div>
  );
};

export default MyWallet5;
