import React from "react";
import Layout from "../layouts/index";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../constants/animationParam";
import '../assets/css/contact.css';
import '../assets/css/bootstrap.min.css';
export default function ContactPage() {
  return (
    <Layout>
    <motion.article
      classNameName="entry"
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
                <h1 className="entry-title">Contact Us</h1>
              </header>

              <div classNameName="entry-body">
                

              <div className="send-message">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="section-heading">
                          <h2>Send us a Message</h2>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="contact-form">
                          <form id="contact" action="" method="post">
                              <div className="row">
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                      <fieldset>
                                          <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
                                      </fieldset>
                                  </div>
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                      <fieldset>
                                          <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required=""/>
                                      </fieldset>
                                  </div>
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                      <fieldset>
                                          <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required=""/>
                                      </fieldset>
                                  </div>
                                  <div className="col-lg-12">
                                      <fieldset>
                                          <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                      </fieldset>
                                  </div>
                                  <div className="col-lg-12">
                                      <fieldset>
                                          <button type="submit" id="form-submit" className="btn btn-md download-btn-first animated fadeInLeft wow">Send Message</button>
                                      </fieldset>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  
              
              
              </div>
          </div>
      </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  </Layout>
  );
}
