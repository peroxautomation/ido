/**
 * Previous frame button for comparison result screen.
 * @param {*} props
 * @returns
 */
const PrevFrameBtn = (props) => {
  const {} = props;
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] [transform:_rotate(-90deg)] w-[1.5rem] left-[50%] absolute h-[1.5rem] overflow-hidden shrink-0 bottom-[2%]`}
    >
      <img
        className="absolute h-[45.83%] w-9/12 top-[27.08%] right-[12.5%] bottom-[27.08%] left-[12.5%] max-w-full overflow-hidden max-h-full transform scale-x-[-1]"
        alt=""
        src="/nextFrameBtn.svg"
      />
    </button>
  );
};

export default PrevFrameBtn;
