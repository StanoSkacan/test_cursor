"use client";

import { useState } from "react";

const navigationItems = ["Domov", "Sluzby", "Portfolio", "O nas", "Kontakt"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page-shell">
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
      >
        <div className="navigation-inner">
          <a className="brand" href="#top" onClick={() => setIsOpen(false)}>
            Skyline
          </a>
          <div className="navigation-links">
            {navigationItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">Next.js demo</p>
        <h1>Animovana navigacia, ktora sa vysunie zhora.</h1>
        <p className="hero-copy">
          Klikni na tlacidlo vpravo hore a sleduj plynuly prechod navigacneho
          panelu. Demo je postavene iba na React stave a CSS animaciach.
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
