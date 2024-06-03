import PropTypes from "prop-types";
import SelectGallery from "./SelectGallery";
import CameraIcon from "./CameraIcon";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GalleryAndCameraIcon = ({ className = "", flow }) => {
  const navigate = useNavigate();

  // Navigate to Challenge Recording
  const onCameraClick = useCallback(() => {
    navigate(`/create/${flow}/recording`, {state: {flow: flow}});
  }, [navigate]);

  // Open native gallery
  const onGalleryClick = useCallback(() => {
    console.log('Opening gallery...');
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-row items-start justify-between">
      <SelectGallery ctaClick={onGalleryClick}/>
      {(flow !== "cover") ? <CameraIcon ctaClick={onCameraClick}/> : <CameraIcon className="hidden" ctaClick={onCameraClick}/> }
    </div>
  );
};

GalleryAndCameraIcon.propTypes = {
  className: PropTypes.string,
};

export default GalleryAndCameraIcon;
