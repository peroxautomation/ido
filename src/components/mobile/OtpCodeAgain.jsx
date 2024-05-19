const OtpCodeAgain = ({ onAskAgainTextClick }) => {
  return (
    <div className="w-[335px] flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px] text-center text-base text-neutral-200 font-button-2-semibold">
      <div className="relative leading-[24px] font-semibold">
        Didin’t get a code?
      </div>
      <div
        className="relative leading-[24px] font-semibold text-primary-500"
        onClick={onAskAgainTextClick}
      >
        {" "}
        Ask again
      </div>
    </div>
  );
};

export default OtpCodeAgain;
