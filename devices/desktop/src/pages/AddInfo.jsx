import Property1Loggining from "../components/HeaderTablet";
import Card from "../components/Card";
import StateOf3CoverColumn3 from "../components/StateOf3CoverColumn3";
import UserInfoBtnBio from "../components/UserInfoBtnBio";
import VariantsInfo from "../components/VariantsInfo";

const AddInfo = () => {
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
      <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_48px)] top-[531px] right-[24px] bottom-[440px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_404px)] top-[709px] right-[380px] bottom-[262px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <Card />
        <Card />
      </div>
      <StateOf3CoverColumn3
        myDance="My dance"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-2.svg"
        cover="Cover"
        playlist="Playlist"
        showHugeIconarrowssoliddirect
        stateOf3CoverColumn33Width="calc(100% - 48px)"
        stateOf3CoverColumn33Position="absolute"
        stateOf3CoverColumn33Top="451px"
        stateOf3CoverColumn33Right="24px"
        stateOf3CoverColumn33Left="24px"
        divBackgroundColor="#252525"
        myDanceColor="#fff"
        myDanceFontWeight="600"
        divBackgroundColor1="unset"
        coverFontWeight="unset"
        coverColor="#6c6c6c"
        divBackgroundColor2="unset"
        playlistColor="#6c6c6c"
        playlistFontWeight="unset"
      />
      <UserInfoBtnBio
        ellipse1176="/ellipse-1176@2x.png"
        subtract="/subtract.svg"
        star5="/star-51.svg"
      />
      <div className="modal_background_tint" />
      <VariantsInfo
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown="Genre"
        hugeIconmultimediaAndAudi1="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown1="Country"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        showDropdown
        showInput={false}
        variantsInfoWidth="calc(100% - 328px)"
        variantsInfoPosition="absolute"
        variantsInfoTop="338px"
        variantsInfoRight="164px"
        variantsInfoLeft="164px"
        dropdownHeight="44px"
        dropdownAlignSelf="stretch"
        dropdownWidth="unset"
        inputAlignSelf="unset"
        inputWidth="320px"
      />
    </div>
  );
};

export default AddInfo;
