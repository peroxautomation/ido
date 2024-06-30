const GhostBtn = (props) => {
  const { className = "", text = "View all", onClick } = props;
  return (
    <div
      className={`cursor-pointer hover:opacity-80 rounded-2xl flex flex-row items-center justify-center py-2 px-0 gap-[8px] text-center text-base text-primary-500 font-overline-regular ${className}`}
      onClick={onClick}
    >
      <div className="relative leading-[24px] font-semibold">{text}</div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 object-contain"
        alt=""
        src="/hugeiconarrowsoutlinedirectionright@2x.png"
      />
    </div>
  );
};

export default GhostBtn;
