const OtpInput = ({ className = "" }) => {
  return (
    <input
      className={`[border:none] [outline:none] font-button-1-semibold text-xl bg-white bg-opacity-15 w-[45px] relative rounded-lg h-12 overflow-hidden shrink-0 py-2.5 px-[17px] box-border text-white ${className}`}
      type="text"
    />
  );
};

export default OtpInput;
