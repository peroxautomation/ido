/**
 * Play video button component for selected video
 * @param {*} onClick On click function
 * @returns A JSX Element
 */
const PlayButton = (props) => {
  const { onClick } = props;
  return (
    <img
      className={`selected-video-play-btn`}
      alt=""
      src="/hugeiconmultimedia-and-audiosolidplay1.svg"
    />
  );
};

export default PlayButton;
