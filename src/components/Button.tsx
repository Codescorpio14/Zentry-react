type ButtonProps = {
  id: string;
  title: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  containerClass?: string;
};
const Button = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black hover:rounded-sm transition-all hover:px-4 duration-400 ease-in-out ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
