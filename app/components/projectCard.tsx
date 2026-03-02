import Image from "next/image";
import NavButton from "./button";
import AddIcon from "@mui/icons-material/Add";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  imageSrc,
  onClick,
}: Readonly<ProjectCardProps>) {
  return (
    <div
      className="flex flex-col font-league-spartan text-base md:text-xl text-zinc-50 font-medium cursor-pointer w-[85vw] max-w-[380px] md:w-[500px] md:max-w-none shrink-0 bg-zinc-900 rounded-2xl"
      onClick={onClick}
    >
      <div className="relative w-full aspect-video md:aspect-auto md:h-[40vh] overflow-hidden rounded-t-2xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, 500px"
        />
      </div>

      <div className="flex items-center justify-between gap-6 px-4 py-4">
        <h1>{title}</h1>
        <NavButton
          variant="outline"
          onClick={onClick}
          icon={<AddIcon fontSize="small" />}
          className="hidden md:block text-lg px-2 py-1"
        >
          Explore
        </NavButton>
      </div>
    </div>
  );
}
