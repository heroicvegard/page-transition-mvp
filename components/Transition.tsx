"use client";
import { motion } from "framer-motion";

const Transition = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    className={className}
    variants={{
      initial: {
        opacity: 0,
        x: 0,
        y: -100,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      exit: { opacity: 0, x: 0, y: -100 },
    }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default Transition;
