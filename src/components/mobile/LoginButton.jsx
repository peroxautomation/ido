import { useMemo } from "react";

/**
 * CTA button component used in all the login and sign-up user flow
 * @param {*}  
 * @returns Button Tag
 */
const LoginButton = ({
  text = "CTA",
  hugeIconeducationsolidpen,
  icon = true,
  statePrimarySizeDefaultVBorder,
  statePrimarySizeDefaultVTextDecoration,
  statePrimarySizeDefaultVAlignSelf,
  statePrimarySizeDefaultVPosition,
  statePrimarySizeDefaultVTop,
  statePrimarySizeDefaultVLeft,
  statePrimarySizeDefaultVWidth,
  onCTAClick,
}) => {
  const statePrimarySizeDefaultVStyle = useMemo(() => {
    return {
      border: statePrimarySizeDefaultVBorder,
      textDecoration: statePrimarySizeDefaultVTextDecoration,
      alignSelf: statePrimarySizeDefaultVAlignSelf,
      position: statePrimarySizeDefaultVPosition,
      top: statePrimarySizeDefaultVTop,
      left: statePrimarySizeDefaultVLeft,
      width: statePrimarySizeDefaultVWidth,
    };
  }, [
    statePrimarySizeDefaultVBorder,
    statePrimarySizeDefaultVTextDecoration,
    statePrimarySizeDefaultVAlignSelf,
    statePrimarySizeDefaultVPosition,
    statePrimarySizeDefaultVTop,
    statePrimarySizeDefaultVLeft,
    statePrimarySizeDefaultVWidth,
  ]);

  return (
    <button
      className="rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-white font-button-2-semibold self-stretch"
      style={statePrimarySizeDefaultVStyle}
      onClick={onCTAClick}
    >
      <div className="relative leading-[24px] font-semibold">{text}</div>
      {icon && (
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src={hugeIconeducationsolidpen}
        />
      )}
    </button>
  );
};

export default LoginButton;
