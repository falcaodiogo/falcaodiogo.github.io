"use client";

import meImage from "../assets/me.jpg";
import Image from "next/image";
import AnimatedCard from "../components/animatedCard";

export default function Page() {
  return (
    <div className="font-archivo min-h-screen text-foreground p-4 md:p-8 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 grid-rows-7">
      <AnimatedCard
        initial={{ opacity: 0, scaleY: 0, originY: 1 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
        className="bg-primary md:col-span-3 p-6"
      >
        <h1 className="font-archivo font-extrabold text-foreground text-2xl md:text-3xl text-center flex items-center justify-center h-full">
          Diogo's Website Portfolio
          
        </h1>
      </AnimatedCard>

      <div className="md:col-span-2 pt-4 md:pt-0 grid md:grid-cols-8 gap-8 row-span-6">
        <AnimatedCard
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-primary col-span-6 md:col-span-5 p-6 pt-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h1 className="font-sans font-extrabold text-foreground text-6xl p-8">
            University Projects
          </h1>

          <p className="text-foreground/80 font-semibold md:text-base pt-4 p-8">
            Click here to discover my projects in university.
          </p>
        </AnimatedCard>

        <AnimatedCard
          initial={{ opacity: 0 }}
          animate={{
            x: ["-30%", "-30%", "-30%", "0%"],
            y: ["30%", "30%", "30%", "0%"],
            scale: [1.5, 1, 1, 1],
            opacity: [1, 1, 1, 1],
          }}
          transition={{
            times: [0, 0.5, 0.5, 0.5, 1],
            duration: 1.5,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="bg-terciary col-span-6 md:col-span-3"
        >
          <Image
            src={meImage}
            alt="Me"
            className="w-full h-full object-cover rounded-2xl"
          />
        </AnimatedCard>

        <AnimatedCard
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-secondary col-span-6 md:col-span-4 p-6"
        >
          <h1 className="font-sans font-extrabold text-foreground text-xl p-8">
            Hello, I'm Diogo Falcão and I'm a Software Engineer at University of Aveiro.
          </h1>
        </AnimatedCard>

        <AnimatedCard
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="bg-variant col-span-6 md:col-span-4 p-6"
        >
          <h1 className="font-sans font-extrabold text-foreground text-2xl p-8">
            Programming Languages
          </h1>
        </AnimatedCard>
      </div>

      <div className="grid h-full grid-rows-2 gap-8 row-span-6 pt-4 md:pt-0">
        <AnimatedCard
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-secondary row-span-2 p-6"
        >
          <h1 className="font-sans font-extrabold text-foreground text-6xl p-8">
            My Projects
          </h1>

          <p className="text-foreground/80 font-semibold md:text-base pt-4 p-8">
            Click here to discover my own projects.
          </p>
        </AnimatedCard>
        <AnimatedCard
          initial={{ scaleX: 0, scaleY: 0, originX: 0, originY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="bg-primary row-span-2 p-6"
        >
          <li className="text-foreground/80 font-semibold md:text-base pt-4 p-8">
            Click here to discover my social media and github.
          </li>
        </AnimatedCard>
      </div>
    </div>
  );
}
