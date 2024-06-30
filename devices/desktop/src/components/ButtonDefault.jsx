const ButtonDefault = (props) => {
  const { leftIcon, text, rightIcon, onClick, classStyle } = props;

  return (
    <div
      className={`btn-primary-active flex flex-row gap-[8px] ${classStyle}`}
      onClick={onClick}
    >
      {leftIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={leftIcon}
        />
      )}
      <div>{text}</div>

      {rightIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={rightIcon}
        />
      )}
    </div>
  );
};

export default ButtonDefault;
