"use client";

import React, { useState } from "react";
import FooterSection from "./FooterSection";
import { footerSections } from "./footer.config";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import "./Footer.css";


export default function Footer() {

  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);


  function handleInput(e) {
    setInputValue(e.target.value);
    if (hasError) setHasError(false);//clear error
  }

  function handleBlur() {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setHasError(inputValue.length > 0 && !isValidEmail);
  }

  function handleSubmit (e) {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    if (!isValidEmail) {
      setHasError(true);
      return;
    }

    setInputValue(""); 
    setHasError(false);
    setIsSubscribe(true);
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
                We need each other
              </p>

            {/* Newsletter */}
            <div className="footer-newsletter">
                <p className="footer-newsletter__text">Subscribe to our newsletter for garden inspiration and expert plant care tips</p>
                    {isSubscribe ? (
                      <p role="status" className="form__success-message">
                        Thanks for subscribing.
                      </p>
                    ) : ( 
                      <form  method="POST" onSubmit={handleSubmit} className="form">
                        <div className="form__content">
                          <label htmlFor="footer-email" className="label-visually-hidden">
                            Email address
                          </label>
                            <input
                              id="footer-email"
                              type="email"
                              name="email"
                              autoComplete="email"
                              required
                              placeholder="Enter your email"
                              value={inputValue}
                              onChange={handleInput}
                              onBlur={handleBlur}
                              aria-invalid={hasError}
                              aria-describedby={hasError ?  "form__email-error" : undefined}
                              className="form__input"
                            />
                            <Button 
                            type="submit"
                            size="lg"
                            variant="subscribe"
                            rounded="right"
                            >
                              Subscribe
                            </Button>
                      </div>
                      <p 
                      id="form__email-error" 
                      role="alert" 
                      className="form__input-error"> 
                          {hasError ? "Please enter a valid email address." : "" }
                      </p>
                      </form>
                    )}
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