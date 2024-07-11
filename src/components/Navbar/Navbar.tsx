import { motion, useCycle, AnimatePresence, MotionConfig } from 'framer-motion';

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-stone-900 z-30">
      <div className="container mx-auto h-full flex items-center">
        <div className="relative z-10">
          <motion.button
            type="button"
            animate={mobileNav ? 'open' : 'closed'}
            onClick={() => toggleMobileNav()}
            className="flex flex-col space-y-1"
          >
            <motion.span
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1, y: 0 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.25,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: '0%',
                  transition: {
                    type: 'spring',
                    bounce: 0.25,
                    when: 'beforeChildren',
                  },
                },
                closed: {
                  x: '-100%',
                  transition: {
                    type: 'spring',
                    bounce: 0.25,
                    when: 'afterChildren',
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-neutral-800 space-y-10 
                      p-6 container mx-auto flex flex-col justify-center"
            >
              <motion.div
                variants={{
                  open: { y: '0%', opacity: 1 },
                  closed: { y: '25%', opacity: 0 },
                }}
              >
                <ul className="space-y-5">
                  <li>
                    <a
                      href="#hero"
                      className="text-4xl font-bold text-gray-400 hover:text-purple-500"
                      onClick={() => toggleMobileNav()}
                    >
                      Link-1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-4xl font-bold text-gray-400 hover:text-purple-500 "
                      onClick={() => toggleMobileNav()}
                    >
                      Link-2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-4xl font-bold text-gray-400 hover:text-purple-500"
                      onClick={() => toggleMobileNav()}
                    >
                      Link-3
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: { y: '0%', opacity: 1 },
                  closed: { y: '25%', opacity: 0 },
                }}
                className="w-full bg-white h-px"
              ></motion.div>
              <motion.div
                variants={{
                  open: { y: '0%', opacity: 1 },
                  closed: { y: '25%', opacity: 0 },
                }}
              >
                <ul className="flex items-center gap-x-5 justify-center">
                  <li>
                    <div className=" w-10 h-10 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className=" w-10 h-10 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className=" w-10 h-10 rounded-lg bg-gray-300"></div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
