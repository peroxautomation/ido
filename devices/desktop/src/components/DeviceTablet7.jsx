import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const DeviceTablet7 = (props) => {
  const {
    className = "",
    front,
    nameOfPlaylist = "Want to try",
    createdText = "Created - Apr",
    deviceTabletPosition,
    deviceTabletTop,
    deviceTabletLeft,
  } = props;

  const navigate = useNavigate();

  const deviceTablet5Style = useMemo(() => {
    return {
      position: deviceTabletPosition,
      top: deviceTabletTop,
      left: deviceTabletLeft,
    };
  }, [deviceTabletPosition, deviceTabletTop, deviceTabletLeft]);

  async function redirectUser() {
    navigate("/d-playlists");
  }

  return (
    <div
      className={`hover:opacity-60 w-[340px] flex flex-row items-start justify-start py-4 px-0 box-border gap-[15px] text-left text-sm text-neutral-500 font-overline-regular ${className}`}
      style={deviceTablet5Style}
    >
      <img
        className="cursor-pointer flex-1 relative rounded-xl max-w-full overflow-hidden h-[100px] object-cover"
        alt=""
        src={front}
        onClick={redirectUser}
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="relative text-base leading-[24px] text-neutral-100">
          {nameOfPlaylist}
        </div>
        <div className="relative leading-[20px]">Playlist</div>
        <div className="relative leading-[20px]">{createdText}</div>
      </div>
      <img
        className="cursor-pointer w-6 relative h-6 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/hugeiconinterfacesolidmorevertical@2x.png"
      />
    </div>
  );
};

export default DeviceTablet7;
