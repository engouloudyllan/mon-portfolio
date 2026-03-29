import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { HiSlash } from "react-icons/hi2";
import { TfiWorld } from "react-icons/tfi";
import { MdDarkMode } from "react-icons/md";
import ButtonStyle from "../../components/ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const MyPortfolio: React.FC = () => {
  return (
    <>
      <header className="w-full h-18 bg-surface/30 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b-[1.6px] border-primary-fixed/10 flex items-center justify-center max-useCase1:h-16">
        <section className=" flex flex-row justify-between px-5 items-center max-w-437.5 h-full w-full max-useCase2:px-3.25">
          <div className="flex flex-row gap-1 items-center">
            <IoChevronBackOutline className="size-8 text-primary-fixed shadow-2xl max-useCase2:size-6" />
            <span className="font-display text-white text-[1.5rem] text-shadow-[0_2px_10px_rgba(209,239,104,0.3)] max-useCase2:text-[1.3rem]">
              dyllan-lc
            </span>
            <div className="flex items-center flex-row transform-[translateX(-30%)]">
              <HiSlash className="size-8 text-primary-fixed transform-[translateX(50%)] max-useCase2:size-6" />
              <IoChevronForwardOutline className="size-8 text-primary-fixed max-useCase2:size-6" />
            </div>
          </div>
          <div className="h-full flex items-center max-useCase1:hidden">
            <ul className="gap-8 flex flex-row">
              <li>
                <a
                  href="#accueil"
                  className="font-body text-[#DFFD74] text-[1.01rem] font-normal max-xl:text-[14px]"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#a_propos"
                  className="font-body text-[#97979F] text-[1.01rem] font-normal max-xl:text-[14px]"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#competences"
                  className="font-body text-[#97979F] text-[1.01rem] font-normal max-xl:text-[14px]"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#projets"
                  className="font-body text-[#97979F] text-[1.01rem] font-normal max-xl:text-[14px]"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="font-body text-[#97979F] text-[1.01rem] font-normal max-xl:text-[14px]"
                >
                  Expériences
                </a>
              </li>
              <li>
                <a
                  href="#temoignages"
                  className="font-body text-[#97979F] text-[1.01rem] font-normal max-xl:text-[14px]"
                >
                  Témoignages
                </a>
              </li>
            </ul>
          </div>
          <div className="h-full flex items-center gap-2.5">
            <TfiWorld className="size-7 text-[#97979F] p-1 hover:bg-surface cursor-pointer rounded-full max-useCase1:size-6" />
            <MdDarkMode className="size-7 text-[#97979F] p-0.5 hover:bg-surface cursor-pointer rounded-full max-useCase1:size-6" />
            <ButtonStyle
              value="Contact"
              onClick={() => {}}
              className="h-8 w-19 py-2 text-[12px]! font-medium font-body max-useCase1:hidden"
            />
            <RxHamburgerMenu className="size-6 text-[#97979F] p-[0.4px] hover:bg-surface cursor-pointer rounded-full min-useCase1:hidden" />
          </div>
        </section>
      </header>
      <main>
        {/*********************************************  Section Hero ******************************************/}
        <div className="w-full h-screen bg-surface relative flex justify-center items-center">
          <div className="absolute inset-0 bg-primary-fixed/5 blur-2xl rounded-full w-auto h-screen max-w-200 mx-auto" />
          <div className="flex flex-col gap-3.5 items-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-2.5 px-4 py-1.5 rounded-full items-center">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-fixed opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-primary-fixed"></span>
                </span>
                <span className="text-primary-fixed uppercase text-[13px] font-body word-spacing-[0.1em]">Disponible pour de nouveaux projets</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[50px] font-extrabold text-white font-clash-display capitalize h-fit!">fullstack</span>
                <span className="text-[60px] font-extrabold text-white font-clash-display capitalize">developer</span>
              </div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyPortfolio;
