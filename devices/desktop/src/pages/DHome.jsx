import { useMemo, useState } from "react";
import HomeDesktop from "./HomeDesktop";
import HomeTablet from "./HomeTablet";

const genreList = [
  {
    title: "Ballroom",
    image: "/card2@3x.png",
  },
  {
    title: "Contemporary",
    image: "/card2@3x.png",
  },
  {
    title: "Cultural",
    image: "/card2@3x.png",
  },
  {
    title: "Hip-hop",
    image: "/card2@3x.png",
  },
  {
    title: "Jazz",
    image: "/card2@3x.png",
  },
  {
    title: "Tap",
    image: "/card2@3x.png",
  },
  {
    title: "Folk",
    image: "/card2@3x.png",
  },
  {
    title: "Modern",
    image: "/card2@3x.png",
  },
  {
    title: "Latin",
    image: "/card2@3x.png",
  },
];

const trendingList = [
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
];

const recentlyAddedList = [
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
  {
    likes: "783",
    views: "1043",
    image: "/card2@3x.png",
  },
];

const DHome = () => {
  const [user, setUser] = useState(true);

  return (
    <>
      <div className="hidden xl:flex">
        <HomeDesktop genreList={genreList} trendingList={trendingList} recentlyAddedList={recentlyAddedList} />
      </div>

      <div className="flex xl:hidden">
        <HomeTablet genreList={genreList} trendingList={trendingList} recentlyAddedList={recentlyAddedList} />
      </div>
    </>
  );
};

export default DHome;
