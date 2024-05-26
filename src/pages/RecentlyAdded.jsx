import Title from "../components/mobile/Title";
import HomeVideoCard from "../components/mobile/HomeVideoCard";
import CategoryRow from "../components/mobile/CategoryRow";

/**
 * Recently Added Section Page
 * @returns JSX element
 */
const RecentlyAdded = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <img
        className="absolute bottom-[0rem] left-[0rem] w-[23.438rem] h-[full] overflow-hidden hidden"
        alt=""
        src="/devicemobile.svg"
      />
      <Title
        titleRight="1.25rem"
        titleLeft="1.25rem"
        hugeIconarrowssolHref="/main-page"
        pageName="Recently Added"
        titleWidth="calc(100% - 40px)"
        direactionLeft="/direaction-left.svg"
        returnPage="/home"
      />
      <section className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] h-[85%] left-[1.25rem] overflow-y-auto flex flex-col items-start justify-start gap-[1rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
       <CategoryRow />
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <HomeVideoCard />
          <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <HomeVideoCard />
          <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <HomeVideoCard />
          <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <HomeVideoCard />
          <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <HomeVideoCard />
          <HomeVideoCard />
        </div>
      </section>
    </div>
  );
};

export default RecentlyAdded;
