import Moves1 from "../components/mobile/Moves1";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import TopNavbar from "../components/mobile/TopNavbar";
import { useEffect, useState } from "react";

/**
 * Moves screen
 * @returns A JSX element
 */
const Moves = () => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [videoData, setVideoData] = useState([
    {
      id: 0,
      videoSource: "",
      ratings: 4.5,
      likes: 63,
      views: 487,
      creatorName: "Ronald Hilson",
      datePosted: "06.04.2024",
      location: "Dehli",
      genre: "Hip-Hop",
      isRelating: false,
      isLiked: false,
      isRated: false,
      stroyData: [
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
      ],
    },
    {
      id: 1,
      videoSource: "",
      ratings: 4.5,
      likes: 63,
      views: 487,
      creatorName: "Ronald Hilson",
      datePosted: "06.04.2024",
      location: "Dehli",
      genre: "Hip-Hop",
      isRelating: false,
      isLiked: false,
      isRated: false,
      stroyData: [
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
      ],
    },
    {
      id: 2,
      videoSource: "",
      ratings: 4.5,
      likes: 63,
      views: 487,
      creatorName: "Ronald Hilson",
      datePosted: "06.04.2024",
      location: "Dehli",
      genre: "Hip-Hop",
      isRelating: false,
      isLiked: false,
      isRated: false,
      stroyData: [
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
      ],
    },
    {
      id: 3,
      videoSource: "",
      ratings: 4.5,
      likes: 63,
      views: 487,
      creatorName: "Ronald Hilson",
      datePosted: "06.04.2024",
      location: "Dehli",
      genre: "Hip-Hop",
      isRelating: false,
      isLiked: false,
      isRated: false,
      stroyData: [
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
        { question: "When did you start dancing?", answer: "2018" },
      ],
    },
  ]);

  /************************************************************************* */
  /***************************{Component Methods}*************************** */
  /************************************************************************* */
  const renderMoves = () => {
    return videoData.map((element, index) => (
      <Moves1
        videoData={element}
        key={index}
        handleRelate={handleRelate}
        handleLikeVideo={handleLikeVideo}
        handleRateVideo={handleRateVideo}
      ></Moves1>
    ));
  };

  /**
   * Handle relate to user
   */
  const handleRelate = (videoId) => {
    const newArray = videoData.map((element) => {
      if (element.id == videoId) {
        element.isRelating = !element.isRelating;
      }
      return element;
    });
    setVideoData(newArray);
  };

  /**
   * Handle liking a video
   */
  const handleLikeVideo = (videoId) => {
    setVideoData((prevVideoData) =>
      prevVideoData.map((element) => {
        if (element.id === videoId) {
          const isLiked = !element.isLiked;
          return {
            ...element,
            isLiked: isLiked,
            likes: element.likes + (isLiked ? 1 : -1),
          };
        }
        return element;
      })
    );
  };

  /**
   * Handle rating a video
   */
  const handleRateVideo = (videoId, value) => {
    const newArray = videoData.map((element) => {
      if (element.id == videoId) {
        element.ratings = (element.ratings / 2 + (5 * (value - 1)) / 8).toFixed(
          1
        );
        element.isRated = true;
      }
      return element;
    });
    setVideoData(newArray);
  };

  /**
   * Infinte scroll function
   */
  const handleScroll = () => {
    const movesContainer = document.getElementById("movesContainer");
    if (
      movesContainer.clientHeight + movesContainer.scrollTop + 10 >=
      movesContainer.scrollHeight
    ) {
      //Generate new items for video data array
      const newArray = videoData.map((element) => {
        element.id += 10;
        return element;
      });
      setVideoData((prev) => [...prev, ...newArray]);
    }
  };

  /**
   * Use effect for infinite scroll
   */
  useEffect(() => {
    const movesContainer = document.getElementById("movesContainer");
    movesContainer.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => {
      movesContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <div
        id="movesContainer"
        className="absolute top-[7.25rem] left-[0rem] h-[calc(100vh_-_11rem)] w-screen overflow-y-auto flex flex-col items-start justify-start gap-[1.5rem]"
      >
        {renderMoves()}
      </div>
      <ButtomNavbar currentPage="Moves" />
      <TopNavbar sidebarDesktopHeaderTop="2.5rem" />
    </div>
  );
};

export default Moves;
