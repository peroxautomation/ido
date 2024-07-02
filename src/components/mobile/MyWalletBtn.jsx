/**
 * Button for my wallet screen
 * @param {*} cTA The button label
 * @param {*} imageSrc The button image
 * @param {*} onClick On click function
 * @returns 
 */
const MyWalletBtn = (props) => {
  const { cTA, imageSrc, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`my-wallet-btn`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold  text-neutral-100 text-center">
        {cTA}
      </div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src={imageSrc}
      />
    </button>
  );
};

export default MyWalletBtn;
