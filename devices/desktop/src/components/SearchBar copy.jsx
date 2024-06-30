import PropTypes from "prop-types";

const SearchBar = ({ className = "", hugeIconinterfacesolidsea }) => {
  return (
    <div
      className={`max-w-full w-full flex flex-row items-start justify-start text-center text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div 
      // className="w-[564px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 box-border"
      className="w-full rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 box-border"
      >
        <div className="relative leading-[24px] font-semibold">Search</div>
      </div>
      <div className="rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-white-16 flex flex-row items-start justify-start py-2.5 px-4">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidsea}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidsea: PropTypes.string,
};

export default SearchBar;
