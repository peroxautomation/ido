import OtpInput from "./OTPInput";
import IncorrectOTPMsg from "./IncorrectOTPMsg";

const OTPInputs = ({ className = "", onInput}) => {

  return (
    <div
      id="otpInput"
      className={`flex flex-col items-start justify-start gap-[8px] text-left text-base text-danger-500 font-button-1-semibold ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[13px]">
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
      </div>
      <IncorrectOTPMsg />
    </div>
  );
};


export default OTPInputs;
