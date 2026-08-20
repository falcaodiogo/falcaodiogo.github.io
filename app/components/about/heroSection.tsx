import { presentationText } from "@/app/data/about";
import Image from "next/image";
import NavButton from "../button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

type HeroSectionProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroSection: React.FC<HeroSectionProps> = ({ setIsModalOpen }) => {
  const presentationWords = presentationText.split(" ");

  return (
    <div className="hero-section md:py-8 flex flex-col md:flex-row md:justify-around items-center gap-16 md:gap-0 mt-20">
      <div className="flex flex-col gap-4 w-3/4 md:w-1/3">
        <div className="w-full flex items-center justify-between gap-2">
          <div className="flex flex-col gap-4 min-w-32 hero-element">
            <h1 className="text-5xl md:text-7xl">{"Hey ;)"}</h1>
            <h1 className="text-2xl md:text-2xl">I&apos;m Diogo!</h1>
          </div>
          <Image
            src="/assets/profile-picture.png"
            alt="profile picture"
            width={150}
            height={150}
            className="rounded-lg object-cover md:w-1/4 z-10 md:hidden hero-image"
          />
        </div>

        <h1 className="py-12 md:text-lg">
          {presentationWords.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="presentation-word inline-block"
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <div className="flex flex-col w-auto md:flex-row gap-4 hero-element">
          <NavButton
            variant="solid"
            className="w-auto"
            icon={<ArrowBackIcon className="align-middle" fontSize="small" />}
            onClick={() => window.history.back()}
          >
            Go back
          </NavButton>

          <NavButton
            variant="solid"
            className="w-auto"
            icon={
              <FileDownloadIcon className="align-middle" fontSize="small" />
            }
            onClick={() => setIsModalOpen(true)}
          >
            Download CV
          </NavButton>
        </div>
      </div>

      <Image
        src="/assets/profile-picture.png"
        alt="profile picture"
        width={200}
        height={200}
        className="rounded-xl object-cover md:w-1/4 z-10 hidden md:block hero-image"
      />
    </div>
  );
};

export default HeroSection;
