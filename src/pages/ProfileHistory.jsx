import Title from "../components/mobile/Title";
import ProfileVideoCard2 from "../components/mobile/ProfileVideoCard2";
import DeletePopup from "../components/mobile/DeletePopup";

/**
 * User Moves history Page
 * @returns JSX element
 */
const HistoryPage = () => {
  const historyData = [
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
    {
      src: "hugeiconinterfaceoutlinetrash.svg",
      views: 122,
      likes: 54,
    },
  ];

  const renderHistoryVideos = () => {
    return historyData.map((element, index) => (
      <ProfileVideoCard2
        key={index}
        likes={element.likes}
        views={element.views}
        src={element.src}
        current="Liked"
      />
    ));
  };
  return (
    <div className="w-full fixed bg-neutral-900 h-[100vh] overflow-hidden">
      <img
        className="absolute bottom-[0rem] left-[0rem] w-[23.438rem] h-[full] overflow-hidden hidden"
        alt=""
        src="/devicemobile.svg"
      />
      <Title pageName="History" />
      <section className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] h-[calc(100vh_-_7.2rem)] left-[1.25rem] overflow-y-auto grid grid-cols-2 items-start justify-start gap-[1rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
        {renderHistoryVideos()}
        <DeletePopup message={"Are you sure want to remove from liked?"} />
      </section>
    </div>
  );
};

export default HistoryPage;
