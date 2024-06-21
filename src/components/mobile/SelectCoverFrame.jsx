const SelectCoverFrame = (props) => {
  const { style } = props;
  return (
    <img
      className={`flex-shrink-0 relative w-[3.125rem] h-[3.5rem] overflow-hidden object-cover `}
      alt=""
      src="/edit-cover-img@2x.png"
      style={style}
    />
  );
};

export default SelectCoverFrame;
