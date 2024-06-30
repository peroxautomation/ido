import { useMemo } from "react";

const Property1Variant = (props) => {
  const {
    className = "",
    text = "Payment history",
    showLayers = true,
    property1Variant2Width,
    property1Variant2Position,
    property1Variant2Top,
    property1Variant2Left,
    returnTab,
  } = props;
  const property1Variant2Style = useMemo(() => {
    return {
      width: property1Variant2Width,
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [
    property1Variant2Width,
    property1Variant2Position,
    property1Variant2Top,
    property1Variant2Left,
  ]);

  return (
    <div
      className={`w-[1344px] max-w-full flex flex-row items-start justify-between py-4 px-0 box-border text-left text-13xl text-neutral-100 font-overline-regular ${className}`}
      style={property1Variant2Style}
    >
      {showLayers && (
        <img
          className="cursor-pointer hover:opacity-80 w-10 relative h-10 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowsbulkdirectionleft-01.svg"
          onClick={returnTab}
        />
      )}
      <div className="relative leading-[40px] font-semibold">{text}</div>
      <img
        className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
        alt=""
        src="/hugeiconarrowsbulkdirectionleft-2.svg"
      />
    </div>
  );
};

export default Property1Variant;
