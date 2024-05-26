import { useMemo } from "react";

const LikesIcon = ({ className = "", likesTop, likesLeft }) => {
  const likesStyle = useMemo(() => {
    return {
      top: likesTop,
      left: likesLeft,
    };
  }, [likesTop, likesLeft]);

  return (
    <div
      className={`absolute top-[6.375rem] left-[4.938rem] flex flex-row items-center justify-start gap-[0.125rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold ${className}`}
      style={likesStyle}
    >
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconhealthoutlineheart.svg"
      />
      <div className="relative leading-[1.25rem] font-semibold">54</div>
    </div>
  );
};

LikesIcon.propTypes = {
  className: PropTypes.string,

  /** Style props */
  likesTop: PropTypes.any,
  likesLeft: PropTypes.any,
};

export default LikesIcon;
