"use client";
import { motion } from "framer-motion";

const Transition = ({
  children,
  className,
}: {
  children: React.ReactNode;
  key?: any;
  className?: string;
}) => (
  <motion.div
    animate="in"
    initial="out"
    exit="out"
    className={className}
    variants={{
      in: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      out: {
        opacity: 0,
        x: 0,
        y: -100,
      },
    }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default Transition;
