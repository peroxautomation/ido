import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SizeDesktopGenre = (props) => {
  const {
    genreName,
    sizeDesktopGenreWidth,
    sizeDesktopGenreBackgroundImage,
    sizeDesktopGenrePosition,
    sizeDesktopGenreTop,
    sizeDesktopGenreLeft,
    sizeDesktopGenreHeight,
    sizeDesktopGenreAlignSelf,
    sizeDesktopGenreFlex,
    genreNameLeft,
  } = props;

  const navigate = useNavigate();
  const sizeDesktopGenreStyle = useMemo(() => {
    return {
      width: sizeDesktopGenreWidth,
      backgroundImage: sizeDesktopGenreBackgroundImage,
      position: sizeDesktopGenrePosition,
      top: sizeDesktopGenreTop,
      left: sizeDesktopGenreLeft,
      height: sizeDesktopGenreHeight,
      alignSelf: sizeDesktopGenreAlignSelf,
      flex: sizeDesktopGenreFlex,
    };
  }, [
    sizeDesktopGenreWidth,
    sizeDesktopGenreBackgroundImage,
    sizeDesktopGenrePosition,
    sizeDesktopGenreTop,
    sizeDesktopGenreLeft,
    sizeDesktopGenreHeight,
    sizeDesktopGenreAlignSelf,
    sizeDesktopGenreFlex,
  ]);

  const genreNameStyle = useMemo(() => {
    return {
      left: genreNameLeft,
    };
  }, [genreNameLeft]);

  async function redirectUser() {
    navigate("/d-search-result");
  }

  return (
    // <div
    //   className={`w-[130px] rounded-2xl h-[130px] overflow-hidden bg-[url('/public/sizedesktop-genre@3x.png')] text-center text-base text-neutral-100 font-overline-regular ${className}`}
    //   style={{
    //     "background-image": `url(${sizeDesktopGenreBackgroundImage})`,
    //     "background-repeat": "no-repeat",
    //     "background-size": "cover",
    //     "background-position": "top",
    //   }}
    // >
    <div
      className={`cursor-pointer hover:opacity-80 w-[130px] rounded-2xl h-[130px] overflow-hidden bg-[url('/public/sizedesktop-genre@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-neutral-100 font-overline-regular`}
      style={sizeDesktopGenreStyle}
      onClick={redirectUser}
    >
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b-2xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] h-9" />
      <div
        className="absolute bottom-[7px] left-[21px] leading-[24px]"
        style={genreNameStyle}
      >
        {genreName}
      </div>
    </div>
  );
};

export default SizeDesktopGenre;
