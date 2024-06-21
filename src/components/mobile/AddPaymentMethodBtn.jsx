import { useNavigate } from "react-router-dom";

const AddPaymentMethodBtn = (props) => {
  const navigate = useNavigate();
  const {} = props;
  // Navigate to add card
  const onAddClick = () => {
    navigate("/profile/add-payment");
  };

  return (
    <button
      onClick={onAddClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-primary-500 w-[20.938rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem]`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
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
