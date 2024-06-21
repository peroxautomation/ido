import SelectGallery from "./SelectGallery";
import CameraIcon from "./CameraIcon";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GalleryAndCameraIcon = (props) => {
  const navigate = useNavigate();
  const { flow} = props;
  
  // Navigate to Challenge Recording
  const onCameraClick = useCallback(() => {
    navigate(`/create/${flow}/recording`, { state: { flow: flow } });
  }, [navigate]);

  // Open native gallery
  const onGalleryClick = useCallback(() => {
    console.log("Opening gallery...");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-row items-start justify-between">
      <SelectGallery ctaClick={onGalleryClick} />
      {flow !== "cover" ? (
        <CameraIcon onIconClick={onCameraClick} />
      ) : (
        <CameraIcon isHidden={true} onIconClick={onCameraClick} />
      )}
    </div>
  );
};

export default GalleryAndCameraIcon;
