"use client";

import React, { useState } from "react";
import FooterSection from "./FooterSection";
import { footerSections } from "./footer.config";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import "./Footer.css";


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
              <h2 className="footer__brand-text">Jungle House</h2>

            <p className="brand-description">
              Bringing Nature Home
            </p>

            {/* Newsletter */}
            <div className="footer-newsletter">
                <p className="footer-newsletter__text">Subscribe to our newsletter for garden inspiration and expert plant care tips</p>
                      <div className="input-group">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={inputValue}
                            onChange={handleInput}
                            onBlur={handleBlur}
                            className="footer-input"
                          />
                          <Button 
                           size="lg"
                           variant="subscribe"
                           rounded="right"
                           >
                            Subscribe
                          </Button>
                      </div>
            </div>

            {/* Social Icons */}
            <div className="social-media">
              <h3 className="social-media__title">Connect with us</h3>
              <ul className="social-list">
                <li className="social-list__item">
                    <a
                     href="#" 
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Facebook"
                     className="social-list__link"
                    >
                      <FaFacebook size={25} aria-hidden="true"/>
                    </a> 
                  </li>
                  <li className="social-list__item">
                    <a
                     href="#" 
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Instagram"
                     className="social-list__link"
                    >
                      <FaInstagram size={25} aria-hidden="true"/>
                    </a> 
                  </li> 
                  <li className="social-list__item">
                    <a
                     href="#" 
                     target="_blank"
                     rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="social-list__link"
                    >
                      <FaYoutube size={25} aria-hidden="true"/>
                    </a> 
                  </li>
                  <li className="social-list__item">
                    <a
                     href="#" 
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="X (formally Twitter)"
                     className="social-list__link"
                    >
                      <FaXTwitter size={25} aria-hidden="true"/>
                    </a> 
                  </li>              
              </ul>
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

        <hr className="footer-divider" />
            <div className="footer__copy-right-content">
              <p className="footer__copy-right-text">&copy; {currentYear} Jungle House. All rights reserved.</p>
            </div>
      </div>

    </footer>
  );
}