import Image from "next/image";

export default function ErasmusSection() {
  return (
    <div className="erasmus-section flex flex-col md:flex-row w-full items-center justify-center px-8 py-32 md:px-16 z-10 my-16 md:my-32 rounded-3xl bg-[linear-gradient(to_bottom,black,#003399,black)]">
      <div className="flex flex-col gap-4 text-center md:text-left mb-8 md:mb-0 md:mr-12">
        <p className="text-lg md:text-xl text-zinc-100 max-w-lg mt-2">
          I am currently participating in the <strong>Erasmus+</strong> exchange
          program at the{" "}
          <strong>
            <a
              href="https://www.uni-siegen.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              University of Siegen
            </a>
          </strong>
          .
        </p>
        <p className="font-medium text-lg text-white">
          April 1st - September 1st
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 shrink-0 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
        <Image
          src="/eu_flag.png"
          alt="European Union Logo"
          width={80}
          height={55}
          className="object-contain"
        />
        <div className="w-px h-16 bg-white/20"></div>
        <Image
          src="/uni_logo.jpg"
          alt="University of Siegen Logo"
          width={80}
          height={55}
          className="object-contain"
        />
      </div>
    </div>
  );
}
