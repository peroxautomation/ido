const IncorrectPasswordText = () => {
  return (
    <div className="w-[335px] flex flex-row items-center justify-start py-1 px-0 box-border gap-[8px] text-left text-sm text-danger-500 font-button-2-semibold">
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlinewarningerror.svg"
      />
      <div className="flex-1 relative leading-[20px]">Incorrect password</div>
    </div>
  );
};

export default IncorrectPasswordText;
