import Title from "../components/mobile/Title";
import HomeSectionVideoCard from "../components/mobile/HomeSectionVideoCard";
import SaveToPlaylistPopup from "../components/mobile/SaveToPlaylistPopup";
const recentlyAddedData = [
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
];

/**
 * Recently Added Section Page
 * @returns JSX element
 */
const RecentlyAdded = () => {
  /**************************************************************************** */
  /********************************{Methods}********************************** */
  /**************************************************************************** */
  const renderRecentlyAdded = () => {
    return recentlyAddedData.map((element, index) => (
      <HomeSectionVideoCard
        key={index}
        likes={element.likes}
        views={element.views}
        src={element.src}
      />
    ));
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title pageName="Recently Added" />
      <section className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] h-[calc(100vh_-_7.2rem)] left-[1.25rem] overflow-y-auto grid grid-cols-2 items-start justify-start gap-[1rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
        {renderRecentlyAdded()}
      </section>
      <SaveToPlaylistPopup></SaveToPlaylistPopup>
    </div>
  );
};

export default RecentlyAdded;
