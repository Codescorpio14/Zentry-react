import { FaDiscord, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import BentoTilt from "./BentoTilt";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-8 text-black">
      <BentoTilt className="my-16">
        <AnimatedTitle
          title="Zentr<b>y</b>"
          containerClass="!text-black !text-[26rem]"
        />
      </BentoTilt>

      <div className="flex justify-center  gap-8 py-8">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition scale-150  duration-500 ease-in-out hover:text-white"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Scorpio 2024. All rights reserved
        </p>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-left"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
