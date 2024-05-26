import HomeSectionHeading from "../components/mobile/HomeSectionHeading";
import HomePageSection from "../components/mobile/HomePageSection";
import Genres from "../components/mobile/Genres";
import TopNavbar from "../components/mobile/TopNavbar";
import ButtomNavbar from "../components/mobile/ButtomNavbar";

const MainPage = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-y-auto overflow-x-clip">
      <TopNavbar />
      <Genres />
      <div className="relative top-[23vh] left-[1.25rem] h-[50%] overflow-y-scroll">
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
      <ButtomNavbar />
    </div>
  );
};

export default MainPage;
