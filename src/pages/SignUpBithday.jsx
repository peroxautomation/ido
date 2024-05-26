import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BirthdayWheelPicker from "../components/mobile/BirthdayWheelPicker";
import Title from "../components/mobile/Title";

/**
 * Sign up birthday Page
 * @returns JSX element
 */
const SignUpBithday1 = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/sign-up-country");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        returnPage="/sign-up"
        pageName="Sign up"
      />
      <section className="absolute w-[calc(100%_-_40px)] top-[121px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-100 font-button-1-regular">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">
            Set birthday date
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
            <div className="flex-1 relative leading-[24px]">Birthday</div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
          <input
            className="[border:none] [outline:none] font-button-1-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-start py-2.5 px-4 text-neutral-600"
            placeholder="09/16/2024"
            type="text"
          />
          <div className="w-[335px] hidden flex-row items-center justify-center py-1 px-0 box-border text-sm">
            <div className="flex-1 relative leading-[20px]">Helper text</div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-2.5 px-2 bg-primary-500 self-stretch rounded-xl flex flex-row items-center justify-center gap-[8px]"
          onClick={onCTAClick}
        >
          <div className="relative text-base leading-[24px] font-semibold font-button-1-regular text-neutral-100 text-center">
            Next
          </div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/hugeiconeducationsolidpencil1@2x.png"
          />
        </button>
      </section>
      <BirthdayWheelPicker />
    </div>
  );
};

export default SignUpBithday1;
