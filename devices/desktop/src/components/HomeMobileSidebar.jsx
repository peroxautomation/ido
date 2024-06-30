import React, { useState, useEffect } from "react";
import Feature from "../components/Feature";

const gameData = []


const HomeMobileSidebar = () => {


  return (
    <div className="w-full relative min-h-[812px] h-screen flex flex-row items-start justify-start gap-[10px] text-left text-5xl text-gray-400 font-poppins">
      <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#1e1e1e,_#040303)] overflow-y-auto flex flex-col items-center justify-center z-[0]">
        <div className="self-stretch flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-dark-layer-3 overflow-hidden shrink-0 flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-2.5 px-0">
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start p-2.5 gap-[10px]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[20px]">
                <div
                  className={`self-stretch h-screen overflow-y-auto shrink-0 flex flex-col items-start justify-start gap-[10px] text-gray-400`}
                >
                  {gameData &&
                    gameData.map((game, idx) => (
                      <div
                        className="self-stretch h-[325px] shrink-0 flex flex-row items-start justify-start"
                        key={idx}
                      >
                        <div
                          className="flex-1 rounded-lg h-[325px] overflow-hidden flex flex-row items-center justify-center]"
                          style={{
                            "background-image": `url(${game?.image})`,
                            "background-repeat": "no-repeat",
                            "background-size": "cover",
                            "background-position": "top",
                          }}
                        >
                          <div className="self-stretch flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08),_#000)] overflow-hidden flex flex-col items-start justify-end pt-0 px-[30px] pb-[30px] gap-[10px]">
                            <div className="self-stretch flex flex-row items-start justify-between">
                              <div className="flex flex-col items-start justify-start gap-[20px]">
                                <div className="flex flex-row items-center justify-center">
                                  <b className="relative whitespace-pre-wrap">
                                    {game?.title}
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[8px]">
                                  {game &&
                                    game.features.map((f, idx) => (
                                      <Feature key={idx} adventure={f} />
                                    ))}
                                </div>
                              </div>
                              <div className="self-stretch w-[54px] rounded" />
                            </div>
                            <div className="rounded bg-overlay-2 flex flex-row items-start justify-start p-1.5 text-base text-gray-100">
                              <div className="relative font-medium">Play</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMobileSidebar;
