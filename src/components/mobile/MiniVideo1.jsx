import { useMemo } from "react";

const MiniVideo1 = (props) => {
  const { miniVideosBackgroundImage } = props;

  const miniVideosStyle = useMemo(() => {
    return {
      backgroundImage: miniVideosBackgroundImage,
    };
  }, [miniVideosBackgroundImage]);

  return (
    <div
      className={`flex-1 relative h-[5.125rem] w-[5.7rem] overflow-hidden bg-[url('/public/mini-videos@2x.png')] bg-cover bg-no-repeat bg-[top]`}
      style={miniVideosStyle}
    />
  );
};


export default MiniVideo1;
