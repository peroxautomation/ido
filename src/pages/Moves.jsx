import Moves1 from "../components/mobile/Moves1";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import TopNavbar from "../components/mobile/TopNavbar";
import { useState } from "react";

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
        handleUpdateData={setVideoData}
      ></Moves1>
    ));
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <div className="absolute top-[7.25rem] left-[0rem] h-[calc(100vh_-_10rem)] w-screen overflow-y-auto flex flex-col items-start justify-start gap-[1.5rem]">
        {renderMoves()}
      </div>
      <ButtomNavbar currentPage="Moves" />
      <TopNavbar sidebarDesktopHeaderTop="2.5rem" />
    </div>
  );
};

export default Moves;
