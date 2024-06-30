import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
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
        titleOfPage="About us"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute w-[calc(100%_-_128px)] top-[236px] right-[64px] left-[64px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[48px]">{`It is a long established fact that a reader will be distracted by the readable content `}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-left text-xl text-neutral-200">
          <div className="flex-1 relative leading-[28px]">
            <p className="m-0">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
