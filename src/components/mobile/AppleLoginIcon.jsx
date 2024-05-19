import { useMemo } from "react";

const AppleLoginIcon = ({
  socialIconsHref,
  propWidth,
  propRight,
  propLeft,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
      left: propLeft,
    };
  }, [propWidth, propRight, propLeft]);

  return (
    <div className="[text-decoration:none] rounded-3xl bg-white-8 flex flex-row items-start justify-start p-3">
      <a
        className="[text-decoration:none] w-6 relative h-6 overflow-hidden shrink-0"
        href={socialIconsHref}
      >
        <img
          className="absolute h-full w-[84.17%] top-[0%] right-[7.5%] bottom-[0%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
          style={vectorIconStyle}
        />
      </a>
    </div>
  );
};

export default AppleLoginIcon;
