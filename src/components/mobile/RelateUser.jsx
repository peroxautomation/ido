const RelateUser = (props) => {
  const { rectangle2002 } = props;
  return (
    <div
      className={`w-[23.438rem] flex flex-row items-center justify-start py-[0.75rem] px-[1.25rem] box-border gap-[1.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          className="w-[3rem] relative rounded-3xl h-[3rem] object-cover"
          alt=""
          src={rectangle2002}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[1.5rem] font-semibold">
            User name
          </div>
          <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-400">
            Desc
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.25rem] px-[0.375rem] bg-neutral-800 w-[4rem] rounded-md flex flex-row items-center justify-center box-border">
        <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-right">
          Unrelate
        </div>
      </button>
    </div>
  );
};

export default RelateUser;
