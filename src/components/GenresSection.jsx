import GenreCard from "./GenreCard";

const GenresSection = () => {
  return (
    <div className=" overscroll-auto">
    <div className="absolute top-[148px] right-[-80px] left-[312px] h-[130px] flex flex-row items-start justify-start gap-[24px] text-center text-base text-neutral-100 font-body-regular">
      <GenreCard genreName="Ballroom" />
      <GenreCard genreName="Contemporary" genreNameLeft="14px" />
      <GenreCard genreName="Cultural" genreNameLeft="36px" />
      <GenreCard genreName="Hip Hop" genreNameLeft="35px" />
      <GenreCard genreName="Jazz" genreNameLeft="51px" />
      <GenreCard genreName="Tap" genreNameLeft="52px" />
      <GenreCard genreName="Folk" genreNameLeft="50px" />
      <GenreCard genreName="Modern" genreNameLeft="37px" />
    </div>
    </div>
  );
};

export default GenresSection;
