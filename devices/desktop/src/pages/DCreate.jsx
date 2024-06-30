import React, { useState, useEffect } from "react";
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

const DCreate = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [isCreateChallenge, setIsCreateChallenge] = useState(false);
  const [isCreateCover, setIsCreateCover] = useState(false);

  async function openCreatehallenge() {
    setIsModal(true);
    setIsCreateChallenge(true);
    setIsCreateCover(false);
  }
  async function closeCreateChallenge() {
    setIsModal(false);
    setIsCreateChallenge(false);
    setIsCreateCover(false);
  }

  async function openCreateCover() {
    setIsModal(true);
    setIsCreateChallenge(false);
    setIsCreateCover(true);
  }
  async function closeCreateCover() {
    setIsModal(false);
    setIsCreateChallenge(false);
    setIsCreateCover(false);
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Header user={true} />
      <>
        <div className="overflow-y-scroll h-full">
          <div className="flex flex-col justify-center items-center">
            {allPosts &&
              allPosts.map((item, i) => (
                <UserPost
                  key={i}
                  selectedPost={selectedPost}
                  setSelectedPost={setSelectedPost}
                  post={item}
                />
              ))}
          </div>
        </div>
        {isModal && (
          <ModalCard className={""}>
            <>
              {isEditProfile && (
                <VariantsEditProfile
                  ellipse1255="/ellipse-1255@2x.png"
                  hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation2.svg"
                  input="Sabina Jeyhunzade"
                  hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
                  phinfoLight="/phinfolight.svg"
                  hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
                  variantsEditProfileWidth="416px"
                  variantsEditProfileHeight="456px"
                  variantsEditProfilePosition="absolute"
                  variantsEditProfileTop="calc(50% - 228px)"
                  variantsEditProfileRight="unset"
                  variantsEditProfileBottom="unset"
                  variantsEditProfileLeft="calc(50% - 208px)"
                  closeModal={closeEditProfile}
                />
              )}
              {isRelating && (
                <VariantsRelating
                  rectangle2002="/rectangle-20021@2x.png"
                  rectangle20021="/rectangle-20021@2x.png"
                  rectangle20022="/rectangle-20021@2x.png"
                  rectangle20023="/rectangle-20021@2x.png"
                  rectangle20024="/rectangle-20021@2x.png"
                  variantsRelatingPosition="absolute"
                  variantsRelatingTop="calc(50% - 228px)"
                  variantsRelatingLeft="calc(50% - 208px)"
                  closeModal={closeModalRelating}
                />
              )}
            </>
          </ModalCard>
        )}
      </>
    </div>
  );
};

export default DCreate;
