import Property1Loggining from "../components/HeaderTablet";
import StateOf3CoverColumn3 from "../components/StateOf3CoverColumn3";
import UserInfoBtnBio from "../components/UserInfoBtnBio";
import DeviceTablet7 from "../components/DeviceTablet7";
import MenuItem from "../components/MenuItem";
import Card from "../components/Card";
import AreYouSureModal from "../components/AreYouSureModal";

const UserProfilePlaylist1 = () => {
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
      <StateOf3CoverColumn3
        myDance="My dance"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-21.svg"
        cover="Cover"
        playlist="Playlist"
        showHugeIconarrowssoliddirect
        stateOf3CoverColumn33Width="calc(100% - 48px)"
        stateOf3CoverColumn33Position="absolute"
        stateOf3CoverColumn33Top="451px"
        stateOf3CoverColumn33Right="24px"
        stateOf3CoverColumn33Left="24px"
        divBackgroundColor="unset"
        myDanceColor="#6c6c6c"
        myDanceFontWeight="unset"
        divBackgroundColor1="unset"
        coverFontWeight="unset"
        coverColor="#6c6c6c"
        divBackgroundColor2="#252525"
        playlistColor="#fff"
        playlistFontWeight="600"
      />
      <UserInfoBtnBio
        ellipse1176="/ellipse-11762@2x.png"
        subtract="/subtract1.svg"
        star5="/star-52.svg"
      />
      <DeviceTablet7
        front="/front3@2x.png"
        nameOfPlaylist="Want to try"
        createdText="Created - Apr"
        deviceTabletPosition="absolute"
        deviceTabletTop="523px"
        deviceTabletLeft="24px"
      />
      <DeviceTablet7
        front="/front3@2x.png"
        nameOfPlaylist="Want to try"
        createdText="Created - Apr"
        deviceTabletPosition="absolute"
        deviceTabletTop="671px"
        deviceTabletLeft="24px"
      />
      <DeviceTablet7
        front="/front3@2x.png"
        nameOfPlaylist="Want to try"
        createdText="Created - Apr"
        deviceTabletPosition="absolute"
        deviceTabletTop="523px"
        deviceTabletLeft="380px"
      />
      <DeviceTablet7
        front="/front3@2x.png"
        nameOfPlaylist="Want to try"
        createdText="Created - Apr"
        deviceTabletPosition="absolute"
        deviceTabletTop="671px"
        deviceTabletLeft="380px"
      />
      <MenuItem
        text="Remove from playlist"
        hugeIconecommerceoutlineb="/hugeiconinterfaceoutlinetrash1.svg"
        menuItemPosition="absolute"
        menuItemTop="563px"
        menuItemLeft="182px"
        menuItemRight="unset"
        menuItemMargin="unset"
      />
      <div className="absolute top-[0px] left-[0px] bg-neutral-900 w-[744px] h-[1133px] overflow-hidden">
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
          ellipse1176="/ellipse-11762@2x.png"
          subtract="/subtract1.svg"
          star5="/star-52.svg"
        />
        <MenuItem
          text="Delete dance"
          hugeIconecommerceoutlineb="/hugeiconinterfaceoutlinetrash1.svg"
          menuItemPosition="absolute"
          menuItemTop="563px"
          menuItemLeft="59px"
          menuItemRight="unset"
          menuItemMargin="unset"
        />
        <div className="modal_background_tint" />
        <AreYouSureModal
          questionText="Are you sure want to remove from playlist?"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil7@2x.png"
          cTA="Yes"
          hugeIconeducationsolidpen1="/hugeiconeducationsolidpencil@2x.png"
          cTA1="No"
          areYouSureModalPosition="absolute"
          areYouSureModalTop="calc(50% - 73.5px)"
          areYouSureModalLeft="calc(50% - 125px)"
        />
      </div>
    </div>
  );
};

export default UserProfilePlaylist1;
