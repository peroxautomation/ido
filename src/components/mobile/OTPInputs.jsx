import OtpInput from "./OTPInput";

/**
 * OTP Inputs container component
 * @param {*} onInput Handle OTP inputs
 * @returns A JSX element
 */
const OTPInputs = (props) => {
  const { onInput } = props;
  return (
    <div>
      <div id="otpInput" className="otp-input-container">
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
        <OtpInput onInput={onInput} />
      </div>
      <span
        className={`w-[335px] relative text-base leading-[24px] font-button-1-semibold text-danger-500 text-left hidden`}
      >
        Incorrect OTP
      </span>
    </div>
  );
};

export default OTPInputs;
