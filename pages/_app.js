import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect } from "react";
import "./global.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />

        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
