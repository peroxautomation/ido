/**
 * Home screen focused genre
 * @param {*}
 * @returns
 */
const GenreFocused = (props) => {
  const {name, src} = props;
  return (
    <div
      className={`main-page-genre-focused`}
    >
      <img
        className="main-page-genre-focused-image "
        alt=""
        src="/rectangle-1972@2x.png"
      />
      <b className="main-page-genre-text">
        Hip Hop
      </b>
    </div>
  );
};

export default GenreFocused;
