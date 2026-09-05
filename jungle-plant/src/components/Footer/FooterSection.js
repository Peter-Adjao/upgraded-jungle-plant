import React from "react";
import "./FooterSection.css"

/**
 * @param {{ title: string, links: { label: string, href: string }[] }} props
 */
export default function FooterSection({ title, links }) {
  return (
    <section className="footer-section">
      <h3 className="footer-section__header">{title}</h3>
      <ul className="footer-list">
        {links.map((link, index) => (
            <li key={`${index}-${title}`} className="footer-list__item">
            <a href={link.href} className="footer-list__link">{link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}