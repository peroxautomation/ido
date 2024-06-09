import PropTypes from "prop-types";

const CancleSubscriptionBtn = ({ className = "" }) => {

  const onDeleteClick = () => {
    const element = document.getElementById('ProfileDeleteDancePopup');
    element.classList.toggle('hidden');
  }

  return (
    <button
      onClick={onDeleteClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 absolute w-[calc(100%_-_216px)] right-[6.75rem] bottom-[15.688rem] left-[6.75rem] rounded-xl flex flex-row items-center justify-center box-border ${className}`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-danger-500 text-center">
        Cancel subscription
      </div>
    </button>
  );
};

CancleSubscriptionBtn.propTypes = {
  className: PropTypes.string,
};

export default CancleSubscriptionBtn;
