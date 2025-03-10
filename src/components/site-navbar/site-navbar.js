import React from "react";
import "./site-navbar.css";

const SiteNavbar = ({ section }) => {
  const sectionLinks = {
    segway: [
      { href: "#villain", label: "Villain" },
      { href: "#fugleman", label: "Fugleman" },
      { href: "#deals", label: "Deals" },
    ],
    mccormick: [
      { href: "#x7", label: "X7 Series" },
      { href: "#x4", label: "X4 Series" },
      { href: "#parts", label: "Parts" },
    ],
    repair: [
      { href: "#booking", label: "Book Service" },
      { href: "#maintenance", label: "Maintenance" },
      { href: "#repairs", label: "Repairs" },
    ],
  };

  return (
    <nav className="site-navbar">
      <div className="navbar-logo">
        <img src="/img/gilbert-full-logo.svg" alt="Dealership Logo" />
      </div>
      <div className="navbar-menu">
        <div className="navbar-top">
          <a href="/segway-powersports">Segway Powersports</a>
          <a href="/mccormick">McCormick</a>
          <a href="/services">Services</a>
        </div>
        <div className="navbar-bottom">
          {sectionLinks[section]?.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SiteNavbar;
