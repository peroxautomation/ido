/**
 * OTP Input component
 * @param {*} onInput Handle OTP inputs
 * @param {*} onInput Handle OTP inputs
 * @returns A JSX element
 */
const OtpInput = (props) => {
  const { onInput } = props;
  /**************************************************************************************** */
  /********************************{Component Functions}********************************** */
  /*************************************************************************************** */
  const validateInput = (event) => {
    event.currentTarget.value = event.currentTarget.value.replace(/[^0-9]/g, "")
    onInput(); //Update OTP value state
  };
  return (
    <input
      onInput={validateInput}
      className={`otp-input`}
      type="text"
      maxLength={1}
    />
  );
};

export default OtpInput;
