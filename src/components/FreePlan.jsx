const FreePlan = () => {
    return (
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-center text-13xl text-neutral-100 font-body-regular">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center py-0 px-2 border-r-[1px] border-solid border-neutral-700">
            <div className="relative leading-[40px] font-semibold">{`$0 `}</div>
          </div>
          <div className="flex flex-row items-center justify-center py-0 px-2 text-left text-sm">
            <div className="relative leading-[20px] font-semibold">
              <p className="m-0">{`per `}</p>
              <p className="m-0">month</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px] text-base">
          <div className="self-stretch relative leading-[24px]">
            All from free
          </div>
          <div className="self-stretch relative leading-[24px]">
            Create unlimited
          </div>
          <div className="self-stretch relative leading-[24px]">
            Create unlimited
          </div>
          <div className="self-stretch relative leading-[24px]">
            Create unlimited
          </div>
          <div className="self-stretch relative leading-[24px]">
            Remix unlimited
          </div>
        </div>
      </div>
    );
  };
  
  export default FreePlan;
  