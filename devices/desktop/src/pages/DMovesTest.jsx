
import Header from "../components/Header";
import UserPost from "../components/UserPost";

const allPosts = [
  {
    url: "url('/moves@3x.png')",
  },
  {
    url: "url('/moves@3x.png')",
  },
  {
    url: "url('/moves@3x.png')",
  },
];

const DMovesTest = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Header user={true} />
      <div className="overflow-y-scroll h-full">
        <div
          // className="flex flex-col justify-center items-center gap-2"
          className="flex flex-col justify-center items-center"
        >
          {allPosts && allPosts.map((item, i) => <UserPost key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default DMovesTest;
