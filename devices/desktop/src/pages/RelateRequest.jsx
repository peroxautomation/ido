import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import User3 from "../components/User3";

const RelateRequest = () => {
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
        titleOfPage="Relate request"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute w-[calc(100%_-_48px)] top-[252px] right-[24px] left-[24px] h-[880px] overflow-y-auto flex flex-col items-start justify-start">
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
        <User3 />
      </div>
    </div>
  );
};

export default RelateRequest;
