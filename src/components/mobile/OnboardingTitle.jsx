import { useMemo } from "react";
import Return from "./Return";

const OnboardingTitle = ({
  text = "Forgot password",
  icon = true,
  hugeIconarrowssoliddirectRight,
  hugeIconarrowssoliddirectLeft,
  hugeIconarrowssoliddirectWidth,
}) => {
  const titleStyle = useMemo(() => {
    return {
      right: hugeIconarrowssoliddirectRight,
      left: hugeIconarrowssoliddirectLeft,
      width: hugeIconarrowssoliddirectWidth,
    };
  }, [
    hugeIconarrowssoliddirectRight,
    hugeIconarrowssoliddirectLeft,
    hugeIconarrowssoliddirectWidth,
  ]);

  return (
    <header
      className="absolute w-[calc(100%_-_40px)] top-[40px] right-[29px] left-[11px] h-11 flex flex-row items-center justify-between py-2 px-0 box-border text-center text-xl text-white font-button-2-semibold"
      style={titleStyle}
    >
      <Return hugeIconarrowssolHref="/login" />
      {text && (
        <div className="relative leading-[28px] font-semibold">{text}</div>
      )}
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 object-contain opacity-[0]"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-3@2x.png"
      />
    </header>
  );
};

export default OnboardingTitle;
