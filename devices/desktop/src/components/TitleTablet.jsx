import { useMemo } from "react";

const TitleTablet = (props) => {
  const {
    className = "",
    titleOfPage,
    hugeIconarrowssoliddirect,
    showTitleOfPage,
    hugeIconarrowssoliddirectTop,
    hugeIconarrowssoliddirectWidth,
    propOpacity,
    returnToPrevious,
  } = props;
  const titleTabletStyle = useMemo(() => {
    return {
      top: hugeIconarrowssoliddirectTop,
    };
  }, [hugeIconarrowssoliddirectTop]);

  const titleOfPage1Style = useMemo(() => {
    return {
      width: hugeIconarrowssoliddirectWidth,
    };
  }, [hugeIconarrowssoliddirectWidth]);

  const hugeIconarrowssoliddirectiStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div
      className={`absolute w-[calc(100%_-_48px)] top-[40px] right-[24px] left-[24px] flex flex-row items-start justify-between py-4 px-0 box-border text-center text-13xl text-neutral-100 font-overline-regular ${className}`}
      style={titleTabletStyle}
    >
      <img
        className="cursor-pointer hover:opacity-80 w-10 relative h-10 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsbulkdirectionleft-01.svg"
        onClick={returnToPrevious}
      />
      {showTitleOfPage && (
        <div
          className="relative leading-[40px] font-semibold"
          style={titleOfPage1Style}
        >
          {titleOfPage}
        </div>
      )}
      <img
        className="w-10 relative h-10 overflow-hidden shrink-0 object-contain opacity-[0]"
        alt=""
        src={hugeIconarrowssoliddirect}
        style={hugeIconarrowssoliddirectiStyle}
      />
    </div>
  );
};

export default TitleTablet;
