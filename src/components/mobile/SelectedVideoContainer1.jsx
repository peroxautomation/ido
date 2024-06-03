import PropTypes from "prop-types";

const SelectedVideoContainer1 = ({ className = "" }) => {
  return (
    <video
      className={`self-stretch relative h-[50vh] overflow-hidden shrink-0 bg-[url('/public/choosing-video-container@2x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
      controls
    >
    </video>
  );
};

SelectedVideoContainer1.propTypes = {
  className: PropTypes.string,
};

export default SelectedVideoContainer1;
