import { useMemo } from "react";

const ForgotPassword = ({ forgotPasswordText }) => {
  const forgotPasswordStyle = useMemo(() => {
    return {
      textDecoration: forgotPasswordText,
    };
  }, [forgotPasswordText]);

  return (
    <div className="flex flex-row items-start justify-end py-2 px-0 box-border gap-[145px] text-left text-base text-white font-button-2-semibold self-stretch">
      <div className="w-[266px] relative leading-[24px] font-semibold hidden">
        Trending now
      </div>
      <a
        className="relative leading-[24px] font-semibold text-right text-white hover:text-primary-500"
        style={forgotPasswordStyle}
        href="/forgot-password"
      >
        Forgot password
      </a>
    </div>
  );
};

export default ForgotPassword;
