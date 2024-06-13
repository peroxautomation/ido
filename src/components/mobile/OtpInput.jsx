const OtpInput = ({ className = "", onInput}) => {
  const validateInput = (event) => {
    event.currentTarget.value = event.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    onInput(event.currentTarget.value);
  }
  return (
    <input
      onInput={validateInput}
      className={`[border:none] [outline:none] font-button-1-semibold text-xl bg-white bg-opacity-15 w-[45px] relative rounded-lg h-12 overflow-hidden shrink-0 py-2.5 px-[17px] box-border text-white ${className}`}
      type="text"
      maxLength={1}
    />
  );
};

export default OtpInput;
