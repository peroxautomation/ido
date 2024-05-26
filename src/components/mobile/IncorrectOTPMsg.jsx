const IncorrectOTPMsg = ({ className = "" }) => {
  return (
    <span
      className={`w-[335px] relative text-base leading-[24px] font-button-1-semibold text-danger-500 text-left hidden ${className}`}
    >
      Incorrect OTP
    </span>
  );
};


export default IncorrectOTPMsg;
