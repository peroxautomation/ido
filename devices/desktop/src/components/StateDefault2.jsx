import PropTypes from "prop-types";

const StateDefault2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[315px] flex flex-row items-center justify-between py-4 px-6 box-border text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <img
        className="w-12 relative rounded-[50%] h-12 object-cover"
        alt=""
        src="/ellipse-1256@2x.png"
      />
      <div className="flex flex-col items-start justify-start">
        <b className="relative leading-[24px] whitespace-pre-wrap">{`Linda Williams   `}</b>
        <div className="w-[155px] relative leading-[24px] inline-block">
          liked your challenge
        </div>
      </div>
      <img
        className="w-12 relative rounded h-12 object-cover"
        alt=""
        src="/rectangle-2154@2x.png"
      />
    </div>
  );
};

StateDefault2.propTypes = {
  className: PropTypes.string,
};

export default StateDefault2;
