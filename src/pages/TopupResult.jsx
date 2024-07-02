import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";

const TopupResult = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver-200 font-button-1-regular grid grid-flow-row items-center">
      <div className="absolute top-[17.813rem] w-full flex flex-col items-center gap-[1rem] text-center text-neutral-100">
        <img
          className="w-[3.5rem] relative h-[3.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlinecheckcircle.svg"
        />
        <div className="w-[20.938rem] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">Success Top up</div>
        </div>
      </div>
      <div className="bottom-0 absolute w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton onCTAClick={()=> navigate("/profile/my-wallet/top-up")} cTA="Back" isActive={true} />
      </div>
    </div>
  );
};

export default TopupResult;
