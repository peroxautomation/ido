//TODO: See the difference between this and SelectedVideoContainer
const SelectedVideoContainer1 = (props) => {
  const {} = props;
  return (
    <video
      className={`self-stretch relative h-[50vh] overflow-hidden shrink-0 bg-[url('/public/choosing-video-container@2x.png')] bg-cover bg-no-repeat bg-[top] `}
      controls
    ></video>
  );
};
export default SelectedVideoContainer1;
