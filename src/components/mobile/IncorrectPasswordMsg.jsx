/**
 * Incorrect password message component
 * @returns A JSX element
 */
const IncorrectPasswordMsg = () => {
  return (
    <div id="incoorectPassword" className={`incorrect-password-msg`}>
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src="/passwordWarningError.svg"
      />
      <div className="flex-1 relative leading-[20px]">Incorrect password</div>
    </div>
  );
};

export default IncorrectPasswordMsg;
