import React from "react";
import "@/styles/FooterSection.css"

/**
 * @param {{ title: string, links: { label: string, href: string }[] }} props
 */
export default function FooterSection({ title, links }) {
  return (
    <div className="footer-section">
      <h3>{title}</h3>

      <ul className="footer-links">
        {links.map((link, index) => (
            <li key={`${index}-${title}`}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}