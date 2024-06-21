import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";

const SubscriptionResult = () => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate('/profile');
  }
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver-200 font-button-1-regular flex flex-row justify-center">
      <div className="absolute top-[17.813rem] flex flex-col items-center justify-start gap-[1rem] text-center text-neutral-100">
        <img
          className="w-[3.5rem] relative h-[3.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlinecheckcircle.svg"
        />
        <div className="w-[20.938rem] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">
            Your subscription was canceled
          </div>
        </div>
      </div>
      <PrimaryButton
        onClick={onBackClick}
        cTA="Back"
        isActive={true}
      />
    </div>
  );
};

export default SubscriptionResult;
