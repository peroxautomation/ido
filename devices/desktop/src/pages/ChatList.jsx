import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import VariantDefault from "../components/VariantDefault";
import User2 from "../components/User1";

const ChatList = () => {
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
        titleOfPage="Chat list"
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
        variantDefaultTop="236px"
        variantDefaultRight="25px"
        variantDefaultLeft="23px"
      />
      <div className="absolute w-[calc(100%_-_48px)] top-[304px] right-[24px] left-[24px] h-[829px] overflow-y-auto flex flex-col items-start justify-start">
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
        <User2 />
      </div>
    </div>
  );
};

export default ChatList;
