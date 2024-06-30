import Header from "../components/Header";
import HIndexIcon from "../components/HIndexIcon";
import Property1DesktopTitle from "../components/Property1DesktopTitle";

const DOmparisonPage4 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-left text-xl text-neutral-100 font-overline-regular">
      <Header user={true} />
      <div className="absolute top-[236px] left-[312px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-6">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              Ronald Hilson
            </div>
            <HIndexIcon
              subtract="/subtract.svg"
              star5="/star-5.svg"
              hIndexIconPosition="relative"
            />
            <div className="relative leading-[28px] text-center">Original</div>
          </div>
          <div className="relative leading-[28px] text-center">100%</div>
        </div>
        <img
          className="w-[528px] relative h-[673px] object-cover"
          alt=""
          src="/rectangle-2010@2x.png"
        />
      </div>
      <div className="absolute top-[236px] left-[864px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-6">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              Ronald Hilson
            </div>
            <HIndexIcon
              subtract="/subtract.svg"
              star5="/star-5.svg"
              hIndexIconPosition="relative"
            />
            <div className="relative leading-[28px] text-center">Original</div>
          </div>
          <div className="relative leading-[28px] text-center">76%</div>
        </div>
        <img
          className="w-[528px] relative h-[673px] object-cover"
          alt=""
          src="/rectangle-20101@2x.png"
        />
      </div>
      <div className="absolute top-[586px] left-[563px] w-[577px] flex flex-row items-start justify-between">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 object-contain"
          alt=""
          src="/hugeiconarrowsoutlinepreviousarrow.svg"
        />
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowsoutlinenextarrow.svg"
        />
      </div>
      <Property1DesktopTitle
        text="Сomparison"
        showLayers
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="140px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
    </div>
  );
};

export default DOmparisonPage4;
