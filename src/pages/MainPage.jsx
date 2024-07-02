import HomeSectionHeading from "../components/mobile/HomeSectionHeading";
import TopNavbar from "../components/mobile/TopNavbar";
import VideoCard from "../components/mobile/VideoCard";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import Genres from "../components/mobile/Genres";

const trendingNowData = [
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
];

const recentlyAddedData = [
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "./card@3x.png",
    views: 122,
    likes: 54,
  },
];

/**
 * Main Page
 * @returns JSX element
 */
const MainPage = () => {
  /**
   * Render trending now section
   * @returns A JSX element
   */
  const renderTrendingNow = () => {
    return (
      <div className={`home-page-section`}>
        <div className="w-[117.625rem] relative h-[10rem] flex flex-row">
          {trendingNowData.map((element, index) => (
            <VideoCard
              key={index}
              src={element.src}
              likes={element.views}
              views={element.likes}
            />
          ))}
        </div>
      </div>
    );
  };

  /**
   * Render recently added section
   * @returns A JSX element
   */
  const renderRecentlyAdded = () => {
    return (
      <div className={`home-page-section`}>
        <div className="w-[117.625rem] relative h-[10rem] flex flex-row">
          {recentlyAddedData.map((element, index) => (
            <VideoCard
              key={index}
              src={element.src}
              likes={element.views}
              views={element.likes}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full fixed bg-neutral-900 h-[100vh] grid grid-flow-row justify-items-center">
      <TopNavbar />
      <Genres />
      <div className="absolute top-[calc(100vh_-_59vh)] max-h-[calc(100%_-_21.125rem)] overflow-y-scroll">
        <HomeSectionHeading
          sectionName="Trending now"
          linkTo="/home/trending"
        />
        {renderTrendingNow()}
        <div className="h-[2.25rem]"></div>
        <HomeSectionHeading
          sectionName="Recently added"
          linkTo="/home/recently-added"
        />
        {renderRecentlyAdded()}
      </div>
      <ButtomNavbar currentPage="Home" />
    </div>
  );
};

export default MainPage;
