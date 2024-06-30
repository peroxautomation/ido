import PropTypes from "prop-types";

const Pro = (props) => {
  const { className = "" } = props;
  return (
    <div
      className={`rounded-lg bg-primary-500 flex flex-row items-center justify-center py-0 px-2 text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="relative leading-[24px]">PRO</div>
    </div>
  );
};

Pro.propTypes = {
  className: PropTypes.string,
};

export default Pro;
