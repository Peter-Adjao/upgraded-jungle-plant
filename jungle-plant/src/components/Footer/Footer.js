"use client";

import React, { useState } from "react";
import FooterSection from "./FooterSection";
import { footerSections } from "./footer.config";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Button from "@/components/ui/Button"
import "@/styles/Footer.css";


export default function Footer() {

  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Please enter a valid email address 😥");
    }
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">

      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand Section */}
          <div className="footer-brand">

            <div className="footer-logo">
              <h2 className="footer-logo-text">Jungle House</h2>
            </div>

            <p className="footer-description">
              Bringing Nature Home
            </p>

            {/* Newsletter (Your Feature) */}
            <div className="footer-newsletter">

                <p>Subscribe to our newsletter for garden inspiration and expert plant care tips</p>
                      <div className="input-group">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={inputValue}
                            // onChange={handleInput}
                            // onBlur={handleBlur}
                            className="footer-input"
                          />
                          <Button className>
                            Subscribe
                          </Button>
                      </div>
            </div>

            {/* Social Icons */}
            <div className="social-container">
                  <div>
                    <h3>Connect with us</h3>
                  </div>
                        <div className="footer-social">
                              <div className="social-icon facebook">
                                  <a href="#" aria-label="Facebook">
                                      <FaFacebook size={25} color="white"/>
                                  </a>  
                              </div> 
                              <div className="social-icon instagram">
                                  <a href="#" aria-label="Instagram">
                                      <FaInstagram size={25} color="white" />
                                  </a>
                              </div>
                              <div className="social-icon youtube">
                                  <a href="#" aria-label="Youtube">
                                      <FaYoutube size={25} color="white" />
                                  </a>
                              </div>
                              <div className="social-icon X">
                                  <a href="#" aria-label="X">
                                      <FaXTwitter size={25} color="white" />
                                  </a>
                              </div>
                        </div>
            </div>

          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

        </div>

        <hr />

        <div className="footer-bottom">
          <p>© {currentYear} Jungle House. All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
}