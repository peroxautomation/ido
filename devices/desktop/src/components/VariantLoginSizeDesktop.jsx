import { useMemo } from "react";

const VariantLoginSizeDesktop = (props) => {
  const {
    className = "",
    alreadyHaveAnAccount,
    login,
    loginTextDecoration,
    signUpPage,
    loginPage,
  } = props;
  const login1Style = useMemo(() => {
    return {
      textDecoration: loginTextDecoration,
    };
  }, [loginTextDecoration]);

  return (
    <div
      className={`w-80 flex flex-row items-center justify-center py-2 px-0 box-border gap-[8px] text-center text-base text-neutral-200 font-overline-regular ${className}`}
    >
      <div
        className="cursor-pointer hover:opacity-80 relative leading-[24px] font-semibold"
        onClick={loginPage}
      >
        {alreadyHaveAnAccount}
      </div>
      <div
        className="cursor-pointer hover:opacity-80 relative leading-[24px] font-semibold text-primary-500"
        style={login1Style}
        onClick={signUpPage}
      >
        {login}
      </div>
    </div>
  );
};

export default VariantLoginSizeDesktop;
