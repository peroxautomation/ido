import TContactInfo from "./TContactInfo";
import TContactForm from "./TContactForm";

const TContact = () => {
  return (
    <div
      className={`absolute top-[3438px] left-[calc(50%_-_512px)] bg-neutral-100 w-[1024px] h-[624px] overflow-hidden text-left text-5xl text-neutral-900 font-button-1-regular`}
      data-scroll-to="TcontactPage"
      >
      <div className="absolute top-[40px] left-[calc(50%_-_372px)] w-[744px] flex flex-row items-start justify-between py-4 px-0 box-border text-center">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[32px] font-semibold">Contact</div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-2@2x.png"
        />
      </div>
      <TContactInfo />
      <TContactForm />
    </div>
  );
};

export default TContact;
