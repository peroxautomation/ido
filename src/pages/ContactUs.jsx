import Button2 from "../components/mobile/Button2";
import Title from "../components/mobile/Title";
/**
 * Contact us page
 * @returns A JSX element
 */
const ContactUs = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-center">
      <Title pageName="Contact us" />
      <form className="m-0 absolute w-full top-[6.75rem] gap-[1rem] grid grid-flow-row justify-center">
        <div className="flex flex-row items-start justify-start gap-[0.937rem]">
          <div className="w-[10rem] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
              <div className="flex-1 relative text-[1rem] leading-[1.5rem] font-button-1-regular text-neutral-100 text-left">
                First name
              </div>
            </div>
            <input
              className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-start py-[0.625rem] px-[1rem] text-neutral-100"
              placeholder="first name"
              type="text"
            />
            <div className="w-[10rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border">
              <div className="flex-1 relative text-[0.875rem] leading-[1.25rem] font-button-1-regular text-neutral-100 text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="w-[10rem] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
              <div className="flex-1 relative text-[1rem] leading-[1.5rem] font-button-1-regular text-neutral-100 text-left">
                Last name
              </div>
            </div>
            <input
              className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-start py-[0.625rem] px-[1rem] text-neutral-100"
              placeholder="last name"
              type="text"
            />
            <div className="w-[10rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border">
              <div className="flex-1 relative text-[0.875rem] leading-[1.25rem] font-button-1-regular text-neutral-100 text-left">
                Helper text
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
            <div className="flex-1 relative text-[1rem] leading-[1.5rem] font-button-1-regular text-neutral-100 text-left">
              Email
            </div>
          </div>
          <input
            className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 w-[20.938rem] rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[1rem] box-border text-neutral-100"
            placeholder="Enter your email"
            type="email"
          />
          <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border">
            <div className="flex-1 relative text-[0.875rem] leading-[1.25rem] font-button-1-regular text-neutral-100 text-left">
              Helper text
            </div>
          </div>
        </div>
        <div className="w-[20.938rem] flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="self-stretch flex flex-row items-start justify-end gap-[0.375rem]">
            <div className="flex-1 relative text-[1rem] leading-[1.5rem] font-button-1-regular text-neutral-100 text-left">
              Your message
            </div>
          </div>
          <textarea
            className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 self-stretch rounded-xl h-[8.75rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border text-neutral-100"
            placeholder="Answer for question"
          />
        </div>
        <Button2
          cTATop="unset"
          cTALeft="unset"
          cTAWidth="20.938rem"
          cTARight="unset"
          cTABottom="unset"
          cTA="Send message"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
          cTABackgroundColor="#cc0f3c"
          cTAPosition="unset"
          cTAGap="0.5rem"
          cTAFlex="unset"
          hugeIconeducationsolidpenWidth="1rem"
          hugeIconeducationsolidpenHeight="1rem"
        />
      </form>
    </div>
  );
};

export default ContactUs;