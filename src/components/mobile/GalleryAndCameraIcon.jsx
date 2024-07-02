import SelectGallery from "./SelectGallery";
import CameraIcon from "./CameraIcon";
import { useNavigate } from "react-router-dom";

/**
 * Component for Camera icon and select from gallery button
 * @param {*} flow The current create flow
 * @returns
 */
const GalleryAndCameraIcon = (props) => {
  const navigate = useNavigate();
  const { flow } = props;

  // Navigate to Challenge Recording
  const onCameraClick = () => {
    navigate(`/create/${flow}/recording`, { state: { flow: flow } });
  };

  // Open native gallery
  const onGalleryClick = () => {
    console.log("Opening gallery...");
  };

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
