import PropTypes from "prop-types";

const PaymentMenu = ({ className = "", label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`self-stretch flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="self-stretch rounded-2xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] w-[90vw]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        />
        <div className="flex-1 relative leading-[1.5rem]">{label}</div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectionright-011.svg"
        />
      </div>
    </div>
  );
};

PaymentMenu.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default PaymentMenu;
