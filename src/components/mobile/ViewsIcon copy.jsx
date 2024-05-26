import { useMemo } from "react";

const ViewsIcon = ({ className = "", viewsTop, viewsLeft }) => {
  const viewsStyle = useMemo(() => {
    return {
      top: viewsTop,
      left: viewsLeft,
    };
  }, [viewsTop, viewsLeft]);

  return (
    <div
      className={`absolute top-[6.375rem] left-[1rem] flex flex-row items-center justify-start gap-[0.125rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold ${className}`}
      style={viewsStyle}
    >
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlineeye.svg"
      />
      <div className="relative leading-[1.25rem] font-semibold">122</div>
    </div>
  );
};

ViewsIcon.propTypes = {
  className: PropTypes.string,

  /** Style props */
  viewsTop: PropTypes.any,
  viewsLeft: PropTypes.any,
};

export default ViewsIcon;
