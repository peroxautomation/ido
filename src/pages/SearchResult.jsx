import TopNavbar from "../components/mobile/TopNavbar";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import Searchbox from "../components/mobile/Searchbox";
import SearchResults from "../components/mobile/SearchResults";
import SaveToPlaylistPopup from "../components/mobile/SaveToPlaylistPopup";
import HomeVideoCard from "../components/mobile/HomeVideoCard";
import HomeVideoCard2 from "../components/mobile/HomeVideoCard2";

/**
 * Search Result Page
 * @returns JSX element
 */
const SearchResult = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
      <TopNavbar />
      <Searchbox />
      <SearchResults className="hidden"/>
      <main className="relative display grid grid-cols-1 justify-center w-[100vw] h-[70.5vh] top-[calc(28%_-_10vh)] overflow-y-scroll gap-y-4">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] w-[90%] justify-self-center">
            <HomeVideoCard2 />
            <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] w-[90%] justify-self-center">
            <HomeVideoCard />
            <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] w-[90%] justify-self-center">
            <HomeVideoCard />
            <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] w-[90%] justify-self-center">
            <HomeVideoCard />
            <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] w-[90%] justify-self-center">
            <HomeVideoCard />
            <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] w-[90%] justify-self-center">
            <HomeVideoCard />
            <HomeVideoCard />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] w-[90%] justify-self-center">
            <HomeVideoCard />
            <HomeVideoCard />
        </div>
      </main>
      <ButtomNavbar currentPage="Search" />
      <SaveToPlaylistPopup className="hidden"/>
    </div>
  );
};

export default SearchResult;
