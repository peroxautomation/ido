import THeader from "./THeader";
import TMainDescriptionCTA from "./TMainDescriptionCTA";
import TBothIPhones from "./TBothIPhones";

const THomePage = () => {
  return (
    <div className={`absolute top-[0px] left-[calc(50%_-_512px)] bg-neutral-900 w-[1024px] h-[546px] overflow-hidden text-left text-14xl text-neutral-100 font-button-1-regular`}>
      <THeader />
      <TMainDescriptionCTA />
      <TBothIPhones />
    </div>
  );
};

export default THomePage;
