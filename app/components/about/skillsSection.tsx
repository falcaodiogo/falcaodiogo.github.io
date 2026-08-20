import { digitalSkills, learningSkills } from "@/app/data/about";
import Image from "next/image";
import NavButton from "../button";

export default function SkillsSection() {
  return (
    <div className="skills-section flex flex-col md:flex-row w-full items-center">
      <div className="w-3/4 flex justify-start transform -translate-x-1/4 phone-image">
        <Image
          src="/phone.png"
          alt="Phone"
          width={2200}
          height={2800}
          className="object-contain hidden md:block"
          priority
        />
      </div>

      <div className="flex w-full flex-col items-start px-8 md:px-0 z-10 gap-24 md:gap-48">
        <div className="digital-skills-container flex flex-col items-center md:items-start gap-12">
          <h2 className="text-3xl md:text-5xl skills-title">
            My top digital skills
          </h2>
          <div className="flex flex-wrap gap-4 max-w-2xl justify-center md:justify-start">
            {digitalSkills.map((skill) => (
              <div
                key={skill}
                className="digital-skill-btn px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-sm md:text-base font-medium hover:scale-105"
              >
                {skill}
              </div>
            ))}

            <div className="digital-skill-btn">
              <NavButton
                variant="outline"
                onClick={() => window.open("/CV_Diogo_Falcao.pdf", "_blank")}
              >
                See others in CV
              </NavButton>
            </div>
          </div>
        </div>

        <div className="learning-skills-container flex w-full flex-col items-center md:items-start gap-12">
          <h2 className="text-3xl md:text-5xl skills-title">
            Currently learning
          </h2>
          <div className="flex flex-wrap gap-4 max-w-2xl justify-center md:justify-start">
            {learningSkills.map((skill) => (
              <div
                key={skill}
                className="learning-skill-btn px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-sm md:text-base font-medium hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
