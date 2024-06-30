import Property1Loggining from "../components/HeaderTablet";
import Card from "../components/Card";
import StateOf3CoverColumn3 from "../components/StateOf3CoverColumn3";
import InfoOfUser from "../components/InfoOfUser";

const AnotherUserProfile = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-left text-base text-neutral-100 font-overline-regular">
      <Property1Loggining
        hugeIconmenuoutlinemenuLi="/hugeiconmenuoutlinemenulinehorizontal.svg"
        ellipse1254="/ellipse-1254@2x.png"
        property1LogginingPosition="absolute"
        property1LogginingTop="40px"
        property1LogginingLeft="0px"
        property1LogginingWidth="100%"
        property1LogginingRight="0px"
      />
      <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_48px)] top-[478px] right-[24px] bottom-[493px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_404px)] top-[656px] right-[380px] bottom-[315px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <Card />
        <Card />
      </div>
      <StateOf3CoverColumn3
        myDance="Dance"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-2.svg"
        cover="Cover"
        playlist="Playlist"
        showHugeIconarrowssoliddirect
        stateOf3CoverColumn33Width="calc(100% - 48px)"
        stateOf3CoverColumn33Position="absolute"
        stateOf3CoverColumn33Top="406px"
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
      <div className="absolute w-[calc(100%_-_226px)] top-[140px] right-[113px] left-[113px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
          <img
            className="w-[162px] relative rounded-[50%] h-[162px] object-cover"
            alt=""
            src="/ellipse-11762@2x.png"
          />
          <InfoOfUser />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">
            With years of dedicated training and performance experience, dance
            is not just a career for me—it's a way of life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherUserProfile;
