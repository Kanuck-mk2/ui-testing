import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

interface TextSpanProps {
  children: string;
}

const TextSpan: React.FC<TextSpanProps> = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const rubberBand = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, .55, 1)',
        'scale3d(.34, 1.65, 1)',
        'scale3d(1.25, .85, 1)',
        'scale3d(.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
      transition: {
        times: [0, 0.5, 0.6, 0.7, 0.8, 0.9],
        duration: 0.5,
        delay: 0.1,
        ease: 'easeInOut',
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="inline-block txt-gr font-bold font-nunito text-5xl "
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
