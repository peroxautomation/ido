import { useState } from "react";
import TPartnerModal from "./TPartnerModal";
const TPartnerForm = () => {
  const [isFormValid, setFormValid] = useState(false)

  const handleFormValidation = () =>{
    setFormValid(true)
  }

  const displayModal = (
    <div>
      <div className="fixed top-[0px] left-[0px] bg-gray-200 w-screen h-screen" />
      <TPartnerModal />
    </div>
    )
  return (
    <div
      className={`absolute top-[calc(50%_-_314.5px)] left-[calc(50%_-_259px)] flex flex-col items-center justify-start gap-[32px] text-center text-base text-neutral-100 font-h2-regular`}
    >
      <div className="relative text-13xl leading-[40px] whitespace-pre-wrap">
        Become a partner
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px] text-left">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <div className="w-[251px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
              <div className="flex-1 relative leading-[24px]">First name *</div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/hugeiconinterfacesolidinformation.svg"
              />
            </div>
            <input
              className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
              placeholder="Enter your first name"
              type="text"
            />
            <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
              <div className="flex-1 relative leading-[20px]">Helper text</div>
            </div>
          </div>
          <div className="w-[251px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
              <div className="flex-1 relative leading-[24px]">Last name *</div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/hugeiconinterfacesolidinformation.svg"
              />
            </div>
            <input
              className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
              placeholder="Enter your last name"
              type="text"
            />
            <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
              <div className="flex-1 relative leading-[20px]">Helper text</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <div className="w-[251px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
              <div className="flex-1 relative leading-[24px]">
                Company name *
              </div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/hugeiconinterfacesolidinformation.svg"
              />
            </div>
            <input
              className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
              placeholder="Enter company name"
              type="text"
            />
            <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
              <div className="flex-1 relative leading-[20px]">Helper text</div>
            </div>
          </div>
          <div className="w-[251px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1">
              <div className="flex-1 relative leading-[24px]">
                Type of bussines *
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Please select
              </div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/hugeiconarrowssoliddirectiondown-01.svg"
              />
            </div>
            <div className="w-80 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm">
              <div className="flex-1 relative leading-[20px]">Helper text</div>
            </div>
          </div>
        </div>
        <div className="w-[518px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
            <div className="flex-1 relative leading-[24px]">
              Street address *
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconinterfacesolidinformation.svg"
            />
          </div>
          <input
            className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
            placeholder="Enter street address"
            type="text"
          />
          <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
            <div className="flex-1 relative leading-[20px]">Helper text</div>
          </div>
        </div>
        <div className="w-[518px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
            <div className="flex-1 relative leading-[24px]">
              Street address line 2
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconinterfacesolidinformation.svg"
            />
          </div>
          <input
            className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
            placeholder="Enter street address"
            type="text"
          />
          <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
            <div className="flex-1 relative leading-[20px]">Helper text</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <div className="w-[162px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1">
              <div className="flex-1 relative leading-[24px]">Country</div>
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Please select
              </div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/hugeiconarrowssoliddirectiondown-01.svg"
              />
            </div>
            <div className="w-80 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm">
              <div className="flex-1 relative leading-[20px]">Helper text</div>
            </div>
          </div>
          <div className="w-[162px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1">
              <div className="flex-1 relative leading-[24px]">City</div>
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Please select
              </div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/hugeiconarrowssoliddirectiondown-01.svg"
              />
            </div>
            <div className="w-80 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm">
              <div className="flex-1 relative leading-[20px]">Helper text</div>
            </div>
          </div>
          <div className="w-[162px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
              <div className="flex-1 relative leading-[24px]">
                Postal / Zip code
              </div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/hugeiconinterfacesolidinformation.svg"
              />
            </div>
            <input
              className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
              placeholder="Enter zip code"
              type="text"
            />
            <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
              <div className="flex-1 relative leading-[20px]">Helper text</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
          <input
            className="m-0 w-6 relative h-6 accent-primary-500"
            required={true}
            type="checkbox"
          />
          <div className="relative leading-[20px]">
            I have read, understood, and accepted the privacy policy for
            partnership
          </div>
        </div>
      </div>
      <button
      onClick={handleFormValidation}
      className="w-[302px] touch-btn-secondary flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] active:opacity-80">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconinterfacesolidplus1.svg"
        />
        <div className="relative leading-[24px]">Submit</div>
      </button>
      {isFormValid && displayModal}
    </div>
  );
};

export default TPartnerForm;
