const SendMessageBtn = (props) => {
  const {} = props;
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 `}
    >
      <img
        className="absolute h-[66.67%] w-[86.25%] top-[16.67%] right-[8.33%] bottom-[16.67%] left-[5.42%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/send-fast@2x.png"
      />
    </button>
  );
};

export default SendMessageBtn;
