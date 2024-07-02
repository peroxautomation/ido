/**
 * Toggle switch component used in settings
 * @param label Notification label
 * @param onClick On click function
 * @param class1  Styling class 1
 * @param class2  Styling class 2
 * @param id  Notification id
 * @returns A JSX element
 */
const ToggleMenu = (props) => {
  const { label, onClick, class1, class2, id } = props;
  return (
    <div onClick={() => onClick(id)} className={`notifications-toggle`}>
      <div
        className={`self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem]`}
      >
        <div className={`flex-1 relative leading-[1.5rem`}>{label}</div>
        <div
          className={`w-[3rem] relative rounded-smi bg-neutral-600 h-[1.5rem] overflow-hidden shrink-0 ${class1}`}
        >
          <div
            className={`duration-200 relative top-[0.125rem] left-[0.125rem] rounded-[50%] bg-neutral-100 w-[1.25rem] h-[1.25rem] ${class2}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
