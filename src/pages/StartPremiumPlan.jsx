import { useCallback } from "react";
import Input from "../components/mobile/Input";
import Button1 from "../components/mobile/Button1";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom/dist";

const StartPremiumPlan = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/subscription-premium-result");
  }, [navigate]);

  return (
    <div className="w-full flex flex-col relative bg-neutral-900 h-[100vh] overflow-hidden text-left text-[1rem] text-neutral-100 font-button-2-bold">
      <Title />
      <div className="relative top-[4vh] h-[38vh] overflow-hidden">
        <div className="absolute w-full top-[4.25rem] right-[0rem] left-[0rem] flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/checkCircleGreen.svg"
                />
                <div className="relative leading-[1.5rem]">
                All from free
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/checkCircleGreen.svg"
                />
                <div className="relative leading-[1.5rem]">
                  Unlimited creating videos
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/checkCircleGreen.svg"
                />
                <div className="relative leading-[1.5rem]">
                  Unlimited challenge
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/checkCircleGreen.svg"
                />
                <div className="relative leading-[1.5rem]">
                  Unlimited Cover
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center text-center text-[1.5rem]">
            <div className="flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0rem]">
              <h3 className="m-0 flex-1 relative text-inherit leading-[2rem] font-semibold font-inherit">
                Total: $10 / Per month
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-grow w-full  bottom-[0em] rounded-t-xl rounded-b-none bg-neutral-800 flex flex-col items-start justify-start pt-[1rem] px-[1.25rem] box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <Input
            inputAlignSelf="stretch"
            inputPosition="unset"
            inputTop="unset"
            inputLeft="unset"
            inputWidth="unset"
            label="Card holder name"
            hugeIconinterfacesolidinf={false}
            inputPlaceholder="Enter card holder name"
            labelAlignSelf="stretch"
            labelWidth="unset"
            inputAlignSelf1="stretch"
            inputWidth1="unset"
            helperTextWidth="20.938rem"
          />
          <Input
            inputAlignSelf="stretch"
            inputPosition="unset"
            inputTop="unset"
            inputLeft="unset"
            inputWidth="unset"
            label="Card number"
            hugeIconinterfacesolidinf={false}
            inputPlaceholder="Enter card number"
            labelAlignSelf="stretch"
            labelWidth="unset"
            inputAlignSelf1="stretch"
            inputWidth1="unset"
            helperTextWidth="20.938rem"
          />
          <div className="flex flex-row items-start justify-start gap-[0.937rem]">
            <Input
              inputAlignSelf="unset"
              inputPosition="unset"
              inputTop="unset"
              inputLeft="unset"
              inputWidth="unset"
              label="MM/YY"
              hugeIconinterfacesolidinf={false}
              inputPlaceholder="02/2026"
              labelAlignSelf="unset"
              labelWidth="10rem"
              hugeIconinterfacesolidinf1="/hugeiconinterfacesolidinformation12.svg"
              inputAlignSelf1="unset"
              inputWidth1="10rem"
              helperTextWidth="10rem"
              hugeIconinterfacesolidinf2="/hugeiconinterfacesolidinformation12.svg"
            />
            <Input
              inputAlignSelf="unset"
              inputPosition="unset"
              inputTop="unset"
              inputLeft="unset"
              inputWidth="unset"
              label="CVV"
              hugeIconinterfacesolidinf={false}
              labelAlignSelf="unset"
              labelWidth="10rem"
              inputAlignSelf1="unset"
              inputWidth1="10rem"
              helperTextWidth="10rem"
              hugeIconinterfacesolidinf2="/hugeiconinterfacesolidinformation12.svg"
            />
          </div>
          <div className=" flex-grow flex flex-col items-center min-w-[100%] min-h-[90%] justify-end">
            <Button1
              onCTAClick={onCTAClick}
              cTAAlignSelf="stretch"
              cTAPosition="unset"
              cTATop="unset"
              cTALeft="unset"
              cTAWidth="unset"
              cTA="Start premium plan"
              icon="/hugeiconinterfacesolidstar2.svg"
              cTARight="unset"
              cTABottom="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPremiumPlan;
