import { useNavigate } from "react-router-dom";
import MovesSlider from "./MovesSlider";
import MovesBtn2 from "./MovesBtn2";
import MovesHeader2 from "./MovesHeader2";
import CommentContainer from "./CommentContainer";
import StoryContainer from "./StoryContainer";
import { useState } from "react";

/**
 * Moves component used in the Moves screen
 * @param {*} videoData The video data
 * @param handleUpdateData handler to update the data
 * @returns
 */
const Moves1 = (props) => {
  const { videoData, handleUpdateData } = props;
  const navigate = useNavigate();
  const [isCommentContainerActive, setIsCommentContainerActive] =
    useState(false);
  const [isStoryActive, setIsStoryActive] = useState(false);

  return (
    <div
      className={`w-[100%] relative h-[100%] overflow-hidden shrink-0 bg-[url('/public/moves1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[0.75rem] text-neutral-100 `}
    >
      {isCommentContainerActive && <CommentContainer />}
      {isStoryActive && <StoryContainer storyData={videoData.stroyData} />}
      <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] flex flex-col items-start justify-start">
        <MovesHeader2
          isCreator={false}
          creatorName={videoData.creatorName}
          datePosted={videoData.datePosted}
          location={videoData.location}
          genre={videoData.genre}
          onRelateClick={videoData.creatorName}
          isRelating={videoData.creatorName}
        />
      </div>
      <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] flex flex-row items-end justify-start">
        <div className="flex-1 flex flex-col items-start justify-center py-[1rem] px-[1.187rem] gap-[1.5rem]">
          <div className="self-stretch h-[2rem] flex flex-row items-center justify-start"></div>
          <MovesSlider />
          <div className="self-stretch flex flex-row items-start justify-start">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/hugeiconarrowsoutlinezoom-outrectangle.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[1rem] px-[1.25rem] gap-[1rem]">
          <MovesBtn2
            onClick={null}
            imgSrc={"/heart-icons.svg"}
            count={videoData.likes}
          />
          <MovesBtn2
            onClick={null}
            imgSrc={"/star-2.svg"}
            count={videoData.views}
          />
          <MovesBtn2 imgSrc={"/views-icon.svg"} count={videoData.views} />
          <MovesBtn2 onClick={null} imgSrc={"/comments-icon.svg"} />
          <MovesBtn2 onClick={null} imgSrc={"/saveToPlaylist.svg"} />
          <MovesBtn2 onClick={null} imgSrc={"/share-icon.svg"} />
          <MovesBtn2 onClick={null} imgSrc={"/challenge-icon.svg"} />
          <MovesBtn2 onClick={null} imgSrc={"/donate.png"} />
        </div>
      </div>
    </div>
  );
};

export default Moves1;
