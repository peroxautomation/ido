import { useMemo } from "react";

const NavBtn = ({
  menuDesktopBorderRadius,
  menuDesktopBackgroundColor,
  hugeIconinterfacesolidhom,
  home,
  homeColor,
  showHugeIconinterfacesolidhom,
  pro,
}) => {
  const menuDesktopStyle = useMemo(() => {
    return {
      borderRadius: menuDesktopBorderRadius,
      backgroundColor: menuDesktopBackgroundColor,
    };
  }, [menuDesktopBorderRadius, menuDesktopBackgroundColor]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  return (
    <a
      className="[text-decoration:none] w-[168px] rounded-xl bg-neutral-100 flex flex-row items-start justify-start py-3 pr-0 pl-4 box-border gap-[8px] text-left text-base text-neutral-800 font-body-regular"
      style={menuDesktopStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[15px]">
        {showHugeIconinterfacesolidhom && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={hugeIconinterfacesolidhom}
          />
        )}
        <div className="relative leading-[24px]" style={homeStyle}>
          {home}
        </div>
      </div>
      {!pro && (
        <div className="rounded-lg bg-primary-500 hidden flex-row items-center justify-center py-0 px-2 text-neutral-100">
          <div className="relative leading-[24px]">PRO</div>
        </div>
      )}
    </a>
  );
};

export default NavBtn;
