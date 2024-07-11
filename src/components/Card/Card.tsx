import { CheckIcon } from '@heroicons/react/16/solid';
import Globe from './Globe';
import Pie from './Pie';
import { useRef, useState } from 'react';

import { ServerIcon } from '@heroicons/react/24/outline';

const Card = () => {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (cardsRef.current != null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <main id="hero" className="w-full h-screen flex justify-center">
      <section
        className="card"
        ref={cardsRef}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        <div className="flex flex-col w-2/5 justify-between">
          <div className="flex flex-col gap-5">
            <ServerIcon className="w-14 rounded-lg bg-neutral-800/70 stroke-cyan-400 p-2 shadow-inner" />

            <h1 className="text-neutral-200 tracking-wide text-2xl">
              Database
            </h1>
            <p className="-mt-2 text-neutral-500 tracking-wide">
              {' '}
              A database is a structured collection of data stored in a computer
              system, facilitating efficient organization and retrieval of
              information.
            </p>
          </div>
          <div className="flex flex-col text-neutral-200 tracking-wide">
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5 text-green-500" />
              <p>Data Storage</p>
            </span>
            <span className="flex flex-row gap-2 ">
              <CheckIcon className="w-5 text-green-500" />
              <p>Querying</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5 text-green-500" />
              <p>Security</p>
            </span>
          </div>
        </div>
        <div className="w-3/5 flex flex-col place-items-center">
          <Globe cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
          <Pie cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
        </div>
      </section>
    </main>
  );
};

export default Card;
