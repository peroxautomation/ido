import DContactForm from "./DContactForm";
import DContactInfo from "./DContactInfo";

const DContact = () => {
  return (
    <div
      className={`absolute top-[4350px]  bg-neutral-100 w-screen h-[872px] overflow-hidden text-left text-13xl text-neutral-900 font-body-semibold `}
      data-scroll-to="DcontactPage"
    >
      <DContactForm />
      <div className="absolute top-[80px] left-[calc(50%_-_640px)] w-[1280px] flex flex-row items-start justify-between py-4 px-0 box-border">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[40px] font-semibold">Contact</div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
      <DContactInfo />
    </div>
  );
};

export default DContact;
