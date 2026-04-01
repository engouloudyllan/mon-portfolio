import React, { useEffect } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { HiSlash } from "react-icons/hi2";
import { TfiWorld } from "react-icons/tfi";
import { MdDarkMode } from "react-icons/md";
import ButtonStyle from "../../components/ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import "./main.css";

const MyPortfolio: React.FC = () => {
  const itemsTechnos = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      icon: "https://tailwindcss.com/favicons/favicon.ico?v=4",
      color: "#38B2AC",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E",
    },
    {
      name: "Git & Github",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      color: "#FF6C37",
    },
    {
      name: "Express JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000",
    },
    {
      name: "Mysql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "Prisma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      color: "#2D3748",
    },
    {
      name: "Nest JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      color: "#E0234E",
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Expo",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
      color: "#000020",
    },
    {
      name: "Socket io",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      color: "#010101",
    },
    {
      name: "Netlify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      color: "#00C7B7",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      color: "#000000",
    },
  ];

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
              className="h-8 py-2 px-6 text-[12px]! font-semibold font-body max-useCase1:hidden"
            />
            <RxHamburgerMenu className="size-6 text-[#97979F] p-[0.4px] hover:bg-surface cursor-pointer rounded-full min-useCase1:hidden" />
          </div>
        </section>
      </header>
      <main>
        {/*********************************************  Section Hero ******************************************/}
        <div className="w-full h-auto bg-surface relative flex justify-center items-end min-h-screen">
          {/**<div className="absolute inset-0 bg-primary-fixed/5 blur-2xl rounded-full w-auto h-screen max-w-200 mx-auto" />**/}
          <div className="absolute w-full h-screen flex justify-center items-center inset-0 z-0 ">
            <div className="gradient-bg w-full h-screen translate-y-15" />
          </div>
          <div className="flex flex-col gap-50 items-center contentResponsive">
            <div className="flex flex-col gap-12 items-center">
              <div className="flex gap-2.5 px-4 rounded-full items-center mt-35 relative z-10 resizeMargin">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-fixed opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-primary-fixed"></span>
                </span>
                <span className="text-primary-fixed uppercase text-[10px] font-dm-sans font-bold word-spacing-[0.1em]">
                  Disponible pour de nouveaux projets
                </span>
              </div>
              <div className="flex flex-col items-center gap-4 relative z-10">
                <span className="text-[78px] font-extrabold text-white font-roboto capitalize leading-[0.8] tracking-[-0.05em] text1-responsive">
                  fullstack
                </span>
                <span className="text-[80px] font-extrabold text-white font-roboto capitalize tracking-[-0.05em] leading-[0.8] text2-responsive">
                  developer
                </span>
              </div>
              <div className="relative max-w-170 h-auto flex gap-1.5 overflow-hidden z-10 w-auto max-md:max-w-140 max-sm:max-w-[100vw]">
                <div
                  className="absolute left-0 top-0 bottom-0 w-12 z-10 
                      bg-linear-to-r from-surface to-transparent 
                      pointer-events-none"
                />
                <div
                  className="absolute right-0 top-0 bottom-0 w-12 z-10 
                      bg-linear-to-l from-surface to-transparent 
                      pointer-events-none"
                />
                <div className="flex items-center justify-start gap-6 py-1 px-2 scrollInfiniteLeft">
                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}

                  {itemsTechnos.map((techno) => (
                    <>
                      <div
                        key={techno.name}
                        style={
                          {
                            "--tech-color": techno.color,
                          } as React.CSSProperties
                        }
                        className="flex flex-col w-auto h-auto bg-surface-variant/30 
               border border-b-surface-highest rounded-md 
                items-center justify-center
               text-white/20 font-display text-4xl gap-1.5 bg-surface-container px-4 py-2
               hover:border-(--tech-color)/50 transition-colors"
                      >
                        <img
                          src={techno.icon}
                          alt={techno.name}
                          className="w-4 h-4"
                        />
                        <span className="text-[12px] font-bold text-nowrap">
                          {techno.name}
                        </span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center max-useCase3:flex-col">
                <ButtonStyle
                  value="Voir mes projets"
                  onClick={() => null}
                  className="relative z-10 font-semibold font-body text-[15px] text-nowrap"
                />
                <ButtonStyle
                  value="Télécharger CV"
                  onClick={() => null}
                  className="relative z-10 font-semibold font-body text-[15px] text-nowrap bg-transparent glass-container text-white"
                />
              </div>
            </div>
            <div>
              <FaChevronDown className="text-primary-fixed/20 size-5 animate-bounce mb-15!" />
            </div>
          </div>
        </div>
        {/*********************************************  Section about ******************************************/}
        <div className="w-full bg-surface flex justify-center px-5 items-center h-auto max-useCase2:px-3.25 mb-10">
          <div className="w-full h-auto bg-surface-low px-50 py-20 mx-auto max-w-437.5 rounded-2xl flex flex-row items-center justify-between contentAbout max-xll:flex-col max-xll:gap-16 max-useCase2:p-8!">
            <div className="flex flex-col gap-10 -translate-y-35 max-xll:translate-y-0 max-xll:items-center max-xll:text-center">
              <span className="text-[16px] uppercase text-primary-fixed font-body word-spacing-[0.1em] contentAbout1 font-medium">
                À propos de moi
              </span>
              <p className="text-[48px] font-bold font-body text-white leading-[1.10] contentAbout2 max-md:hidden">
                Donner du sens <br /> au code par le{" "}
                <span className="text-[#6b7280] italic">design</span> <br /> et
                la <span className="text-[#6b7280] italic">performance</span>.
              </p>
            </div>
            <div className="flex flex-col gap-25">
              <div className="flex flex-col gap-4">
                <p className="text-[#c6c8b2] text-[22px] font-body max-w-160 mt-6 leading-10 word-spacing-[0.2em] contentAbout3 max-xll:text-center max-md:text-[16px]! max-md:w-full max-md:mt-0">
                  Je suis développeur Fullstack JavaScript, animé par la
                  création d’expériences digitales modernes et performantes. Mon
                  approche repose sur un équilibre entre rigueur technique et
                  sens du design — où chaque ligne de code a une intention, et
                  chaque interface apporte de la clarté.
                </p>
                <p className="text-[#c6c8b2] text-[17px] font-body max-w-160 mt-6 leading-8 word-spacing-[0.2em] contentAbout4 max-xll:text-center max-md:text-[14px]! max-md:w-full">
                  Formé sur un écosystème fullstack complet incluant React,
                  Node.js et le design UI/UX, je conçois des applications
                  fiables, évolutives et centrées utilisateur. Pour moi, un bon
                  produit ne se limite pas à fonctionner — il se construit avec
                  précision, cohérence et souci du détail.
                </p>
              </div>
              <div className="flex gap-12 max-xll:justify-end">
                <div className="flex flex-col gap-4">
                    <span className="text-primary-fixed text-[40px] font-roboto font-bold max-useCase2:text-[30px]">01+</span>
                    <span className="font-roboto font-medium text-[17px] text-[#6b7280] uppercase max-useCase2:text-[12px]">Années EXP.</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-primary-fixed text-[40px] font-roboto font-bold max-useCase2:text-[30px]">00</span>
                    <span className="font-roboto font-medium text-[17px] text-[#6b7280] uppercase max-useCase2:text-[12px]">projet(s) livré(s)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyPortfolio;
