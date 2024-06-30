import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";

const DAboutUs = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-left text-5xl text-neutral-100 font-sf-pro-text">
      <Header user={true} />
      <div className="absolute top-[364px] left-[calc(50%_-_408px)] tracking-[-0.41px] leading-[32px] inline-block w-[923px]">
        <p className="m-0">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).Many desktop publishing packages and
          web page editors now use Lorem Ipsum as their default model text, and
          a search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="absolute top-[244px] left-[calc(50%_-_408px)] text-21xl tracking-[-0.41px] leading-[48px] font-semibold inline-block w-[923px]">{`It is a long established fact that a reader will be distracted by the readable content `}</div>
      <Property1DesktopTitle
        text="About us"
        showLayers={false}
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="148px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
    </div>
  );
};

export default DAboutUs;
