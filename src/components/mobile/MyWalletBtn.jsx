import PropTypes from "prop-types";

const MyWalletBtn = ({ className = "", cTA, hugeIconinterfaceoutlinep, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-white-8 flex-1 rounded-xl flex flex-row items-center justify-center ${className}`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src={hugeIconinterfaceoutlinep}
      />
    </button>
  );
};

MyWalletBtn.propTypes = {
  className: PropTypes.string,
  cTA: PropTypes.string,
  hugeIconinterfaceoutlinep: PropTypes.string,
};

export default MyWalletBtn;
