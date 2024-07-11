import { motion } from 'framer-motion';

const AnimationTest: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="w-20 h-20 bg-blue-500 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>
    </div>
  );
};

export default AnimationTest;