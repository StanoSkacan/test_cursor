"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Domov", href: "#top" },
  { label: "Sluzby", href: "#sluzby" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "O nas", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", isOpen);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [isOpen]);

  return (
    <main className={`page-shell ${isOpen ? "page-shell--menu-open" : ""}`}>
      <button
        className={`menu-toggle ${isOpen ? "menu-toggle--open" : ""}`}
        type="button"
        aria-label={isOpen ? "Zatvorit navigaciu" : "Otvorit navigaciu"}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="site-navigation"
        className={`top-navigation ${isOpen ? "top-navigation--open" : ""}`}
        aria-label="Hlavna navigacia"
        aria-hidden={!isOpen}
      >
        <div className="navigation-inner">
          <a className="brand" href="#top" onClick={() => setIsOpen(false)}>
            Skyline
          </a>
          <p className="menu-label">Menu</p>
          <div className="navigation-links">
            {navigationItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">Next.js demo</p>
        <h1>Biele fullscreen hamburger menu.</h1>
        <p className="hero-copy">
          Klikni na hamburger vpravo hore. Menu sa vysunie zhora, prekryje
          cely layout a zobrazi polozky pod sebou.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => setIsOpen(true)}>
            Otvorit menu
          </button>
          <a href="#preview">Pozriet demo</a>
        </div>
      </section>

      <section id="preview" className="preview-card" aria-label="Ukazka obsahu">
        <div>
          <p>Aktualny stav</p>
          <strong>{isOpen ? "Navigacia je otvorena" : "Navigacia je zatvorena"}</strong>
        </div>
        <span className="status-dot" />
      </section>
    </main>
  );
}
