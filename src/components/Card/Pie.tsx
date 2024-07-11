import { useEffect, type RefObject, useState } from 'react';

interface Props {
  cursor: { x: number; y: number };
  cardRef: RefObject<HTMLElement>;
  mouseOnCard: boolean;
}

const Pie = ({ cursor, cardRef, mouseOnCard }: Props) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: '50%',
    cy: '50%',
  });

  useEffect(() => {
    if (cardRef.current && cursor.x != null && cursor.y != null) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24;
      const cyPercentage = (cursor.y / cardRect.height) * 100;
      setGradientCenter({
        cx: `${cxPercentage}`,
        cy: `${cyPercentage}`,
      });
    }
  }, [cursor, cardRef]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 24"
      strokeWidth="0.1"
      stroke="currentColor"
      className="w-96 h-96 duration-200 transition-all "
    >
      <defs>
        <radialGradient
          id="aquaGradient"
          gradientUnits="userSpaceOnUse"
          r={'35%'}
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && <stop stopColor="#f1476b" />}
          <stop offset={1} stopColor="#78f147" />
        </radialGradient>
      </defs>

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-neutral-950/50"
        stroke="url(#aquaGradient)"
        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-neutral-800/50"
        stroke="url(#aquaGradient)"
        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
      />
    </svg>
  );
};

export default Pie;



 
