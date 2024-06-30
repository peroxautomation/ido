import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import Card from "../components/Card";
import MenuItem from "../components/MenuItem";

const History1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <Property1Loggining
        hugeIconmenuoutlinemenuLi="/hugeiconmenuoutlinemenulinehorizontal1.svg"
        ellipse1254="/ellipse-12542@2x.png"
        property1LogginingPosition="absolute"
        property1LogginingTop="40px"
        property1LogginingLeft="0px"
        property1LogginingWidth="100%"
        property1LogginingRight="0px"
      />
      <TitleTablet
        titleOfPage="History"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_48px)] top-[236px] right-[24px] bottom-[735px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <MenuItem
        text="Remove from history"
        hugeIconecommerceoutlineb="/hugeiconinterfaceoutlinetrash2.svg"
        menuItemPosition="absolute"
        menuItemTop="268px"
        menuItemLeft="11px"
        menuItemRight="unset"
        menuItemMargin="unset"
      />
    </div>
  );
};

export default History1;
