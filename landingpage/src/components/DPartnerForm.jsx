import { useState } from "react";
import DPartnerModal from "./DPartnerModal";
const DPartnerForm = () => {
  const [isFormValid, setFormValid] = useState(false)

  const handleFormValidation = () =>{
    setFormValid(true)
  }

  const displayModal = (
    <div>
      <div className="fixed top-[0px] left-[0px] bg-gray-200 w-screen h-screen" />
      <DPartnerModal />
    </div>
    )

  return (
    <>
      <div
        className={`fixed top-[calc(50%_-_351px)] left-[calc(50%_-_314px)] flex flex-col items-center justify-start gap-[40px] text-center text-base text-neutral-100 font-h2-regular overflow-hidden`}
      >
        <div className="relative text-21xl leading-[48px] whitespace-pre-wrap">
          Become a partner
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px] text-left">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[302px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
                <div className="flex-1 relative leading-[24px]">
                  First name *
                </div>
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
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-[302px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
                <div className="flex-1 relative leading-[24px]">
                  Last name *
                </div>
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
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[302px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
                <div className="flex-1 relative leading-[24px]">Email *</div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconinterfacesolidinformation.svg"
                />
              </div>
              <input
                className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
                placeholder="Enter email address"
                type="text"
              />
              <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-[302px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
                <div className="flex-1 relative leading-[24px]">
                  Phone number *
                </div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconinterfacesolidinformation.svg"
                />
              </div>
              <input
                className="[border:none] [outline:none] font-h2-regular text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
                placeholder="Enter phone number"
                type="text"
              />
              <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[302px] flex flex-col items-start justify-start">
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
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-[302px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1">
                <div className="flex-1 relative leading-[24px]">
                  Type of bussines *
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] cursor-pointer">
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
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
          <div className="w-[628px] flex flex-col items-start justify-start">
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
          <div className="w-[628px] flex flex-col items-start justify-start">
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
          <div className="flex flex-row items-start justify-start gap-[25px]">
            <div className="w-[193px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1">
                <div className="flex-1 relative leading-[24px]">Country</div>
              </div>
              <div
                className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] cursor-pointer">
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
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-[193px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1">
                <div className="flex-1 relative leading-[24px]">City</div>
              </div>
              <div
                className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] cursor-pointer">
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
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-[193px] flex flex-col items-start justify-start">
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
                placeholder="Enter Postal / Zip code"
                type="text"
              />
              <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <input
              className="m-0 w-6 relative h-6 accent-primary-500 hover:opacity-80"
              required={true}
              type="checkbox"
            />
            <div className="relative leading-[24px]">
              I have read, understood, and accepted the privacy p
              <span className="capitalize">olicy</span> for partnership
            </div>
          </div>
        </div>
        <button 
        onClick={handleFormValidation}
        className="w-[302px] rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] hover:opacity-80 cursor-pointer text-white">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconinterfacesolidplus.svg"
          />
          <div className="relative leading-[24px] font-semibold">Submit</div>
        </button>
        {isFormValid && displayModal}
      </div>
    </>
  );
};

export default DPartnerForm;
