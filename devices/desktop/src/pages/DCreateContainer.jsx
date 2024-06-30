import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import UserPost from "../components/UserPost";
import VariantsSorry from "../components/VariantsSorry";

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

const DCreateContainer = () => {
  const [isComment, setIsComment] = useState(false);
  const [isStory, setIsStory] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isError, setisError] = useState(false);

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
      {isModal && (
        <>
          <div className="modal_background_tint" />
          {isError && (
            <VariantsSorry
              hugeIconinterfaceoutlinew="/hugeiconinterfaceoutlinewarning.svg"
              orSignUpBy="Sorry we cannot share your video due to our copyright policy"
              hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
              showInputsCTA
              showCTA
              variantsSorryPosition="absolute"
              variantsSorryTop="calc(50% - 228px)"
              variantsSorryLeft="calc(50% - 208px)"
              inputsCTAAlignSelf="stretch"
              inputsCTAWidth="unset"
              inputsCTAHeight="unset"
              cTAAlignSelf="stretch"
              cTAWidth="unset"
            />
          )}
        </>
      )}
    </div>
  );
};

export default DCreateContainer;
