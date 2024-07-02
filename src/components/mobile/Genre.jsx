/**
 * Home screen genre
 * @param {*} props
 * @returns A JSX element
 */
const Genre = (props) => {
  const {name, src} = props;
  return (
    <div className={`main-page-genre`}>
      <img
        className="main-page-genre-image"
        alt=""
        src="/rectangle-1974@2x.png"
      />
      <b className="main-page-genre-text ">Hip-hop </b>
    </div>
  );
};

export default Genre;
