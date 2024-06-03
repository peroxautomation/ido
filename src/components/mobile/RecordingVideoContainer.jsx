import PropTypes from "prop-types";

const RecordingVideoContainer = ({ className = "" }) => {
  return (
    <video
      className={`absolute top-[5.5rem] left-[1.25rem] rounded-2xl w-[20.938rem] h-[calc(100vh-40vh)] overflow-hidden bg-[url('/public/choosing-video-container@2x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    />
  );
};

RecordingVideoContainer.propTypes = {
  className: PropTypes.string,
};

export default RecordingVideoContainer;
