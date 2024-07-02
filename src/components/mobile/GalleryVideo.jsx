import { useMemo } from "react";

/**
 * User gallery video box
 * @param {*} miniVideosBackgroundImage Gallery media source
 * @param onImageClick Function to update the selected image
 * @returns A JSX element
 */
const GalleryVideo = (props) => {
  const { onImageClick, miniVideosBackgroundImage } = props;

  return (
    <div
      onClick={() => onImageClick(miniVideosBackgroundImage)}
      className={`gallery-video`}
      style={{
        backgroundImage: `url(/public${miniVideosBackgroundImage})`,
      }}
    />
  );
};

// bg-[url('/public/mini-videos@2x.png')]
export default GalleryVideo;
