import NavButton from "../button";
import Image from "next/image";

export default function ContactsSection() {
  return (
    <div className="contacts-section flex flex-col justify-center items-center gap-12 pb-44">
      <h1 className="text-3xl md:text-5xl contact-element">Contacts</h1>
      <div className="flex flex-col items-center md:flex-row gap-6 md:gap-8">
        <div className="contact-element">
          <NavButton
            variant="solid"
            onClick={() =>
              window.open(
                "https://github.com/falcaodiogo",
                "_blank",
                "noopener,noreferrer",
              )
            }
            icon={
              <Image
                src="/github_logo.png"
                alt="GitHub Logo"
                width={20}
                height={20}
                className="align-middle"
              />
            }
          >
            GitHub
          </NavButton>
        </div>
        <div className="contact-element">
          <NavButton
            variant="solid"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/diogofalcao2/",
                "_blank",
                "noopener,noreferrer",
              )
            }
            icon={
              <Image
                src="/linkedin_logo.png"
                alt="linkedin Logo"
                width={16}
                height={16}
                className="align-middle"
              />
            }
          >
            LinkedIn
          </NavButton>
        </div>
        <div className="contact-element">
          <NavButton
            variant="solid"
            onClick={() =>
              window.open(
                "mailto:falcao.diogo@ua.pt",
                "_blank",
                "noopener,noreferrer",
              )
            }
            icon={
              <Image
                src="/outlook.png"
                alt="outlook Logo"
                width={20}
                height={20}
                className="align-middle filter grayscale"
              />
            }
          >
            Email
          </NavButton>
        </div>
      </div>
    </div>
  );
}
