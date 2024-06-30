import PropTypes from "prop-types";

const User2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-4 px-5 gap-[24px] text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
        <img
          className="w-14 relative rounded-9xl h-14 object-cover"
          alt=""
          src="/rectangle-20022@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[32px] font-semibold">
            User name
          </div>
          <div className="self-stretch relative text-base leading-[24px] text-neutral-400">
            Desc
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-[8px] text-right text-sm text-neutral-500">
        <div className="relative leading-[20px] font-light">09 Apr 2024</div>
        <div className="relative leading-[20px] font-light">18:35</div>
      </div>
    </div>
  );
};

User2.propTypes = {
  className: PropTypes.string,
};

export default User2;
