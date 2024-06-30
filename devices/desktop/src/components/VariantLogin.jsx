import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantLogin = ({
  className = "",
  alreadyHaveAnAccount,
  login,
  variantLoginAlignSelf,
  variantLoginPosition,
  variantLoginTop,
  variantLoginLeft,
  variantLoginWidth,
  loginTextDecoration,
}) => {
  const variantLoginStyle = useMemo(() => {
    return {
      alignSelf: variantLoginAlignSelf,
      position: variantLoginPosition,
      top: variantLoginTop,
      left: variantLoginLeft,
      width: variantLoginWidth,
    };
  }, [
    variantLoginAlignSelf,
    variantLoginPosition,
    variantLoginTop,
    variantLoginLeft,
    variantLoginWidth,
  ]);

  const loginStyle = useMemo(() => {
    return {
      textDecoration: loginTextDecoration,
    };
  }, [loginTextDecoration]);

  return (
    <div
      className={`flex flex-row items-center justify-center py-2 px-0 box-border gap-[8px] text-center text-base text-neutral-200 font-overline-regular self-stretch ${className}`}
      style={variantLoginStyle}
    >
      <div className="relative leading-[24px] font-semibold">
        {alreadyHaveAnAccount}
      </div>
      <div
        className="relative leading-[24px] font-semibold text-primary-500"
        style={loginStyle}
      >
        {login}
      </div>
    </div>
  );
};

VariantLogin.propTypes = {
  className: PropTypes.string,
  alreadyHaveAnAccount: PropTypes.string,
  login: PropTypes.string,

  /** Style props */
  variantLoginAlignSelf: PropTypes.any,
  variantLoginPosition: PropTypes.any,
  variantLoginTop: PropTypes.any,
  variantLoginLeft: PropTypes.any,
  variantLoginWidth: PropTypes.any,
  loginTextDecoration: PropTypes.any,
};

export default VariantLogin;
