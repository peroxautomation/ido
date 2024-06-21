/**
 *  Buttton for cancel popups
 * @returns A JSX element
 */
const CancelSubscriptionBtn = (props) => {
  const {} = props;
  const onDeleteClick = () => {
    const element = document.getElementById("ProfileDeleteDancePopup");
    element.classList.toggle("hidden");
  };

  return (
    <button
      onClick={onDeleteClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 absolute w-[calc(100%_-_200px)] right-[6.75rem] bottom-[15.688rem] left-[6.75rem] rounded-lg flex flex-row items-center justify-center box-border`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-danger-500 text-center text-nowrap px-1">
        Cancel subscription
      </div>
    </button>
  );
};

export default CancelSubscriptionBtn;
