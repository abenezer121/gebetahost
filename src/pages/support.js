import React from "react";
import Layout from "../layouts/index";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../constants/animationParam";

export default function SupportPage() {
  return (
    <Layout>
      <motion.article
        className="entry"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Support</h1>
                </header>

                <div className="entry-body">
                  {/* <p>Add your support information here.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Layout>
  );
}
