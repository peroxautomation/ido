import UnsuccessfulIcon from "../components/mobile/UnsuccessfulIcon";
import PrimaryButton from "../components/mobile/PrimaryButton";
import { useNavigate } from "react-router-dom";

const SorryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1.25rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-items-center">
      <div className="absolute w-[20.938rem] flex flex-row items-center justify-center">
        <div className="top-[40vh] flex-1 relative leading-[1.75rem] font-semibold grid grid-flow-row justify-items-center">
          <UnsuccessfulIcon
            hugeIconinterfaceoutlinew="/hugeiconinterfaceoutlinewarning.svg"
            hugeIconinterfaceoutlinewWidth="14.93%"
            hugeIconinterfaceoutlinewPosition="relative"
          />
          Sorry we cannot share your video due to our copyright policy!
        </div>
      </div>
      <div className="absolute bottom-0 w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton
          onCTAClick={() => navigate('/home')}
          cTA="Back to home"
          isActive={true}
        />
      </div>
    </div>
  );
};

export default SorryPage;
