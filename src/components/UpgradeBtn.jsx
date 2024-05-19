const UpgradeBtn = () => {
  return (
    <a className="[text-decoration:none] w-[168px] flex flex-row items-center justify-start py-3 pr-0 pl-4 box-border gap-[8px] text-left text-base text-neutral-100 font-body-regular">
      <div className="flex flex-row items-center justify-start gap-[15px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconinterfaceoutlinehome-04.svg"
        />
        <div className="relative leading-[24px]">Upgrade to</div>
      </div>
      <div className="rounded-lg bg-primary-500 flex flex-row items-center justify-center py-0 px-2">
        <div className="relative leading-[24px]">PRO</div>
      </div>
    </a>
  );
};

export default UpgradeBtn;
