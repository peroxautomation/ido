const DContactInfo = () => {
  return (
    <div
      className={`absolute top-[192px] left-[189px] flex flex-col items-start justify-start gap-[40px] text-left text-13xl text-neutral-900 font-body-semibold`}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="w-[543px] flex flex-row items-start justify-start py-4 px-0 box-border gap-[16px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconarrowsbulkdirectionleft-01.svg"
          />
          <div className="relative leading-[40px] font-semibold">
            Get in touch
          </div>
        </div>
        <div className="w-[396px] flex flex-row items-center justify-center text-5xl text-neutral-500">
          <div className="flex-1 relative leading-[32px]">
            "Have a question or feedback? Reach out to us through our contact
            form, email, phone, or social media— we're here to help!"
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="w-[543px] flex flex-row items-start justify-start py-4 px-0 box-border gap-[16px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconarrowsbulkdirectionleft-01.svg"
          />
          <div className="relative leading-[40px] font-semibold">E-mail</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px] text-5xl text-neutral-500">
          <div className="w-[396px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[32px]">
              Our friendly team is here to help
            </div>
          </div>
          <div className="w-[396px] flex flex-row items-center justify-center text-info-500">
            <div className="flex-1 relative leading-[32px]">
              support@idomatrix.com
            </div>
          </div>
        </div>
      </div>
      <div className="w-[543px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start py-4 px-0 gap-[16px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconarrowsbulkdirectionleft-01.svg"
          />
          <div className="relative leading-[40px] font-semibold">Phone</div>
        </div>
        <div className="w-[396px] flex flex-row items-center justify-center text-5xl text-info-500">
          <div className="flex-1 relative leading-[32px]">+1 (555) 000-000</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[40px]">
        <a href="https://www.facebook.com/">
        <img
          className="social-icon desktop-btn-secondary"
          alt=""
          src="/iconsfillfacebookfill@2x.png"
        />
        </a>
        <div className="w-px relative box-border h-[21px] border-r-[1px] border-solid border-info-500 " />
        <a href="https://www.instagram.com/">
        <img
          className="social-icon desktop-btn-secondary"
          alt=""
          src="/iconsfillinstagramfill@2x.png"
        />
        </a>
        <div className="w-px relative box-border h-[21px] border-r-[1px] border-solid border-info-500" />
        <a href="https://x.com/?lang=en-ca">
        <img
          className="social-icon desktop-btn-secondary"
          alt=""
          src="/iconsfilltwitterfill@2x.png"
        />
        </a>
        <div className="w-px relative box-border h-[21px] border-r-[1px] border-solid border-info-500" />
        <a href="https://www.youtube.com/">
        <img
          className="social-icon desktop-btn-secondary"
          alt=""
          src="/iconsfillyoutubefill@2x.png"
        />
        </a>
      </div>
    </div>
  );
};

export default DContactInfo;
