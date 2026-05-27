/**
 * @typedef {Object} FooterLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} FooterSectionData
 * @property {string} title
 * @property {FooterLink[]} links
 */

/** @type {FooterSectionData[]} */
export const footerSections = [
  {
    title: "Company Info",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" }
    ]
  },
  {
    title: "Customer Service",
    links: [
      { label: "Returns", href: "/returns" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Track Order", href: "/track-order" },
      { label: "Support", href: "/support" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" }
    ]
  }
];