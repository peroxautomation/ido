const PlayButton = (props) => {
  const { className, onClick } = props;
  return (
    <img
      className={`cursor-pointer absolute top-[8.75rem] left-[calc(50%_-_28.5px)] w-[3.5rem] h-[3.5rem] overflow-hidden `}
      alt=""
      src="/hugeiconmultimedia-and-audiosolidplay1.svg"
    />
  );
};

export default PlayButton;
