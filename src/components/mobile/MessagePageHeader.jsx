const MessagePageHeader = (props) => {
  const { name, status } = props;
  return (
    <div
      className={`absolute top-[2.5rem] left-[calc(50%_-_187.5px)] bg-white-8 w-[23.438rem] flex flex-row items-center justify-start py-[1rem] px-[1.25rem] box-border gap-[1rem] text-left text-[1rem] text-neutral-100 font-button-1-regular`}
    >
      <img
        onClick={() => history.back()}
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          className="w-[2.5rem] relative rounded-[50%] h-[2.5rem] object-cover"
          alt=""
          src="/ellipse-1250@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
          <div className="relative leading-[1.5rem] font-semibold">
            Oksana Ferrum
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.25rem] text-[0.75rem]">
            <div className="w-[0.5rem] relative rounded-[50%] bg-success-500 h-[0.5rem]" />
            <div className="relative leading-[1rem]">Online</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MessagePageHeader;
