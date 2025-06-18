"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const ProjectsCard = ({
  name,
  description,
  link,
  image,
  bgColor = "bg-variant",
  buttonColor = "bg-primary",
}: {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
  bgColor?: string;
  buttonColor?: string;
}) => {
  const gradientClasses = {
    "bg-variant": "from-variant",
    "bg-primary": "from-primary",
    "bg-secondary": "from-secondary",
    "bg-tertiary": "from-tertiary",
    "bg-surface": "from-surface",
  };

  const gradientFromClass = gradientClasses[bgColor as keyof typeof gradientClasses] || "from-variant";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "some" }}
    >
      <div
        className={`relative ${bgColor} grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-14 font-bold w-full rounded-2xl shadow-lg overflow-hidden`}
      >
        <div className="flex flex-col justify-evenly md:gap-4 gap-5 z-10 p-8">
          <div className="md:text-6xl text-5xl">{name}</div>
          <div className="text-lg font-semibold">{description}</div>
          <div className="flex md:justify-start justify-center mt-4">
            <a href={link} target="_blank" rel="noreferrer">
              <div
                className={`${buttonColor} text-foreground font-semibold px-6 py-4 rounded-xl hover:brightness-110 transition-colors duration-300`}
              >
                <h1 className="whitespace-nowrap">GitHub link project</h1>
              </div>
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-[3/2] md:aspect-auto md:h-full max-h-[500px]">
          <Image
            src={image}
            alt={name}
            priority
            className="w-full h-full object-cover"
            width={600}
            height={400}
          />
          <div className={`
            absolute inset-0 
            md:bg-gradient-to-r 
            bg-gradient-to-b 
            ${gradientFromClass} 
            via-transparent 
            to-transparent
          `} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;