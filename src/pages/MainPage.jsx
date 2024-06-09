import HomeSectionHeading from "../components/mobile/HomeSectionHeading";
import HomePageSection from "../components/mobile/HomePageSection";
import Genres from "../components/mobile/Genres";
import TopNavbar from "../components/mobile/TopNavbar";
import ButtomNavbar from "../components/mobile/ButtomNavbar";

/**
 * Main Page
 * @returns JSX element
 */
const MainPage = () => {
  return (
    <div className="w-full fixed bg-neutral-900 h-[100vh] grid grid-flow-row justify-items-center">
      <TopNavbar />
      <Genres />
      <div className="absolute top-[calc(100vh_-_60vh)] max-h-[calc(100%_-_21.125rem)] overflow-y-scroll">
      <HomeSectionHeading 
        headingOfCategoryTop="12.125rem"
        headingOfCategoryWidth="calc(100% - 20px)"
        headingOfCategoryRight="1.25rem"
        sectionName="Trending now"
        linkTo="/home/trending"
       />
        <HomePageSection 
          trendingTop="14.625rem" 
          trendingHeight="12.313rem" 
          linkTo="/home/recently-added" />
        <HomeSectionHeading
          headingOfCategoryTop="12.125rem"
          headingOfCategoryWidth="calc(100% - 20px)"
          headingOfCategoryRight="1.25rem"
          sectionName="Recently added"
          linkTo="/home/recently-added"
        />
        <HomePageSection />
      </div>
      <ButtomNavbar currentPage="Home" />
    </div>
  );
};

export default MainPage;
