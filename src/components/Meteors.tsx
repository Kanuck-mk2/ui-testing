import { cn } from "../constants/cn"

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 100).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-sky-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#48f37b] before:to-transparent",
            className
          )}
          style={{
            top: 4,
            left: Math.floor(Math.random() * (6000 - 40) + 50) + "px",
            animationDelay: Math.random() * (0.9 - 0.1) + 0.4 + "s",
            animationDuration: Math.floor(Math.random() * (90 - 9) + 5) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
