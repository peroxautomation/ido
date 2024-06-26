const TContactInfo = () => {
  return (
    <div
      className={`absolute top-[128px] left-[148px] w-[251px] flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-neutral-900 font-button-1-regular`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start py-4 px-0 gap-[16px]">
          <div className="relative leading-[32px] font-semibold">
            Get in touch
          </div>
        </div>
        <div className="w-[251px] flex flex-row items-center justify-center text-base text-neutral-500">
          <div className="flex-1 relative leading-[24px]">
            "Have a question or feedback? Reach out to us through our contact
            form, email, phone, or social media— we're here to help!"
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start py-4 px-0 gap-[16px]">
          <div className="relative leading-[32px] font-semibold">E-mail</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-neutral-500">
          <div className="w-[396px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[24px]">
              Our friendly team is here to help
            </div>
          </div>
          <div className="w-[396px] flex flex-row items-center justify-center text-info-500">
            <div className="flex-1 relative leading-[24px]">
              idomatrix@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start py-4 px-0 gap-[16px]">
          <div className="relative leading-[32px] font-semibold">Phone</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-base text-info-500">
          <div className="flex-1 relative leading-[24px]">+1 (555) 000-000</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <a href="https://www.facebook.com/">
        <img
          className="social-icon active:opacity-70"
          alt=""
          src="/iconsfillfacebookfill@2x.png"
        />
        </a>
        <div className="w-px relative box-border h-[21px] border-r-[1px] border-solid border-info-500" />
        <a href="https://www.instagram.com/">
        <img
          className="social-icon active:opacity-70"
          alt=""
          src="/iconsfillinstagramfill@2x.png"
        />
        </a>
        <div className="w-px relative box-border h-[21px] border-r-[1px] border-solid border-info-500" />
        <a href="https://x.com/?lang=en-ca">
        <img
          className="social-icon active:opacity-70"
          alt=""
          src="/iconsfilltwitterfill@2x.png"
        />
        </a>
        <div className="w-px relative box-border h-[21px] border-r-[1px] border-solid border-info-500" />
        <a href="https://www.youtube.com/">
        <img
          className="social-icon active:opacity-70"
          alt=""
          src="/iconsfillyoutubefill@2x.png"
        />
        </a>
      </div>
    </div>
  );
};

export default TContactInfo;
