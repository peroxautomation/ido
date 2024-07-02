/**
 * Selected video container used on create screens
 * @param {*} selectedImage The selected video
 * @returns
 */
const SelectedVideoContainer1 = (props) => {
  const { selectedImage } = props;
  console.log(selectedImage);

  return (
    <video
      className={`self-stretch relative h-[50vh] overflow-hidden shrink-0 bg-[] bg-cover bg-no-repeat bg-[top] `}
      controls
      style={{
        backgroundImage: `url(/public${selectedImage})`,
      }}
    ></video>
  );
};
export default SelectedVideoContainer1;
