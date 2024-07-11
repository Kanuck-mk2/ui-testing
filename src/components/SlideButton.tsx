import { motion, useMotionValue, useTransform } from 'framer-motion';

const SlideButton = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['#55e31e', '#8b2ee8', '#1ebfe3'],
  );

  return (
    <div className='w-full h-screen'>
    <motion.div style={{ background }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0,  }}
        
        style={{ x }}
      >
      <p className='text-white text-5xl font-bold text-center '>Drag Me</p> 
      </motion.div>
    </motion.div>
    </div>
  );
};

export default SlideButton;
