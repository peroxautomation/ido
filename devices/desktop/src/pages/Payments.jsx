import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import CategoryMenuTablet from "../components/CategoryMenuTablet";

const Payments = () => {
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
        titleOfPage="Payments"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute w-[calc(100%_-_48px)] top-[236px] right-[24px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
        <CategoryMenuTablet text="Payment methods" />
        <CategoryMenuTablet text="Subscriptions" />
        <CategoryMenuTablet text="My wallet" />
      </div>
    </div>
  );
};

export default Payments;
