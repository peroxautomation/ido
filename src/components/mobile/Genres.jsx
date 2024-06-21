import Genre from "./Genre";
import GenreFocused from "./GenreFocused";

/**
 * Home page genres container
 * @returns
 */
const Genres = () => {
  const genresArray = [
    { name: "Hip Hop", src: "/rectangle-1972@2x.png" },
    { name: "Rock", src: "/rectangle-1972@2x.png" },
    { name: "Jazz", src: "/rectangle-1972@2x.png" },
    { name: "Pop", src: "/rectangle-1972@2x.png" },
    { name: "Classical", src: "/rectangle-1972@2x.png" },
    { name: "Reggae", src: "/rectangle-1972@2x.png" },
    { name: "Country", src: "/rectangle-1972@2x.png" },
    { name: "Blues", src: "/rectangle-1972@2x.png" },
  ];

  const renderGenres = () => {
    return genresArray.map((element, index) => (
      <Genre name={element.name} key={index} src={element.src} />
    ));
  };

  return (
    <div
      id="genreContainer"
      className={`main-page-genre-container`}
    >
      {/*renderGenres()*/}
      <Genre />
      <GenreFocused />
      <Genre />
    </div>
  );
};

export default Genres;
