
const ProcessBar = (props) => {
  const {} = props;
  return (
    <div
      className={`flex-1 relative rounded-6xs bg-neutral-800 h-[0.875rem] overflow-hidden `}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-md bg-primary-500 w-[8.438rem] h-[0.875rem] overflow-hidden" />
    </div>
  );
};

export default ProcessBar;
