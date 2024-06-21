const DeleteCardBtn = (props) => {
  const {} = props;
  const onDeleteClick = () => {
    const element = document.getElementById("ProfileDeleteDancePopup");
    element.classList.toggle("hidden");
  };

  return (
    <button
      onClick={onDeleteClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 `}
    >
      <img
        className="absolute h-[83.33%] w-9/12 top-[8.33%] right-[12.5%] bottom-[8.33%] left-[12.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector13.svg"
      />
    </button>
  );
};

export default DeleteCardBtn;
