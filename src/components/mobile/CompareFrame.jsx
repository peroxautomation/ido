/**
 * Frame component for comparing moves
 * @param {*} imgSrc The image source for the frame
 * @returns
 */
const CompareFrame = (props) => {
  const { imgSrc } = props;
  return (
    <img
      className={`relative rounded-lg overflow-hidden w-[13em] object-cover [transform:_rotate(90deg)] `}
      alt=""
      src={imgSrc}
    />
  );
};

export default CompareFrame;
