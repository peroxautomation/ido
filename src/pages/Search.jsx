import TopNavbar from "../components/mobile/TopNavbar";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import Searchbox from "../components/mobile/Searchbox";
import SearchResults from "../components/mobile/SearchResults";
import SaveToPlaylistPopup from "../components/mobile/SaveToPlaylistPopup";
import HomeSectionVideoCard from "../components/mobile/HomeSectionVideoCard";
import { useState } from "react";
import FilterDropdown from "../components/mobile/FilterDropdown";
import GenreDropdown from "../components/mobile/GenreDropdown";
import CountryDropdown from "../components/mobile/CountryDropdown";
import YearDropdown from "../components/mobile/YearDropdown";
import RatingsDropdown from "../components/mobile/RatingsDropdown";
import PrimaryButton from "../components/mobile/PrimaryButton";
import { useNavigate } from "react-router-dom";
import SaveToPlaylistBtn from "../components/mobile/SaveToPlaylistBtn";

const searchVideos = [
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
 * Search Page
 * @returns JSX element
 */
const Search = () => {
  /************************************************************************************ */
  /***************************{Component Variables & States}*************************** */
  /************************************************************************************ */
  const [searchQuery, setSearchQuery] = useState(null);
  const [filters, setFilters] = useState({
    country: null,
    rating: null,
    year: null,
    genre: null,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedId, setSelectedId] = useState(null); //Video with its options active
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [isGenereActive, setIsGenreActive] = useState(false);
  const [isCountryActive, setIsCountryActive] = useState(false);
  const [isRatingActive, setIsRatingeActive] = useState(false);
  const [isYearActive, setIsYearActive] = useState(false);

  /**************************************************************************** */
  /********************************{Methods}********************************** */
  /*************************************************************************** */
  /**
   * Render search videos
   * @returns A an array of JSX elements
   */
  const renderSearchVideos = () => {
    return searchVideos.map((element, index) => (
      <HomeSectionVideoCard
        key={index}
        likes={element.likes}
        views={element.views}
        src={element.src}
        setSelected={setSelectedId}
        videoId={index}
        optionsMenu={
          <SaveToPlaylistBtn onClick={togglePlaylistPopup}></SaveToPlaylistBtn>
        }
        onVideoClick={() =>
          navigate("/moves/others/temp-id-123", {
            state: { view: "others", videoId: `${selectedId}` },
          })
        }
      />
    ));
  };

  /**
   * Toglle playlist popup
   * @param {*} id
   */
  const togglePlaylistPopup = (event) => {
    event.stopPropagation();
    setIsPopupActive(!isPopupActive);
  };

  /**
   * Handle saving video
   */
  const handleSaveVideo = (event) => {
    event.stopPropagation();
    console.log(`Saving video with id ${selectedId}`);
    setIsPopupActive(false);
  };

  /**
   * Toggle genre dropdown list on and off
   * */
  const openGenre = () => {
    setIsGenreActive(!isGenereActive);
    //Close other dropdowns
    setIsCountryActive(false);
    setIsRatingeActive(false);
    setIsYearActive(false);
  };

  /**
   * Toggle country dropdown list on and off
   * @param {*} event
   */
  const openCountry = () => {
    setIsCountryActive(!isCountryActive);
    //Close other dropdowns
    setIsGenreActive(false);
    setIsRatingeActive(false);
    setIsYearActive(false);
  };

  /**
   * Toggle ratings dropdown list on and off
   *  */
  const openRatings = () => {
    setIsRatingeActive(!isRatingActive);
    //Close other dropdowns
    setIsCountryActive(false);
    setIsGenreActive(false);
    setIsYearActive(false);
  };

  /**
   * Toggle year dropdown list on and off
   * @param {*} event
   */
  const openYear = () => {
    setIsYearActive(!isYearActive);
    //Close other dropdowns
    setIsCountryActive(false);
    setIsGenreActive(false);
    setIsRatingeActive(false);
  };

  return !isFilterOpen ? (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
      <TopNavbar />
      <Searchbox
        searchQuery={searchQuery}
        handleSetQuery={setSearchQuery}
        handleSetfilterOpen={setIsFilterOpen}
      />
      <SearchResults />
      <main className="absolute w-[calc(100%_-_40px)] top-[24%] right-[1.25rem] h-[67vh] left-[1.25rem] overflow-y-auto grid grid-cols-2 items-start justify-start gap-[1rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
        {renderSearchVideos()}
      </main>
      <ButtomNavbar currentPage="Search" />
      {isPopupActive && <SaveToPlaylistPopup handleSave={handleSaveVideo} />}
    </div>
  ) : (
    Filters(
      filters,
      setFilters,
      setIsFilterOpen,
      openGenre,
      openCountry,
      openRatings,
      openYear,
      isGenereActive,
      isCountryActive,
      isRatingActive,
      isYearActive
    )
  );
};

/**
 * Filter popup/screen
 * @param {*} filters An object of filters to be applied to search
 * @param {*} setFilters  handler to update the object of filters
 * @param {*} handleSetIsOpen handler to close filter popup/screen
 * @returns A JSX Element
 */
const Filters = (
  filters,
  setFilters,
  handleSetIsOpen,
  openGenre,
  openCountry,
  openRatings,
  openYear,
  isGenre,
  isCountry,
  isRatings,
  isYear
) => {
  /**
   * Handler to set countries
   * @param {*} country Country to set
   */
  const handleSetCountry = (country) => {
    setFilters({
      ...filters,
      country: country,
    });
  };

  /**
   * Handler to set genre
   * @param {*} genre genre to set
   */
  const handleSetGenre = (genre) => {
    setFilters({
      ...filters,
      genre: genre,
    });
  };

  /**
   * Handler to set rating
   * @param {*} rating rating to set
   */
  const handleSetRating = (rating) => {
    setFilters({
      ...filters,
      rating: rating,
    });
  };

  /**
   * Handler to set year
   * @param {*} year year to add
   */
  const handleSetYear = (year) => {
    setFilters({
      ...filters,
      year: year,
    });
  };

  /**
   * Close the filter
   */
  const onApplyClick = () => {
    handleSetIsOpen(false);
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <header className={`title-primary`}>
        <div
          className={`title-primary-return`}
          onClick={() => handleSetIsOpen(false)}
        >
          <img
            className="title-primary-return-image"
            alt=""
            src="/direaction-left.svg"
          />
        </div>
        <div className="title-primary-heading">Filters</div>
      </header>
      <section className="relative w-[calc(100%_-_40px)] top-[15%] right-[1.25rem] left-[1.25rem] flex flex-col items-end justify-start gap-[1rem]">
        <div className="relative self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <FilterDropdown
            dropdown={!filters.genre ? "Genre" : filters.genre}
            onClick={openGenre}
            isActive={isGenre}
            list={
              <GenreDropdown selectHandler={handleSetGenre}></GenreDropdown>
            }
          />
          <FilterDropdown
            dropdown={!filters.country ? "Country" : filters.country}
            onClick={openCountry}
            isActive={isCountry}
            list={
              <CountryDropdown
                selectHandler={handleSetCountry}
              ></CountryDropdown>
            }
          />
        </div>
        <div className="relative self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <FilterDropdown
            dropdown={!filters.year ? "Year" : filters.year}
            onClick={openYear}
            isActive={isYear}
            list={<YearDropdown selectHandler={handleSetYear}></YearDropdown>}
          />
          <FilterDropdown
            dropdown={!filters.rating ? "Ratings" : filters.rating}
            onClick={openRatings}
            isActive={isRatings}
            list={
              <RatingsDropdown
                selectHandler={handleSetRating}
              ></RatingsDropdown>
            }
          />
        </div>
        <PrimaryButton cTA="Apply" isActive={true} onCTAClick={onApplyClick} />
      </section>
      <ButtomNavbar currentPage="Search" />
    </div>
  );
};

export default Search;
