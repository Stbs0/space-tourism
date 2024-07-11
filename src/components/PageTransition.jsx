// src/components/PageTransition.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

const PageTransition = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 1}}
        transition={{ duration: 0.6 }}
        >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
