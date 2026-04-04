import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

type ExperienceProps = {
  title: string;
  description: string;
  date: string;
  role: string;
  stack?: string;
  company?: string;
  lieu?: string;
};

const Experience: React.FC<ExperienceProps> = ({
  title,
  description,
  date,
  role,
  stack,
  company,
  lieu,
}) => {
  const [isRelaxed, setIsRelaxed] = React.useState(false);

  const onclick = () => {
    setIsRelaxed(!isRelaxed);
  };

  return (
    <div className="flex flex-col gap-1 pb-13 border-b-[1.35px] border-[#161618]">
      <div className="flex justify-between items-center mb-7">
        <div className="flex gap-15 items-center max-[840px]:flex-col max-[840px]:items-start max-[840px]:gap-5">
          <span className="text-[#6b7280] text-[14px] uppercase font-body font-medium max-[434px]:text-[13px] ">
            {date}
          </span>
          <h3 className="text-white font-bold text-[25px] font-body max-[434px]:text-[23px] ">
            {title}
          </h3>
        </div>
        <div className="flex gap-4 items-center max-[840px]:hidden">
          <span className="text-[#6b7280] text-[14px] uppercase font-body font-medium">
            {role}
          </span>
          <div className="cursor-pointer flex items-center p-2 justify-center">
            <FaChevronDown
              className={`text-white size-4  transition-all duration-300 ${isRelaxed ? "rotate-180" : ""}`}
              onClick={onclick}
            />
          </div>
        </div>
      </div>
      <div
        className={`w-full overflow-hidden transition-all duration-300 ${isRelaxed ? "h-auto" : "h-18"}`}
      >
        <p className="text-[#6b7280] text-[14px] font-medium font-body leading-6 word-spacing-[0.2em] transition-all duration-300 max-w-250">
          {description}
        </p>
      </div>
      <span
        className={`text-[#c7ce98] text-[13px] lowercase font-medium font-body cursor-pointer transition-all duration-300`}
        onClick={onclick}
      >
        {isRelaxed ? "...réduire" : "...plus "}
      </span>
      {stack && (
        <div className="my-5 mt-8">
          <p className="text-[#c7ce98] text-[14px] uppercase font-medium font-body max-[434px]:text-[11px] max-[434px]:font-semibold">
            stack: {stack}
          </p>
        </div>
      )}
      <div className="flex gap-7 items-center">
        {company && (
          <span className="text-white text-[14px] font-bold font-body">
            {company}
          </span>
        )}
        {lieu && (
          <p className="flex gap-1 items-center text-[14px]">
            <MapPinIcon className="size-3.5 text-[#8d93a1]" />
            <span className="text-[#6b7280]">{lieu}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Experience;
