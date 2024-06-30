import { useMemo } from "react";

const VariantDefault1 = (props) => {
  const {
    className = "",
    text = "Title of page",
    showLayers = true,
    variantDefaultPosition,
    variantDefaultTop,
    variantDefaultLeft,
  } = props;
  const variantDefault1Style = useMemo(() => {
    return {
      position: variantDefaultPosition,
      top: variantDefaultTop,
      left: variantDefaultLeft,
    };
  }, [variantDefaultPosition, variantDefaultTop, variantDefaultLeft]);

  return (
    <div
      className={`w-full max-w-full flex flex-row items-start justify-between py-4 px-0 box-border text-center text-13xl text-neutral-100 font-overline-regular ${className}`}
      style={variantDefault1Style}
    >
      <img
        className="w-10 relative h-10 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsbulkdirectionleft-01.svg"
      />
      {showLayers && (
        <div className="relative leading-[40px] font-semibold">{text}</div>
      )}
      <img
        className="w-10 relative h-10 overflow-hidden shrink-0 object-contain opacity-[0]"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2@2x.png"
      />
    </div>
  );
};


export default VariantDefault1;
