/**
 * Next frame button for comparison result screen.
 * @param {*} props
 * @returns
 */
const NextFrameBtn = (props) => {
  const {} = props;
  return (
    <button
      className={`absolute cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] [transform:_rotate(-90deg)] h-[1.5rem] overflow-hidden shrink-0 top-[5%] left-[50%] !opacity-[100%]`}
    >
      <img
        className="absolute h-[45.83%] w-9/12 top-[27.08%] right-[12.5%] bottom-[27.08%] left-[12.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/nextFrameBtn.svg"
      />
    </button>
  );
};

export default NextFrameBtn;
