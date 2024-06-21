const UserComment = (props) => {
  const { ellipse1198 } = props;
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
          <img
            className="w-[1.5rem] relative rounded-[50%] h-[1.5rem] object-cover"
            alt=""
            src={ellipse1198}
          />
          <div className="flex-1 relative leading-[1.5rem] font-semibold w-[13rem] ">
            Viktoria Fedorova
          </div>
        </div>
        <div className="flex-1 relative text-[0.875rem] leading-[1.25rem] text-neutral-500 text-right">
          20 Apr 2024
        </div>
      </div>
      <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-400">
        Some comment to this postSome comment to this postSome comment to this
        post
      </div>
    </div>
  );
};

export default UserComment;
