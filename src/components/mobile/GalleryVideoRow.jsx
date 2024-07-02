import GalleryVideo from "./GalleryVideo";

/**
 * User gallery video rows
 * @param imageSrc Gallery media source
 * @param onImageClick Function to update the selected image
 * @returns
 */
const GalleryVideoRow = (props) => {
  const { imageSrc, onImageClick } = props;

  return (
    <div className={`gallery-video-row`}>
      <GalleryVideo
        miniVideosBackgroundImage={imageSrc}
        onImageClick={onImageClick}
      />
      <GalleryVideo
        miniVideosBackgroundImage={imageSrc}
        onImageClick={onImageClick}
      />
      <GalleryVideo
        miniVideosBackgroundImage={imageSrc}
        onImageClick={onImageClick}
      />
      <GalleryVideo
        miniVideosBackgroundImage={imageSrc}
        onImageClick={onImageClick}
      />
    </div>
  );
};

export default GalleryVideoRow;
