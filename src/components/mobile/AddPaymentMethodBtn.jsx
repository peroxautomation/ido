import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AddPaymentMethodBtn = ({ className = "" }) => {

  const navigate = useNavigate();

  // Navigate to add card
  const onAddClick = () => {
    navigate('/profile/add-payment')
  }

  return (
    <button
      onClick={onAddClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-primary-500 w-[20.938rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        Add payment method
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlineplus1.svg"
      />
    </button>
  );
};

AddPaymentMethodBtn.propTypes = {
  className: PropTypes.string,
};

export default AddPaymentMethodBtn;
