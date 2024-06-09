import Title from "../components/mobile/Title";
import ProfileVideoCard2 from "../components/mobile/ProfileVideoCard2";
import DeletePopup from "../components/mobile/DeletePopup";

/**
 * User Moves history Page
 * @returns JSX element
 */
const HistoryPage = () => {
  return (
    <div className="w-full fixed bg-neutral-900 h-[100vh] overflow-hidden">
      <img
        className="absolute bottom-[0rem] left-[0rem] w-[23.438rem] h-[full] overflow-hidden hidden"
        alt=""
        src="/devicemobile.svg"
      />
      <Title
        titleRight="1.25rem"
        titleLeft="1.25rem"
        hugeIconarrowssolHref="/main-page"
        pageName="History"
        titleWidth="calc(100% - 40px)"
        direactionLeft="/direaction-left.svg"
        returnPage="/home"
      />
      <section className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] h-[82%] left-[1.25rem] overflow-y-scroll flex flex-col items-start justify-start gap-[1rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <ProfileVideoCard2 current={"History"} />
          <ProfileVideoCard2 current={"History"} />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <ProfileVideoCard2 current={"History"} />
          <ProfileVideoCard2 current={"History"} />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <ProfileVideoCard2 current={"History"} />
          <ProfileVideoCard2 current={"History"} />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <ProfileVideoCard2 current={"History"} />
          <ProfileVideoCard2 current={"History"} />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <ProfileVideoCard2 current={"History"} />
          <ProfileVideoCard2 current={"History"} />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <ProfileVideoCard2 current={"History"} />
          <ProfileVideoCard2 current={"History"} />
        </div>
        <DeletePopup message={"Are you sure want to remove from history?"} />
      </section>
    </div>
  );
};

export default HistoryPage;
