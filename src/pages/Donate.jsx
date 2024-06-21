import Title from "../components/mobile/Title";
import PrimaryButton from "../components/mobile/PrimaryButton";
import { useNavigate } from "react-router-dom";

/**
 * Donate Screen
 * @returns A JSX element
 */
const Donate = () => {
  const navigate = useNavigate();

  // Navigate to top up processing page
  const onNextClick = () => {
    navigate("/donate/select-payment");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-600 font-button-1-regular grid justify-center">
      <Title pageName="Donate" />
      <div className="relative top-[6.75rem] flex flex-col items-start justify-start gap-[1rem]">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border text-neutral-100">
            <div className="flex-1 relative leading-[1.5rem]">Amount</div>
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
          <input
            className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row py-[0.625rem] px-[1rem] box-border text-left text-white focus:outline-none text-[1em]"
            placeholder="Enter amount"
          />
          <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
            <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
          </div>
        </div>
        <PrimaryButton onCTAClick={onNextClick} cTA="Next" isActive={true} />
      </div>
    </div>
  );
};

export default Donate;
