const SegmentedButton2 = (props) => {
  const { placeholder, onClick, className} = props;
  return (
    <div
      onClick={onClick}
      className={`flex-1 rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem] text-left text-[0.75rem] text-neutral-100 font-overline-semibold ${className}`}
    >
      <div className="relative leading-[1rem] font-semibold">{placeholder}</div>
    </div>
  );
};

export default SegmentedButton2;
