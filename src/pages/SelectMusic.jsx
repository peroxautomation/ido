import SearchInput from "../components/mobile/SearchInput";
import MusicRow from "../components/mobile/MusicRow";
import Title from "../components/mobile/Title";
import { useNavigate, useParams } from "react-router-dom";

const SelectMusic = () => {
  const navigate = useNavigate();
  const { flow } = useParams();

  // Navigate to the next page
  const onMusictClick = () => {
    navigate(`/create/${flow}/add-music-timeline`, { state: { flow: flow } });
  };

  return (
    <div className="w-screen relative bg-neutral-100 h-screen overflow-hidden grid grid-flow-row justify-items-center">
      <img
        className="top-0 left-0 absolute h-screen"
        alt=""
        src="/devicemobile.svg"
      />
      <Title className="" pageName="Add Music" />
      <SearchInput />
      <div className="relative top-[7vh] w-[90vw] h-[75vh] overflow-y-scroll overflow-x-hidden flex flex-col items-start justify-start">
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
        <MusicRow onClick={onMusictClick} />
      </div>
    </div>
  );
};

export default SelectMusic;
