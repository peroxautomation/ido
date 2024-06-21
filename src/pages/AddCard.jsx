import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";

const AddCard = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-items-center">
      <Title pageName="Add payment mehtod" />
      <div className="relative w-[calc(100%_-_40px)] top-[6.75rem] flex flex-col justify-start gap-[2.562rem]">
        <div className="flex flex-col items-start justify-start gap-[1.5rem] w-[100%] items-center">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
              <div className="flex-1 relative leading-[1.5rem]">
                Card holder name
              </div>
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
            <input
              className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 w-[20.938rem] rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[1rem] box-border text-neutral-600"
              placeholder="Full name"
              type="text"
            />
            <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600">
              <div className="flex-1 relative leading-[1.25rem]">
                Helper text
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
              <div className="flex-1 relative leading-[1.5rem]">
                Card number
              </div>
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
            <input
              className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 w-[20.938rem] rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[1rem] box-border text-neutral-600"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
            <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600">
              <div className="flex-1 relative leading-[1.25rem]">
                Helper text
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.937rem]">
            <div className="w-[10rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
                <div className="flex-1 relative leading-[1.5rem]">MM/YY</div>
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconinterfacesolidinformation12.svg"
                />
              </div>
              <input
                className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-start py-[0.625rem] px-[1rem] text-neutral-600"
                placeholder="MM/YY"
                type="text"
              />
              <div className="w-[10rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600">
                <div className="flex-1 relative leading-[1.25rem]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-[10rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
                <div className="flex-1 relative leading-[1.5rem]">CVV</div>
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconinterfacesolidinformation12.svg"
                />
              </div>
              <input
                className="[border:none] [outline:none] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-start py-[0.625rem] px-[1rem] font-button-1-regular text-[1rem] text-neutral-600"
                type="text"
              />
              <div className="w-[10rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600">
                <div className="flex-1 relative leading-[1.25rem]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton cTA="Add card" isActive={true} />
      </div>
    </div>
  );
};

export default AddCard;
