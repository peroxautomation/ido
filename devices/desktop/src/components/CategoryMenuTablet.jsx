import PropTypes from "prop-types";

const CategoryMenuTablet = ({ className = "", text = "Payment methods" }) => {
  return (
    <div
      className={`rounded-xl bg-neutral-800 max-w-full flex flex-row items-center justify-between py-2 px-4 box-border text-left text-xl text-neutral-100 font-overline-regular self-stretch ${className}`}
    >
      <div className="flex-1 relative leading-[28px]">{text}</div>
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0 object-contain"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-21@2x.png"
      />
    </div>
  );
};

CategoryMenuTablet.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default CategoryMenuTablet;
