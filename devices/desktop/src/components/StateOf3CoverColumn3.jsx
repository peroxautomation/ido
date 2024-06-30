import { useMemo } from "react";

const StateOf3CoverColumn3 = (props) => {
  const {
    className = "",
    myDance,
    hugeIconarrowssoliddirect,
    cover,
    playlist,
    showHugeIconarrowssoliddirect,
    stateOf3CoverColumn33Width,
    stateOf3CoverColumn33Position,
    stateOf3CoverColumn33Top,
    stateOf3CoverColumn33Right,
    stateOf3CoverColumn33Left,
    divBackgroundColor,
    myDanceColor,
    myDanceFontWeight,
    divBackgroundColor1,
    coverFontWeight,
    coverColor,
    divBackgroundColor2,
    playlistColor,
    playlistFontWeight,
    openMyDance,
    openCover,
    openPlaylist,
  } = props;
  const stateOf3CoverColumn33Style = useMemo(() => {
    return {
      width: stateOf3CoverColumn33Width,
      position: stateOf3CoverColumn33Position,
      top: stateOf3CoverColumn33Top,
      right: stateOf3CoverColumn33Right,
      left: stateOf3CoverColumn33Left,
    };
  }, [
    stateOf3CoverColumn33Width,
    stateOf3CoverColumn33Position,
    stateOf3CoverColumn33Top,
    stateOf3CoverColumn33Right,
    stateOf3CoverColumn33Left,
  ]);

  const div1Style = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor,
    };
  }, [divBackgroundColor]);

  const myDanceStyle = useMemo(() => {
    return {
      color: myDanceColor,
      fontWeight: myDanceFontWeight,
    };
  }, [myDanceColor, myDanceFontWeight]);

  const div2Style = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor1,
    };
  }, [divBackgroundColor1]);

  const coverStyle = useMemo(() => {
    return {
      fontWeight: coverFontWeight,
      color: coverColor,
    };
  }, [coverFontWeight, coverColor]);

  const div3Style = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor2,
    };
  }, [divBackgroundColor2]);

  const playlistStyle = useMemo(() => {
    return {
      color: playlistColor,
      fontWeight: playlistFontWeight,
    };
  }, [playlistColor, playlistFontWeight]);

  return (
    <div
      className={`w-[696px] rounded-xl bg-neutral-800 max-w-full flex flex-row items-center justify-center text-left text-base text-neutral-500 font-overline-regular ${className}`}
      style={stateOf3CoverColumn33Style}
    >
      <div
        className="cursor-pointer hover:opacity-80 flex-1 rounded-xl flex flex-row items-center justify-center py-3 px-1 gap-[8px]"
        style={div1Style}
        onClick={openMyDance}
      >
        <div className="relative leading-[24px]" style={myDanceStyle}>
          {myDance}
        </div>
        {showHugeIconarrowssoliddirect && (
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src={hugeIconarrowssoliddirect}
          />
        )}
      </div>
      <div
        className="cursor-pointer hover:opacity-80 flex-1 rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-3 px-1 text-neutral-100"
        style={div2Style}
        onClick={openCover}
      >
        <div
          className="relative leading-[24px] font-semibold"
          style={coverStyle}
        >
          {cover}
        </div>
      </div>
      <div
        className="cursor-pointer hover:opacity-80 flex-1 rounded-xl flex flex-row items-center justify-center py-3 px-1"
        style={div3Style}
        onClick={openPlaylist}
      >
        <div className="relative leading-[24px]" style={playlistStyle}>
          {playlist}
        </div>
      </div>
    </div>
  );
};

export default StateOf3CoverColumn3;
