import { useMemo } from "react";

const TermsAndConditionsForgotPa = (props) => {
  const {
    onClick,
    termsAndConditionsForgotPAlignSelf,
    termsAndConditionsForgotPWidth,
    forgotPasswordTextDecoration,
  } = props;
  const termsAndConditionsForgotPaStyle = useMemo(() => {
    return {
      alignSelf: termsAndConditionsForgotPAlignSelf,
      width: termsAndConditionsForgotPWidth,
    };
  }, [termsAndConditionsForgotPAlignSelf, termsAndConditionsForgotPWidth]);

  const forgotPasswordStyle = useMemo(() => {
    return {
      textDecoration: forgotPasswordTextDecoration,
    };
  }, [forgotPasswordTextDecoration]);

  return (
    <div
      className={`cursor-pointer hover:opacity-80 flex flex-row items-start justify-end py-2 px-0 box-border gap-[145px] text-left text-base text-neutral-100 font-overline-regular self-stretch`}
      style={termsAndConditionsForgotPaStyle}
      onClick={onClick}
    >
      <div className="w-[266px] relative leading-[24px] font-semibold hidden">
        Trending now
      </div>
      <div
        className="relative leading-[24px] font-semibold text-right"
        style={forgotPasswordStyle}
      >
        Forgot password
      </div>
    </div>
  );
};

export default TermsAndConditionsForgotPa;
