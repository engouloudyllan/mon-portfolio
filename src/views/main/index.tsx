import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { HiSlash } from "react-icons/hi2";
import { TfiWorld } from "react-icons/tfi";
import { MdDarkMode } from "react-icons/md";
import ButtonStyle from "../../components/ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import {
  CircleStackIcon,
  CommandLineIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import "./main.css";
import StackProgression from "../../components/common/StackProgression";
import project1Img from "../../assets/images/project1.png";
import project2Img from "../../assets/images/int.webp";
import project3Img from "../../assets/images/project3.jpg";
import project4Img from "../../assets/images/project4.jpg";
import project5Img from "../../assets/images/project5.png";
import { IoMdLink } from "react-icons/io";
import { IoCode } from "react-icons/io5";
import Pourcentage from "../../components/ui/Pourcentage";
import Experience from "../../components/common/Experience";

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

  const StackFront = [
    {
      label: "HTML",
      value: 100,
      colorClass: "text-orange-500",
    },
    {
      label: "CSS",
      value: 90,
      colorClass: "text-blue-500",
    },
    {
      label: "Tailwind CSS",
      value: 85,
      colorClass: "text-teal-500",
    },
    {
      label: "JavaScript",
      value: 95,
      colorClass: "text-yellow-500",
    },
    {
      label: "TypeScript",
      value: 80,
      colorClass: "text-blue-600",
    },
    {
      label: "React",
      value: 90,
      colorClass: "text-cyan-500",
    },
    {
      label: "React Native",
      value: 70,
      colorClass: "text-cyan-600",
    },
  ];

  const StackBack = [
    {
      label: "Node.js",
      value: 90,
      colorClass: "text-green-500",
    },
    {
      label: "Express.js",
      value: 85,
      colorClass: "text-gray-800",
    },
    {
      label: "Nest.js",
      value: 1,
      colorClass: "text-red-500",
    },
    {
      label: "Socket.io",
      value: 10,
      colorClass: "text-gray-900",
    },
    {
      label: "Prisma",
      value: 80,
      colorClass: "text-[#090a15]",
    },
    {
      label: "MySQL",
      value: 80,
      colorClass: "text-blue-700",
    },
    {
      label: "MongoDB",
      value: 10,
      colorClass: "text-green-700",
    },
  ];

  const StackDevOps = [
    {
      label: "Git & Github",
      value: 90,
      colorClass: "text-gray-900",
    },
    {
      label: "Netlify",
      value: 80,
      colorClass: "text-teal-500",
    },
    {
      label: "Vercel",
      value: 70,
      colorClass: "text-gray-900",
    },
    {
      label: "Render",
      value: 60,
      colorClass: "text-purple-500",
    },
    {
      label: "Docker",
      value: 10,
      colorClass: "text-blue-600",
    },
  ];
  const filterProjects = ["Tous", "Frontend", "Backend", "Fullstack"];
  const StackArchitecture = [
    {
      label: "REST API",
      value: 85,
      colorClass: "text-blue-500",
    },
    {
      label: "Microservices",
      value: 3,
      colorClass: "text-pink-500",
    },
    {
      label: "Figma",
      value: 70,
      colorClass: "text-purple-500",
    },
    {
      label: "Adobe XD",
      value: 90,
      colorClass: "text-pink-500",
    },
  ];

  /*const itemsRef = React.useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    itemsRef.current.forEach((div) => {
      div.addEventListener("click", () => {});
    });
  }, []); **/ //A mémoriser !!!

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
                  href="#projects"
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
        <div
          className="w-full h-auto bg-surface relative flex justify-center items-end min-h-screen"
          id="accueil"
        >
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
        <div
          className="w-full bg-surface flex justify-center px-5 items-center h-auto max-useCase2:px-3.25 mb-20"
          id="a_propos"
        >
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
                  <span className="text-primary-fixed text-[40px] font-roboto font-bold max-useCase2:text-[30px]">
                    01+
                  </span>
                  <span className="font-roboto font-medium text-[17px] text-[#6b7280] uppercase max-useCase2:text-[12px]">
                    Années EXP.
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-primary-fixed text-[40px] font-roboto font-bold max-useCase2:text-[30px]">
                    00
                  </span>
                  <span className="font-roboto font-medium text-[17px] text-[#6b7280] uppercase max-useCase2:text-[12px]">
                    projet(s) livré(s)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*********************************************  Section skills ******************************************/}
        <div
          className="w-full bg-[#0e0e10] flex justify-center px-5 items-center h-auto max-useCase2:px-3.25 py-30"
          id="competences"
        >
          <div className="w-full flex flex-col items-center gap-10 max-w-437.5 mx-auto">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-[40px] font-bold text-white font-body text-center max-useCase2:text-[31px]">
                Mon Environnement{" "}
                <span className="text-primary-fixed">Technique</span>
              </h2>
              <p className="text-[#c6c8b2] text-[17px] font-body max-w-260 mt-6 leading-8 word-spacing-[0.2em] contentAbout4 text-center max-md:text-[14px]! max-md:w-full">
                Une sélection des outils et technologies que j’utilise pour
                concevoir des applications modernes et évolutives. Mon
                expérience couvre à la fois le frontend et le backend, avec une
                attention particulière portée à la performance, à l’expérience
                utilisateur et à la qualité du code. En constante progression,
                chaque technologie présentée reflète une pratique concrète et
                une bonne compréhension des enjeux réels.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="p-10 rounded-md bg-surface-low flex flex-col gap-8">
                <div>
                  <CommandLineIcon className="size-9 text-[#f1f5c9]" />
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-white font-body font-bold text-[30px] capitalize">
                    frontend
                  </h2>
                  <div className="flex gap-4 flex-col">
                    {StackFront.map((skill, index) => (
                      <StackProgression
                        key={index}
                        label={skill.label}
                        value={skill.value}
                        size={50}
                        colorClass={skill.colorClass}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-10 rounded-md bg-surface-low flex flex-col gap-8">
                <div>
                  <CircleStackIcon className="size-9 text-[#8694fb]" />
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-white font-body font-bold text-[30px] capitalize">
                    backend
                  </h2>
                  <div className="flex gap-4 flex-col">
                    {StackBack.map((skill, index) => (
                      <StackProgression
                        key={index}
                        label={skill.label}
                        value={skill.value}
                        size={50}
                        colorClass={skill.colorClass}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-10 rounded-md bg-surface-low flex flex-col gap-8 h-fit!">
                <div>
                  <CloudIcon className="size-9 text-[#58f1c9]" />
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-white font-body font-bold text-[30px] capitalize">
                    devOps
                  </h2>
                  <div className="flex gap-4 flex-col">
                    {StackDevOps.map((skill, index) => (
                      <StackProgression
                        key={index}
                        label={skill.label}
                        value={skill.value}
                        size={50}
                        colorClass={skill.colorClass}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-10 rounded-md bg-surface-low flex flex-col gap-8 h-fit! stackError">
                <div>
                  <WrenchScrewdriverIcon className="size-9 text-[#e6667a]" />
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-white font-body font-bold text-[30px] capitalize">
                    Architecture
                  </h2>
                  <div className="flex gap-4 flex-col">
                    {StackArchitecture.map((skill, index) => (
                      <StackProgression
                        key={index}
                        label={skill.label}
                        value={skill.value}
                        size={50}
                        colorClass={skill.colorClass}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*********************************************  Section projects ******************************************/}
        <div
          className="w-full bg-surface flex justify-center items-center h-auto py-30"
          id="projects"
        >
          <div className="flex flex-col gap-13 max-w-410 px-5 mx-auto max-useCase2:px-3.25 w-full">
            <div className="flex justify-between max-useCase1:flex-col items-center max-useCase1:gap-18">
              <div className="flex flex-col max-useCase1:gap-10">
                <h2 className="text-[40px] font-bold text-white font-body text-center max-useCase2:text-[31px]">
                  Créations Digitales
                </h2>
                <span className="text-[16px] font-medium text-white font-body text-center min-useCase1:hidden">
                  Un aperçu de mon approche à travers des réalisations
                  concrètes.
                </span>
              </div>
              <div className="flex gap-3 max-useCase2:flex-wrap justify-center">
                {filterProjects.map((filter, index) => (
                  <ButtonStyle
                    key={index}
                    value={filter}
                    onClick={() => null}
                    className={`text-[14px] font-medium py-2 px-6 rounded-xl ${index === 0 ? "bg-primary-fixed" : "bg-surface-highest text-[#6b7280]"}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-8 max-[1170px]:grid-cols-2 max-[804px]:grid-cols-1 max-[804px]:max-w-135 mx-auto">
              <div className="flex flex-col bg-[#0e0e10] border-[1.35px] border-[#161618] rounded-[10px] overflow-hidden hover:border-primary-fixed/10 hover:border transition-all duration-300 projectCard">
                <div className="relative w-full h-68 border-b-[1.35px] border-[#161618] overflow-hidden">
                  <img
                    src={project1Img}
                    alt="img_portfolio"
                    className="w-full h-full bg-cover object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6 flex-col flex gap-3">
                  <h2 className="text-2xl font-body font-bold text-white">
                    Portfolio
                  </h2>
                  <p className="text-[#c6c8b2] text-[16px] font-body my-2 leading-6 word-spacing-[0.2em]">
                    Un portfolio digital moderne combinant une interface fluide
                    pour les visiteurs et un back office puissant pour la
                    gestion et l’analyse. Construit avec React, TypeScript,
                    TailwindCSS et Express.js, il allie performance, esthétique
                    et contrôle total.
                  </p>
                  <div className="flex gap-3 my-4 w-[83%] flex-wrap">
                    <ButtonStyle
                      value="React"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TypeScript"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TailwindCSS"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="Express.js"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoMdLink className="size-4.5 text-white mt-0.5" />
                        <span className="text-[14px] text-white font-medium ">
                          Live Demo
                        </span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoCode className="size-4.5 text-[#6b7280] mt-0.3" />
                        <span className="text-[14px] text-[#6b7280] font-medium ">
                          Live Demo
                        </span>
                      </div>
                    </div>
                    <Pourcentage
                      value={20}
                      size={40}
                      strokeWidth={6}
                      colorClass="text-primary-fixed"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#0e0e10] border-[1.35px] border-[#161618] rounded-[10px] overflow-hidden hover:border-primary-fixed/10 hover:border transition-all duration-300 projectCard">
                <div className="relative w-full h-68 border-b-[1.35px] border-[#161618] overflow-hidden">
                  <img
                    src={project2Img}
                    alt="img_siteEcommerce"
                    className="w-full h-full bg-cover object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6 flex-col flex gap-3">
                  <h2 className="text-2xl font-body font-bold text-white">
                    Institute L.C.M
                  </h2>
                  <p className="text-[#c6c8b2] text-[16px] font-body my-2 leading-6 word-spacing-[0.2em]">
                    Une solution e-commerce sur mesure pour la vente de livres,
                    pensée pour offrir simplicité, fluidité et fiabilité aux
                    utilisateurs. Dotée de paiements multi-canaux (Orange Money,
                    Mobile Money, PayPal) et conçue avec React, TypeScript,
                    TailwindCSS et Express.js.
                  </p>
                  <div className="flex gap-3 my-4 w-[83%] flex-wrap">
                    <ButtonStyle
                      value="React"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TypeScript"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TailwindCSS"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoMdLink className="size-4.5 text-white mt-0.5" />
                        <span className="text-[14px] text-white font-medium ">
                          Live Demo
                        </span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoCode className="size-4.5 text-[#6b7280] mt-0.3" />
                        <span className="text-[14px] text-[#6b7280] font-medium ">
                          Live Demo
                        </span>
                      </div>
                    </div>
                    <Pourcentage
                      value={5}
                      size={40}
                      strokeWidth={6}
                      colorClass="text-primary-fixed"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#0e0e10] border-[1.35px] border-[#161618] rounded-[10px] overflow-hidden hover:border-primary-fixed/10 hover:border transition-all duration-300 projectCard">
                <div className="relative w-full h-68 border-b-[1.35px] border-[#161618] overflow-hidden">
                  <img
                    src={project3Img}
                    alt="img_portfolio"
                    className="w-full h-full bg-cover object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6 flex-col flex gap-3">
                  <h2 className="text-2xl font-body font-bold text-white">
                    Portfolio
                  </h2>
                  <p className="text-[#c6c8b2] text-[16px] font-body my-2 leading-6 word-spacing-[0.2em]">
                    Un portfolio digital moderne combinant une interface fluide
                    pour les visiteurs et un back office puissant pour la
                    gestion et l’analyse. Construit avec React, TypeScript,
                    TailwindCSS et Express.js, il allie performance, esthétique
                    et contrôle total.
                  </p>
                  <div className="flex gap-3 my-4 w-[83%] flex-wrap">
                    <ButtonStyle
                      value="React"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TypeScript"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TailwindCSS"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="Express.js"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoMdLink className="size-4.5 text-white mt-0.5" />
                        <span className="text-[14px] text-white font-medium ">
                          Live Demo
                        </span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoCode className="size-4.5 text-[#6b7280] mt-0.3" />
                        <span className="text-[14px] text-[#6b7280] font-medium ">
                          Live Demo
                        </span>
                      </div>
                    </div>
                    <Pourcentage
                      value={20}
                      size={40}
                      strokeWidth={6}
                      colorClass="text-primary-fixed"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#0e0e10] border-[1.35px] border-[#161618] rounded-[10px] overflow-hidden hover:border-primary-fixed/10 hover:border transition-all duration-300 projectCard">
                <div className="relative w-full h-68 border-b-[1.35px] border-[#161618] overflow-hidden">
                  <img
                    src={project2Img}
                    alt="img_siteEcommerce"
                    className="w-full h-full bg-cover object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6 flex-col flex gap-3">
                  <h2 className="text-2xl font-body font-bold text-white">
                    Institute L.C.M
                  </h2>
                  <p className="text-[#c6c8b2] text-[16px] font-body my-2 leading-6 word-spacing-[0.2em]">
                    Une solution e-commerce sur mesure pour la vente de livres,
                    pensée pour offrir simplicité, fluidité et fiabilité aux
                    utilisateurs. Dotée de paiements multi-canaux (Orange Money,
                    Mobile Money, PayPal) et conçue avec React, TypeScript,
                    TailwindCSS et Express.js.
                  </p>
                  <div className="flex gap-3 my-4 w-[83%] flex-wrap">
                    <ButtonStyle
                      value="React"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TypeScript"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TailwindCSS"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoMdLink className="size-4.5 text-white mt-0.5" />
                        <span className="text-[14px] text-white font-medium ">
                          Live Demo
                        </span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoCode className="size-4.5 text-[#6b7280] mt-0.3" />
                        <span className="text-[14px] text-[#6b7280] font-medium ">
                          Live Demo
                        </span>
                      </div>
                    </div>
                    <Pourcentage
                      value={5}
                      size={40}
                      strokeWidth={6}
                      colorClass="text-primary-fixed"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#0e0e10] border-[1.35px] border-[#161618] rounded-[10px] overflow-hidden hover:border-primary-fixed/10 hover:border transition-all duration-300 projectCard">
                <div className="relative w-full h-68 border-b-[1.35px] border-[#161618] overflow-hidden">
                  <img
                    src={project4Img}
                    alt="img_portfolio"
                    className="w-full h-full bg-cover object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6 flex-col flex gap-3">
                  <h2 className="text-2xl font-body font-bold text-white">
                    Portfolio
                  </h2>
                  <p className="text-[#c6c8b2] text-[16px] font-body my-2 leading-6 word-spacing-[0.2em]">
                    Un portfolio digital moderne combinant une interface fluide
                    pour les visiteurs et un back office puissant pour la
                    gestion et l’analyse. Construit avec React, TypeScript,
                    TailwindCSS et Express.js, il allie performance, esthétique
                    et contrôle total.
                  </p>
                  <div className="flex gap-3 my-4 w-[83%] flex-wrap">
                    <ButtonStyle
                      value="React"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TypeScript"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TailwindCSS"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="Express.js"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoMdLink className="size-4.5 text-white mt-0.5" />
                        <span className="text-[14px] text-white font-medium ">
                          Live Demo
                        </span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoCode className="size-4.5 text-[#6b7280] mt-0.3" />
                        <span className="text-[14px] text-[#6b7280] font-medium ">
                          Live Demo
                        </span>
                      </div>
                    </div>
                    <Pourcentage
                      value={20}
                      size={40}
                      strokeWidth={6}
                      colorClass="text-primary-fixed"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#0e0e10] border-[1.35px] border-[#161618] rounded-[10px] overflow-hidden hover:border-primary-fixed/10 hover:border transition-all duration-300 projectCard">
                <div className="relative w-full h-68 border-b-[1.35px] border-[#161618] overflow-hidden">
                  <img
                    src={project5Img}
                    alt="img_siteEcommerce"
                    className="w-full h-full bg-cover object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6 flex-col flex gap-3">
                  <h2 className="text-2xl font-body font-bold text-white">
                    Institute L.C.M
                  </h2>
                  <p className="text-[#c6c8b2] text-[16px] font-body my-2 leading-6 word-spacing-[0.2em]">
                    Une solution e-commerce sur mesure pour la vente de livres,
                    pensée pour offrir simplicité, fluidité et fiabilité aux
                    utilisateurs. Dotée de paiements multi-canaux (Orange Money,
                    Mobile Money, PayPal) et conçue avec React, TypeScript,
                    TailwindCSS et Express.js.
                  </p>
                  <div className="flex gap-3 my-4 w-[83%] flex-wrap">
                    <ButtonStyle
                      value="React"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TypeScript"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                    <ButtonStyle
                      value="TailwindCSS"
                      className="bg-[#393F25] text-primary-fixed text-[14px] font-medium py-1 px-3 rounded-xs cursor-default"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoMdLink className="size-4.5 text-white mt-0.5" />
                        <span className="text-[14px] text-white font-medium ">
                          Live Demo
                        </span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer translate-y-2">
                        <IoCode className="size-4.5 text-[#6b7280] mt-0.3" />
                        <span className="text-[14px] text-[#6b7280] font-medium ">
                          Live Demo
                        </span>
                      </div>
                    </div>
                    <Pourcentage
                      value={5}
                      size={40}
                      strokeWidth={6}
                      colorClass="text-primary-fixed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*********************************************  Section Experience ******************************************/}
        <div
          className="w-full bg-[#131313] flex justify-center items-center h-auto py-30"
          id="experiences"
        >
          <div className="w-full flex flex-col items-center gap-24 max-w-410 mx-auto px-5 max-useCase2:px-3.25">
            <h2 className="text-[40px] font-bold text-white font-body text-center max-useCase2:text-[31px]">
              Parcours & Expériences
            </h2>
            <div className="w-full h-auto flex flex-col gap-18">
              <Experience
                title="Parcours & Expériences"
                description=" Formation Développeur Fullstack Node.js 2024 – 2025 · Centre
                    de Formation GetSmarter Formation intensive axée sur le
                    développement d’applications web modernes, couvrant
                    l’ensemble de la chaîne technique, du frontend au backend.
                    Acquisition de solides compétences en HTML, CSS, JavaScript
                    et TypeScript, ainsi qu’en conception d’interfaces avec
                    React et TailwindCSS. Côté backend, mise en pratique avec
                    Node.js, Express et NestJS, accompagnée de la gestion de
                    bases de données SQL et NoSQL (MongoDB). La formation inclut
                    également la modélisation UML, l’analyse de projets et les
                    fondamentaux du design UI/UX, permettant d’aborder chaque
                    projet avec une vision complète, à la fois technique et
                    produit."
                date="2024 — Fin 2025"
                role="TRAINING"
                stack="fullstack developpement . ui/ux design"
                company="Getsmarter"
                lieu="Logpom Carrefour Market, Douala, Cameroun"
              />
              <Experience
                title="Exploration & Projets Personnels"
                description=" Une démarche continue d’apprentissage à travers la création
                    de projets concrets, me permettant d’expérimenter, de
                    structurer mes idées et de consolider mes compétences
                    techniques. Chaque projet devient un véritable terrain
                    d’exploration, où je travaille aussi bien la performance que
                    le design et la logique produit. Cette approche me permet de
                    renforcer ma capacité à concevoir des applications
                    complètes, à résoudre des problématiques réelles et à
                    affiner progressivement ma vision du développement moderne,
                    entre rigueur technique et expérience utilisateur."
                date="2026 — Présent"
                role="PERSONAL WORK"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyPortfolio;
