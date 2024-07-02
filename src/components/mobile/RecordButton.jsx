const RecordButton = (props) => {
  const { ctaClick } = props;
  return (
    <div
      onClick={ctaClick}
      className={`w-[3rem] relative rounded-[50%] bg-danger-500 h-[3rem] `}
    />
  );
};

export default RecordButton;
