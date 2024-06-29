import { useNavigate } from "react-router-dom";

/**
 * Button to add a new payment method
 * @param {*} props
 * @returns
 */
const AddPaymentMethodBtn = (props) => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const {} = props;

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Navigate to add card
   */
  const onAddClick = () => {
    navigate("/profile/add-payment");
  };

  return (
    <button
      onClick={onAddClick}
      className={`add-payment-btn`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold  text-neutral-100 text-center">
        Add payment methd
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/playlistPlus.svg"
      />
    </button>
  );
};

export default AddPaymentMethodBtn;
