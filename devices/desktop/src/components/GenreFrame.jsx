import { useMemo } from "react";
import SizeDesktopGenre from "./SizeDesktopGenre";
import PropTypes from "prop-types";

const GenreFrame = ({
  className = "",
  propBackgroundImage,
  propBackgroundImage1,
  propBackgroundImage2,
  propBackgroundImage3,
  propBackgroundImage4,
  propBackgroundImage5,
  propBackgroundImage6,
  propBackgroundImage7,
}) => {
  const sizeDesktopGenreStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const sizeDesktopGenreStyle1 = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const sizeDesktopGenreStyle2 = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage2,
    };
  }, [propBackgroundImage2]);

  const sizeDesktopGenreStyle3 = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage3,
    };
  }, [propBackgroundImage3]);

  const sizeDesktopGenreStyle4 = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage4,
    };
  }, [propBackgroundImage4]);

  const sizeDesktopGenreStyle5 = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage5,
    };
  }, [propBackgroundImage5]);

  const sizeDesktopGenreStyle6 = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage6,
    };
  }, [propBackgroundImage6]);

  const sizeDesktopGenreStyle7 = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage7,
    };
  }, [propBackgroundImage7]);

  return (
    <section
      className={`absolute w-[calc(100%_-_360px)] top-[148px] right-[48px] left-[312px] h-[130px] overflow-x-auto flex flex-row items-start justify-start overscroll-y-auto ${className}`}
    >
      <div className="w-[1240px] relative h-[130px] shrink-0">
        <SizeDesktopGenre
          genreName="Ballroom"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="0px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="34px"
        />
        <SizeDesktopGenre
          genreName="Contemporary"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="158px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="16px"
        />
        <SizeDesktopGenre
          genreName="Cultural"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="316px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="38px"
        />
        <SizeDesktopGenre
          genreName="Hip Hop"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="474px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="37px"
        />
        <SizeDesktopGenre
          genreName="Jazz"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="632px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="53px"
        />
        <SizeDesktopGenre
          genreName="Tap"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="790px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="54px"
        />
        <SizeDesktopGenre
          genreName="Folk"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="948px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="52px"
        />
        <SizeDesktopGenre
          genreName="Modern"
          sizeDesktopGenreWidth="134px"
          sizeDesktopGenreBackgroundImage="url('/card5@3x.png')"
          sizeDesktopGenrePosition="absolute"
          sizeDesktopGenreTop="0px"
          sizeDesktopGenreLeft="1106px"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="39px"
        />
      </div>
    </section>
  );
};

GenreFrame.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propBackgroundImage2: PropTypes.any,
  propBackgroundImage3: PropTypes.any,
  propBackgroundImage4: PropTypes.any,
  propBackgroundImage5: PropTypes.any,
  propBackgroundImage6: PropTypes.any,
  propBackgroundImage7: PropTypes.any,
};

export default GenreFrame;
