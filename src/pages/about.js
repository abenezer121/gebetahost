import React from "react";
import Layout from "../layouts/index";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../constants/animationParam";

import AboutHero from '../components/hero/AboutHero';
import AboutUs from '../components/hero/AboutUs';


export default function AboutPage() {
  return (
    <Layout>
      <AboutHero
      illustration={AboutUs}
      />
      <motion.article
        className="entry"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        
      </motion.article>
    </Layout>
  );
}
