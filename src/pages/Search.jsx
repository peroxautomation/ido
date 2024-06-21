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
  const [searchQuery, setSearchQuery] = useState(null);
  const [filters, setFilters] = useState({
    country: null,
    rating: null,
    year: null,
    genre: null,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      />
    ));
  };

  console.log(filters);
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
      <SaveToPlaylistPopup />
    </div>
  ) : (
    Filters(filters, setFilters, setIsFilterOpen)
  );
};

/**
 * Filter popup/screen
 * @param {*} filters An object of filters to be applied to search
 * @param {*} setFilters  handler to update the object of filters
 * @param {*} handleSetIsOpen handler to close filter popup/screen
 * @returns A JSX Element
 */
const Filters = (filters, setFilters, handleSetIsOpen) => {
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
   * Toggle genre dropdown list on and off
   * */
  const openGenere = (event) => {
    const element = event.currentTarget;
    element.lastChild.classList.toggle("hidden");
  };

  /**
   * Toggle country dropdown list on and off
   * @param {*} event
   */
  const openCountry = (event) => {
    const element = event.currentTarget;
    element.lastChild.classList.toggle("hidden");
  };

  /**
   * Toggle ratings dropdown list on and off
   *  */
  const openRatings = (event) => {
    const element = event.currentTarget;
    element.lastChild.classList.toggle("hidden");
  };

  /**
   * Toggle year dropdown list on and off
   * @param {*} event
   */
  const openYear = (event) => {
    const element = event.currentTarget;
    element.lastChild.classList.toggle("hidden");
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
            onClick={openGenere}
            list={
              <GenreDropdown selectHandler={handleSetGenre}></GenreDropdown>
            }
          />
          <FilterDropdown
            dropdown={!filters.country ? "Country" : filters.country}
            onClick={openCountry}
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
            list={<YearDropdown selectHandler={handleSetYear}></YearDropdown>}
          />
          <FilterDropdown
            dropdown={!filters.rating ? "Ratings" : filters.rating}
            onClick={openRatings}
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
