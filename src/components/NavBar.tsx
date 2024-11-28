import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="Logo" className="w-10" />
            <Button
              id="products-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 md:flex hidden items-center justify-center gap-1 hover:!bg-blue-100 "
            />
          </div>

          <div className="flex items-center h-full">
            <div className="hidden md:block">
              {navItems.map((item, i) => (
                <a
                  href={`#${item.toLowerCase()}`}
                  key={i}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudio}
              className="ml-10 flex items-center space-x-0.5 "
            >
              <audio
                ref={audioRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isActive ? "active" : ""}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
