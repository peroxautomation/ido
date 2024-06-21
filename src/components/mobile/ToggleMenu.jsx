/**
 * Toggle switch component used in settings
 * @param {*} param0
 * @returns
 */
const ToggleMenu = (props) => {
  const { toggle, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`self-stretch flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem]">
        <div className="flex-1 relative leading-[1.5rem]">{toggle}</div>
        <div className="w-[3rem] relative rounded-smi bg-neutral-600 h-[1.5rem] overflow-hidden shrink-0">
          <div className="duration-200 relative top-[0.125rem] left-[0.125rem] rounded-[50%] bg-neutral-100 w-[1.25rem] h-[1.25rem]" />
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
