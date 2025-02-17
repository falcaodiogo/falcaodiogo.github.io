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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "some" }}
    >
      <div
        className={`relative ${bgColor} grid grid-cols-1 md:grid-cols-2 space-x-14 font-bold w-full h-5/6 rounded-2xl shadow-lg overflow-hidden`}
      >
        <div className="flex flex-col justify-evenly space-y-8 z-10 p-8">
          <div className="text-6xl">{name}</div>
          <div className="text-lg font-semibold">{description}</div>
          <div
            className={`${buttonColor} text-foreground font-semibold p-4 rounded-xl hover:brightness-110 transition-colors duration-300 w-1/3 self-start`}
          >
            <a href={link} target="_blank" rel="noreferrer">
              <h1 className="text-center">GitHub link project</h1>
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src={image}
            alt={name}
            priority
            className="w-full h-full object-cover rounded-2xl"
            width={600}
            height={400}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r from-variant via-transparent to-transparent`}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;