const RadioButtonDefault = (props) => {
  const { name, value, id } = props;
  return (
    <div
      id={id}
      className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        className="absolute opacity-0 w-0 h-0"
      />
      <img
        className="absolute top-[0.125rem] left-[0.125rem] rounded-[50%] w-[1.25rem] h-[1.25rem]"
        src="/ellipse-1248.svg"
        alt="Default Radio"
      />
      <img
        className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0  hidden`}
        alt="Selected Radio"
        src="/radio-button-filled.svg"
      />
    </div>
  );
};

export default RadioButtonDefault;
