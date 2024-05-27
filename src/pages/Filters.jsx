import TopNavbar from "../components/mobile/TopNavbar";
import Dropdown3 from "../components/mobile/Dropdown3";
import Button1 from "../components/mobile/Button1";

import RatingsDropdown from "../components/mobile/RatingsDropdown"
import GenreDropdown from "../components/mobile/GenreDropdown"
import YearDropdown from "../components/mobile/YearDropdown"
import CountryDropdown from "../components/mobile/CountryDropdown"
import Title from "../components/mobile/Title";
import ButtomNavbar from "../components/mobile/ButtomNavbar";

const Filters = () => {
  // Toggle genre dropdown list on and off
  const openGenere = () => {
    const element = document.getElementById('genreDropdown');
    if(element !== null)
      element.classList.toggle('hidden');
  }

  // Toggle country dropdown list on and off
  const openCountry = () => {
    const element = document.getElementById('countryDropdown');
    if(element !== null)
      element.classList.toggle('hidden');
  }

  // Toggle ratings dropdown list on and off
  const openRatings = () => {
    const element = document.getElementById('ratingsDropdown');
    if(element !== null)
      element.classList.toggle('hidden');
  }

  // Toggle year dropdown list on and off
  const openYear = () => {
    const element = document.getElementById('yearDropdown');
    if(element !== null)
      element.classList.toggle('hidden');
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <TopNavbar sidebarDesktopHeaderTop="0rem" />
      <Title returnPage="/search" pageName="Filters" className="!top-[16%] !relative"/>
      <section className="relative w-[calc(100%_-_40px)] top-[20%] right-[1.25rem] left-[1.25rem] flex flex-col items-end justify-start gap-[1rem]">
        <div className="relative self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <Dropdown3 dropdown="Genre" onClick={openGenere} list={<GenreDropdown className="hidden"></GenreDropdown>}/>
          <Dropdown3 dropdown="Country" onClick={openCountry} list={<CountryDropdown className="hidden"></CountryDropdown>}/>
        </div>
        <div className="relative self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <Dropdown3 dropdown="Year" onClick={openYear} list={<YearDropdown className="hidden"></YearDropdown>}/>
          <Dropdown3 dropdown="Raiting" onClick={openRatings} list={<RatingsDropdown className="hidden"></RatingsDropdown>}/>
        </div>
        <Button1
          cTAAlignSelf="stretch"
          cTAPosition="unset"
          cTATop="unset"
          cTALeft="unset"
          cTAWidth="unset"
          cTA="Apply"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
          cTARight="unset"
          cTABottom="unset"
        />
      </section>
      <ButtomNavbar currentPage="Search" />
    </div>
  );
};

export default Filters;
