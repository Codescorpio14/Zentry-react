import { TiLocationArrow } from "react-icons/ti";

type BentoCardProps = {
  src: string;
  title: React.ReactNode;
  description: string;
  isComingSoon?: boolean;
};
const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between  p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/40">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoCard;
