"use client";

import meImage from "../assets/me.jpg";
import Image from "next/image";
import AnimatedCard from "../components/animatedCard";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="font-archivo min-h-screen text-foreground p-4 md:p-8 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 grid-rows-7">
      <AnimatedCard
        initial={{ opacity: 0, scaleY: 0, originY: 1 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
        className="bg-primary md:col-span-3 p-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="font-archivo font-bold text-foreground text-2xl md:text-3xl text-center flex items-center justify-center h-full"
        >
          Made by Diogo
        </motion.h1>
      </AnimatedCard>

      <div className="md:col-span-2 pt-4 md:pt-0 grid md:grid-cols-8 gap-8 row-span-6">
        <AnimatedCard
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-primary col-span-6 md:col-span-5 p-14 pt-12 rounded-2xl shadow-lg transition-shadow duration-300 flex flex-col justify-between"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 2.3 }}
            className="font-sans font-extrabold text-foreground text-6xl"
          >
            University Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.1 }}
            className="text-foreground font-semibold md:text-base pt-6 pb-4"
          >
            Explore a collection of academic projects made at Universidade de
            Aveiro during my bachelor's.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            whileHover={{
              backgroundColor: "var(--secondary)",
              transition: { duration: 0.1, delay: 0 },
            }}
            className="bg-variant text-foreground font-semibold p-4 rounded-xl transition-colors duration-300 w-1/3 self-start"
          >
            Explore
          </motion.button>
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
          className="bg-secondary col-span-6 md:col-span-4 p-4"
        >
          <div className="flex items-center justify-center h-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="font-sans font-bold text-foreground text-lg p-8"
            >
              Hello! I'm Diogo Falcão, a Software Engineer at the University of
              Aveiro. I'm 21 years old and in the final year of my Computer
              Science degree at Universidade de Aveiro, Portugal. Feel free to
              explore my website.
            </motion.h1>
          </div>
        </AnimatedCard>

        <AnimatedCard
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="bg-variant col-span-6 md:col-span-4 p-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="font-sans font-extrabold text-foreground text-3xl p-8"
          >
            Digital Skills
          </motion.h1>

          <div className="flex flex-wrap gap-4 ps-8">
            <div className="bg-primary p-4 rounded-xl transition hover:bg-surface">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="text-foreground font-semibold"
              >
                Kotlin
              </motion.h1>
            </div>
            <div className="bg-primary p-4 rounded-xl transition hover:bg-surface">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="text-foreground font-semibold"
              >
                Flutter
              </motion.h1>
            </div>
            <div className="bg-primary p-4 rounded-xl transition hover:bg-surface">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="text-foreground font-semibold"
              >
                TypeScript
              </motion.h1>
            </div>
            <div className="bg-primary p-4 rounded-xl transition hover:bg-surface">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="text-foreground font-semibold"
              >
                Java
              </motion.h1>
            </div>
            <div className="bg-primary p-4 rounded-xl transition hover:bg-surface">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="text-foreground font-semibold"
              >
                C#
              </motion.h1>
            </div>
            <div className="bg-primary p-4 rounded-xl transition hover:bg-surface">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="text-foreground font-semibold"
              >
                React Native
              </motion.h1>
            </div>
            <div className="bg-primary p-4 rounded-xl transition hover:bg-surface">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="text-foreground font-semibold"
              >
                More
              </motion.h1>
            </div>
          </div>
        </AnimatedCard>
      </div>

      <div className="grid h-full grid-rows-2 gap-8 row-span-6 pt-4 md:pt-0">
        <AnimatedCard
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-secondary row-span-2 p-14 flex flex-col justify-between"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="font-sans font-extrabold text-foreground text-6xl"
          >
            My Personal Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
            className="text-foreground font-semibold md:text-base pt-6"
          >
            Here you can find a growing collection of personal projects I've
            been working on during my free time. It's small right now, but hey,
            even the best things start in a modest way.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            whileHover={{
              backgroundColor: "var(--primary)",
              transition: { duration: 0.1, delay: 0 },
            }}
            className="bg-surface text-foreground font-semibold p-4 rounded-xl transition-colors duration-300 w-1/3 self-start"
          >
            See More
          </motion.button>
        </AnimatedCard>

        <AnimatedCard
          initial={{ scaleX: 0, scaleY: 0, originX: 0, originY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="bg-primary row-span-2 p-6"
        >
          <ul className="list-none">
            <li className="text-foreground font-semibold md:text-base p-8">
              <div className="flex gap-4 items-center justify-between">
                <a
                  href="https://github.com/falcaodiogo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/diogofalcao2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:falcao.diogo@ua.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </div>
            </li>
          </ul>
        </AnimatedCard>
      </div>
    </div>
  );
}
