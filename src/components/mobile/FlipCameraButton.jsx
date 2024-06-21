const FlipCameraButton = (props) => {
  const { ctaClick } = props;
  return (
    <div onClick={ctaClick}>
      <img
        className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0`}
        alt=""
        src="/hugeiconarrowsoutlinereload.svg"
      />
    </div>
  );
};

export default FlipCameraButton;
