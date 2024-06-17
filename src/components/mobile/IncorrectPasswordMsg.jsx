/**
 * Incorrect password message component
 * */
const IncorrectPasswordMsg = ({ className = ""}) => {
  return (
    <div
      id="incoorectPassword"
      className={`w-[335px] hidden flex flex-row items-center justify-start px-0 box-border gap-[8px] text-left text-sm text-danger-500 font-button-1-semibold ${className}`}
    >
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
