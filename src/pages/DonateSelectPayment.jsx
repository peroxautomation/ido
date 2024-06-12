import Button1Inactive from "../components/mobile/Button1Inactive";
import Dropdown1 from "../components/mobile/Dropdown1";
import Title from "../components/mobile/Title";
/**
 * Select Payment method for donation
 * @returns A JSX element
 */
const DonateSelectPayment = () => {
  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <Title pageName="Donate" />
      <div className="relative top-[14vh] w-[20.938rem] flex flex-col h-[87vh]">
        <div className="w-[20.938rem] flex flex-col items-start justify-start h-max">
          <Dropdown1 dropdown="Choose card" />
        </div>
        <button className="mt-3 cursor-pointer [border:none] p-0 bg-[transparent] w-[20.938rem] flex flex-col items-start justify-start h-max">
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] text-neutral-100 px-[1rem] gap-[0.5rem] leading-[1.5rem] font-button-1-regular text-[1rem] w-full">
            From wallet
          </div>
        </button>
        <div className="relative">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Donation</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">$10</b>
          </div>
        </div>
        <div className="relative box-border w-[20.938rem] flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Subtotal</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">$9</b>
          </div>
        </div>
        <div className="relative w-[20.938rem] flex flex-row items-center justify-center text-center text-[1.5rem]">
          <div className="flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0rem]">
            <div className="flex-1 relative leading-[2rem] font-semibold">
              Total: $10
            </div>
          </div>
        </div>
      </div>
      <Button1Inactive
        cTAPosition="absolute"
        cTAWidth="20.938rem"
        cTARight="unset"
        cTABottom="unset"
        cTALeft="unset"
        cTAAlignSelf="unset"
        cTA="Donate"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        cTATop="unset"
      />
    </div>
  );
};

export default DonateSelectPayment;
